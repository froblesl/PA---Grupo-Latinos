const { Given, When, Then, AfterStep, After, Before  } = require('@cucumber/cucumber');
const assert = require('assert')
const fs = require('fs');

let actualMembers = undefined;
let indexCompare = 0;
let appVersion = '';

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('input[name="identification"]');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('input[name="password"]');
    return await element.setValue(password);
});

When('I click next', async function() {
    let element = await this.driver.$('button[type="submit"]');
    return await element.click();
})

When('I see the dashboard metrics {kraken-string}', async function (test_version) {
    let element = await this.driver.$('div.gh-dashboard-summary.small > div.data-container > div.data');
    if(test_version != "4.44.0") {
        element = await this.driver.$('div.gh-dashboard-metric.is-large > div > div > span');
    }
    this.actualMembers = await element.getText();
})

Then('The number of members is displayed as {string}', async function (expected) {
    assert.notEqual(this.actualMembers, expected)
})

// Second scenary
When('I click on Members', async function() {
    let element = await this.driver.$('a[href="#/members/"]');
    return await element.click();
})

When('I click on New member', async function() {
    let element = await this.driver.$('a[href="#/members/new/"]');
    return await element.click();
})

When('I enter member name {kraken-string}', async function (name) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(name);
});

When('I enter member email {kraken-string}', async function (email) {
    let element = await this.driver.$('#member-email');
    return await element.setValue(email);
});

When('I enter member label {kraken-string}', async function (label) {
    let element = await this.driver.$('.ember-power-select-trigger-multiple-input');
    return await element.setValue(label);
    
});

When('I click add new member label', async function () {
    let addElement  = await this.driver.$('div.ember-basic-dropdown-content-wormhole-origin > div > ul > li');
    return await addElement.click();
});

When('I enter member note {kraken-string}', async function (note) {
    let element = await this.driver.$('#member-note');
    return await element.setValue(note);
});

Then('I click Save component', async function () {
    let element = await this.driver.$('.view-actions > button');
    return await element.click();
});

Then('I click to return of Member list', async function () {
    let element = await this.driver.$('a[href="#/members/"]');
    return await element.click();
});

Then('The name of new member is displayed as {kraken-string}', async function (expected) {
    let element = await this.driver.$(`tbody.ember-view > tr > a > div > div > h3.ma0.pa0.gh-members-list-name`);
    let nameNewMember = await element.getText();
    assert.equal(nameNewMember, expected)
})

Then('The email of new member is displayed as {kraken-string}', async function (expected) {
    let element = await this.driver.$(`tbody.ember-view > tr > a > div > div > p.ma0.pa0.middarkgrey.f8.gh-members-list-email`);
    let emailNewMember = await element.getText();
    assert.equal(emailNewMember, expected)
})

Then('I click on Member exist',  async function () {
    let element = await this.driver.$(`h3.ma0.pa0.gh-members-list-name`);
    return await element.click();
})

// Third scenary
When('I click on the first member of the list', async function () {
    let element = await this.driver.$(`tbody.ember-view > tr > a > div > div > h3.ma0.pa0.gh-members-list-name`);
    return await element.click();
})

When('I click on Member actions', async function () {
    let element = await this.driver.$(`section.view-actions > span.dropdown > button`);
    return await element.click();
})

When('I click on Delete member option', async function () {
    let element = await this.driver.$(`button.mr2 > span.red`);
    return await element.click();
})

Then('I confirm Delete component', async function () {
    let element = await this.driver.$(`button.gh-btn.gh-btn-red.gh-btn-icon.ember-view`);
    return await element.click();
})

Then('The name of new member is not displayed as {kraken-string}', async function (expected) {
    let element = await this.driver.$(`tbody.ember-view > tr > a > div > div > h3.ma0.pa0.gh-members-list-name`);
    let member = await element.getText();
    assert.notEqual(member, expected)
})

// Fourt scenary
Then('I click on Posts', async function () {
    let element = await this.driver.$(`a.ember-view[href="#/posts/"]`);
    return await element.click();
})

When('I click on New post', async function () {
    let element = await this.driver.$(`a.ember-view.gh-btn.gh-btn-primary[href="#/editor/post/"]`);
    return await element.click();
})

When('I enter Post title {kraken-string}', async function (title) {
    let element = await this.driver.$('textarea.gh-editor-title.ember-text-area.gh-input.ember-view[placeholder="Post title"]');
    return await element.setValue(title);
})

When('I click on Begin writing your post', async function () {
    let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    return await element.click();
})

When('I enter content post {kraken-string}', async function (content) {
    let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    return await element.setValue(content);
})

When('I click on Edit post', async function () {
     let element = await this.driver.$(`h3.gh-content-entry-title`);
     return await element.click();
})

