const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { url, path_screenshoots, scenarios, before_version, after_version, options } = config;

let scenariosReport = [];

async function executeTest() {
    let resultInfo = {}
    let datetime = new Date().toISOString().replace(/:/g,".");
    for(let [scenario, steps] of Object.entries(scenarios)) {
        for(let i = 1; i < steps - 1; i++) {
          const data = await compareImages(
              fs.readFileSync(`${path_screenshoots}${scenario}/${before_version}_${scenario}_${i}.png`),
              fs.readFileSync(`${path_screenshoots}${scenario}/${after_version}_${scenario}_${i}.png`),
              options
          );
          resultInfo[scenario] = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime
          }
          if (!fs.existsSync(`./results/${scenario}`)){
            fs.mkdirSync(`./results/${scenario}`, { recursive: true });
          }
          fs.writeFileSync(`./results/${scenario}/compare_step_${i}.png`, data.getBuffer());
          scenariosReport.push(createScenarioReport(scenario, i, resultInfo[scenario]));
        }      
    }
    fs.mkdirSync(`./results/${datetime}`, { recursive: true });
    fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime, resultInfo));
    fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);
    scenariosReport.map(scenario => scenario)
    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;  
  }
(async ()=>console.log(await executeTest()))();

function createScenarioReport(scenario, step, info) {
    return `<div class="scenario" id="test0">
    <div class=" btitle">
        <h2>Scenario: ${scenario}</h2>
        <h3>Step: ${step}</h3>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="../../${config.path_screenshoots}${scenario}/${config.before_version}_${scenario}_${step}.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="../../${config.path_screenshoots}${scenario}/${config.after_version}_${scenario}_${step}.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="../${scenario}/compare_step_${step}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createStep(step) {
  return `${step}`
}

function createReport(datetime) {
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${scenariosReport.map(step => createStep(step))}
            </div>
        </body>
    </html>`
}