When('I click Editor post {kraken-string}', async function (test_version) {
    if(test_version != "4.44.0") {
        let element = await this.driver.$(`div > header > button.gh-btn-editor.gh-publish-back-button`);
        return await element.click();
    }
})

Then('I click on Publish {kraken-string} {kraken-string}', async function (test_version, programmed) {
    let element;
    if(test_version != "4.44.0") {
        element = await this.driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger[data-test-button="publish-flow"]');
        return await element.click();
    } else {
        element = await this.driver.$('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-editor.gh-publishmenu-trigger');
        await element.click();
        if(programmed == "no") {
            element = await this.driver.$('button.gh-btn.gh-btn-black.gh-btn-icon.ember-view');
            await element.click();
            return await element.click();
        }
    }
})

Then('I click Continue, final review {kraken-string}', async function (test_version) {
    if(test_version != "4.44.0") {
        let element = await this.driver.$('button.gh-btn.gh-btn-black.gh-btn-large[data-test-button="continue"]');
        return await element.click();
    }
})

Then('I click Publish component {kraken-string} {kraken-string}', async function (test_version, programmed) {
    if(test_version != "4.44.0") {
        let element = await this.driver.$('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view[data-test-button="confirm-publish"]');
        return await element.click();
    } else {
        if(programmed == "yes") {
            element = await this.driver.$('button.gh-btn.gh-btn-black.gh-btn-icon.ember-view');
            await element.click();
            return await element.click();
        }
    }
})

Then('I click to return of Post list', async function () {
    let element = await this.driver.$('a.ember-view.gh-editor-back-button[href="#/posts/"]');
    return await element.click();
})

Then('I click Settings of post', async function () {
    let element = await this.driver.$('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon[title="Settings"]');
    return await element.click();
})

Then('I click Delete post', async function () {
    let element = await this.driver.$('button.gh-btn-icon');
    return await element.click();
})

Then('I confirm Delete post', async function () {
    let element = await this.driver.$('div > div.modal-footer > button.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
    return await element.click();
})

When('I click Type component options', async function () {
    let element = await this.driver.$('div.ember-view.ember-basic-dropdown-trigger.ember-power-select-trigger.gh-contentfilter-menu-trigger > span.ember-power-select-selected-item');
    return await element.click();
})

Then('I click Published component', async function () {
    let element = await this.driver.$('li.ember-power-select-option[data-option-index="2"]');
    return await element.click();
})

When('I click Right now {kraken-string}', async function (test_version) {
    let element;
    if(test_version != "4.44.0") {
        element = await this.driver.$('div.gh-publish-settings > div.gh-publish-setting.last > button');
        return await element.click();
    }
})

Then('I click Schedule for later {kraken-string}', async function (test_version) {
    let element;
    if(test_version != "4.44.0") {
        element = await this.driver.$('div > fieldset > div > div:nth-child(2) > label');
    } else {
        element = await this.driver.$('div.gh-publishmenu-radio:not(.active) > div.gh-publishmenu-radio-button');
    }
    return await element.click();
})

Then('I enter the date and time to Schedule for later {kraken-string} {kraken-string}', async function (date, time) {
    let dateElement = await this.driver.$('input[placeholder="YYYY-MM-DD"]');
    await dateElement.setValue('');
    await dateElement.setValue(date);
    let timeElement = await this.driver.$('div.gh-date-time-picker-time > input');
    await timeElement.setValue('');
    return await timeElement.setValue(time);
})

// Seven scenary
When('I click on Explore', async function () {
    let element = await this.driver.$(`li.relative > a[data-test-nav="explore"]`);
    return await element.click();
})

When('I click on Add your site', async function () {
    let element = await this.driver.$(`button.hidden.cursor-pointer.items-center.whitespace-nowrap`);
    return await element.click();
})

Then('I click on Connect data & edit listing', async function () {
    let element = await this.driver.$(`button[data-test-button="submit-explore"]`);
    return await element.click();
})

// Pages
When('I click Pages', async function () {
    let element = await this.driver.$(`a.ember-view[href="#/pages/"]`);
    return await element.click();
})

When('I click New page', async function () {
    let element = await this.driver.$(`a.ember-view.gh-btn.gh-btn-primary[href="#/editor/page/"]`);
    return await element.click();
})

Then('I enter Page title {kraken-string}', async function (title) {
    let element = await this.driver.$('textarea.gh-editor-title.ember-text-area.gh-input.ember-view[placeholder="Page title"]');
    return await element.setValue(title);
})

Then('I click Begin writing your page', async function () {
    let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    return await element.click();
})

Then('I enter content page {kraken-string}', async function (content) {
    let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    return await element.setValue(content);
})

Then('I click to return of Page list', async function () {
    let element = await this.driver.$('a.ember-view[href="#/pages/"]');
    return await element.click();
})

When('I click on last element Published', async function () {
    let element = await this.driver.$('a.ember-view.permalink.gh-list-data.gh-post-list-title');
    return await element.click();
})

Then('I click Unpublish {kraken-string}', async function (test_version) {
    let element;
    if(test_version != "4.44.0") {
        element = await this.driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-unpublish-trigger[data-test-button = "update-flow"]');
    }
    else {
        element = await this.driver.$('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-editor.gh-publishmenu-trigger');
        await element.click();
        element = await this.driver.$('div.gh-publishmenu-radio:not(.active) > div.gh-publishmenu-radio-button');
    }
    return await element.click();
})

Then('I click Unpublish and revert to private draft {kraken-string}', async function (test_version) {
    let element;
    if(test_version != "4.44.0") {
        element = await this.driver.$('button.gh-revert-to-draft[data-test-button = "revert-to-draft"]');
        return await element.click();
    }    
})

// Tags
When('I click Tags', async function () {
    let element = await this.driver.$(`a.ember-view[href="#/tags/"]`);
    return await element.click();
})

When('I click New tag', async function () {
    let element = await this.driver.$(`a.ember-view.gh-btn.gh-btn-primary[href="#/tags/new/"]`);
    return await element.click();
})

Then('I enter tag name {kraken-string}', async function (name) {
    let element = await this.driver.$('#tag-name');
    return await element.setValue(name);
});

Then('I enter tag slug {kraken-string}', async function (name) {
    let element = await this.driver.$('#tag-slug');
    return await element.setValue(name);
});

Then('I enter tag description {kraken-string}', async function (name) {
    let element = await this.driver.$('#tag-description');
    return await element.setValue(name);
});

Then('I click to return of Tag list', async function () {
    let element = await this.driver.$('a[href="#/tags/"]');
    return await element.click();
});

When('I enter tag post {kraken-string}', async function (label) {
    let element = await this.driver.$('input.ember-power-select-trigger-multiple-input');
    return await element.setValue(label);
    
});

When('I click add tag post', async function () {
    let addElement  = await this.driver.$('li.ember-power-select-option[data-option-index="0"]');
    return await addElement.click();
});

When('I click on the first tag of the list', async function () {
    let addElement  = await this.driver.$('h3.gh-tag-list-name');
    return await addElement.click();
});

Then('I click Delete tag', async function () {
    let element = await this.driver.$('button.gh-btn.gh-btn-red.gh-btn-icon')
    return await element.click();
})

// Search member
Then('I click search Member', async function () {
    let element = await this.driver.$('#gh-navigation > div > div.gh-navigation-actions > button')
    return await element.click();
})

Then('I click on search box', async function () {
    let element = await this.driver.$('body > div.h-screen.w-screen.pt-20.antialiased.z-50.relative.ghost-display > div')
    return await element.click();
})

Then('I enter member name on search box {kraken-string}', async function (name) {
    let element = await this.driver.$('input.grow.-my-5.py-5.-ml-3.pl-3')
    return await element.setValue(name);
})

// Profile
When('I click on User avatar', async function () {
    let element = await this.driver.$('div.pe-all');
    return await element.click();
    
});

When('I click on Your profile', async function () {
    let element = await this.driver.$('a[data-test-nav="user-profile"]');
    return await element.click();
    
});

When('I enter user Full name {kraken-string}', async function (fullname) {
    let element = await this.driver.$('#modal-backdrop > section > div.p-8.py-0 > div > div.false.mt-10.grid.grid-cols-1.gap-x-12.gap-y-20.md\\:grid-cols-2 > div:nth-child(1) > div.flex.flex-col.gap-x-5.gap-y-7.undefined > div:nth-child(1) > div > input');
    return await element.setValue(fullname);
});

When('I enter user Location {kraken-string}', async function (location) {
    let element = await this.driver.$('#modal-backdrop > section > div.p-8.py-0 > div > div.false.mt-10.grid.grid-cols-1.gap-x-12.gap-y-20.md\\:grid-cols-2 > div.flex.flex-col.justify-between.gap-10 > div.relative.flex-col.gap-6.rounded-lg.transition-all.flex.is-not-editing.group\\/setting-group.undefined.border-grey-300.dark\\:border-grey-800.hover\\:border-grey-500 > div.flex.flex-col.gap-x-5.gap-y-7.undefined > div:nth-child(1) > div > input');
    return await element.setValue(location);
});

When('I enter user Email {kraken-string}', async function (email) {
    let element = await this.driver.$('#modal-backdrop > section > div.p-8.py-0 > div > div.false.mt-10.grid.grid-cols-1.gap-x-12.gap-y-20.md\\:grid-cols-2 > div:nth-child(1) > div.flex.flex-col.gap-x-5.gap-y-7.undefined > div:nth-child(2) > div > input');
    return await element.setValue(email);
});

When('I enter user Website {kraken-string}', async function (website) {
    let element = await this.driver.$('#modal-backdrop > section > div.p-8.py-0 > div > div.false.mt-10.grid.grid-cols-1.gap-x-12.gap-y-20.md\\:grid-cols-2 > div.flex.flex-col.justify-between.gap-10 > div.relative.flex-col.gap-6.rounded-lg.transition-all.flex.is-not-editing.group\\/setting-group.undefined.border-grey-300.dark\\:border-grey-800.hover\\:border-grey-500 > div.flex.flex-col.gap-x-5.gap-y-7.undefined > div:nth-child(2) > div > input');
    return await element.setValue(website);
});

When('I enter user Slug {kraken-string}', async function (slug) {
    let element = await this.driver.$('#modal-backdrop > section > div.p-8.py-0 > div > div.false.mt-10.grid.grid-cols-1.gap-x-12.gap-y-20.md\\:grid-cols-2 > div:nth-child(1) > div.flex.flex-col.gap-x-5.gap-y-7.undefined > div:nth-child(3) > div > input');
    return await element.setValue(slug);
    
});

When('I enter user Facebook profile {kraken-string}', async function (facebook) {
    let element = await this.driver.$('#modal-backdrop > section > div.p-8.py-0 > div > div.false.mt-10.grid.grid-cols-1.gap-x-12.gap-y-20.md\\:grid-cols-2 > div.flex.flex-col.justify-between.gap-10 > div.relative.flex-col.gap-6.rounded-lg.transition-all.flex.is-not-editing.group\\/setting-group.undefined.border-grey-300.dark\\:border-grey-800.hover\\:border-grey-500 > div.flex.flex-col.gap-x-5.gap-y-7.undefined > div:nth-child(3) > div > input');
    return await element.setValue(facebook);
    
});

When('I enter user X profile {kraken-string}', async function (x) {
    let element = await this.driver.$('#modal-backdrop > section > div.p-8.py-0 > div > div.false.mt-10.grid.grid-cols-1.gap-x-12.gap-y-20.md\\:grid-cols-2 > div.flex.flex-col.justify-between.gap-10 > div.relative.flex-col.gap-6.rounded-lg.transition-all.flex.is-not-editing.group\\/setting-group.undefined.border-grey-300.dark\\:border-grey-800.hover\\:border-grey-500 > div.flex.flex-col.gap-x-5.gap-y-7.undefined > div:nth-child(4) > div > input');
    return await element.setValue(x);
    
});

When('I enter user Bio {kraken-string}', async function (bio) {
    let element = await this.driver.$('#modal-backdrop > section > div.p-8.py-0 > div > div.false.mt-10.grid.grid-cols-1.gap-x-12.gap-y-20.md\\:grid-cols-2 > div.flex.flex-col.justify-between.gap-10 > div.relative.flex-col.gap-6.rounded-lg.transition-all.flex.is-not-editing.group\\/setting-group.undefined.border-grey-300.dark\\:border-grey-800.hover\\:border-grey-500 > div.flex.flex-col.gap-x-5.gap-y-7.undefined > div:nth-child(5) > textarea');
    return await element.setValue(bio);
    
});

When('I click on Save and close', async function () {
    let element = await this.driver.$('#modal-backdrop > section > div.w-100.sticky.bottom-\\[-24px\\].z-\\[297\\].m-0.box-border.p-0 > div.sticky.z-\\[299\\].mb-\\[-24px\\].flex.items-center.justify-between.h-\\[96px\\].bg-white.dark\\:bg-black > div > div.flex.gap-3 > div > button');
    return await element.click();
    
});

// VRT Testing
function handleDirVRT(testCaseName) {
    if (!fs.existsSync(`./reports/vrt/screenshots/${testCaseName}`)){
        fs.mkdirSync(`./reports/vrt/screenshots/${testCaseName}`, { recursive: true });
    }
}

function getAppVersion() {
    let version; 
    let propertiesFilePath = `properties.json`;
    if (!fs.existsSync(propertiesFilePath)) {
        return;
    }
    let fileContent = fs.readFileSync(propertiesFilePath, 'utf8');
    let properties = JSON.parse(fileContent);
    version = properties['VERSION'];
    return version;
}

AfterStep(async function (testCase) {
    indexCompare = indexCompare + 1;
    let testCaseName = testCase.pickle.name.replace(/ /g, "_").toLowerCase();
    handleDirVRT(testCaseName);
    if(appVersion == '') {
        appVersion = getAppVersion(); 
    }
    let screenshot = await this.driver.saveScreenshot(
        `./reports/vrt/screenshots/${testCaseName}/${appVersion}_${testCaseName}_${indexCompare}.png`
    );
    this.attach(screenshot, 'image/png')
});
