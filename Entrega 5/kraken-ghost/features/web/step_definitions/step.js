const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert')
let actualMembers = undefined;

When('I enter email {string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});

When('I enter password {string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});

When('I click next', async function() {
    let element = await this.driver.$('#ember5');
    return await element.click();
})

When('I see the dashboard metrics', async function () {
    let element = await this.driver.$('div.gh-dashboard-metric.is-large > div > div > span');
    this.actualMembers = await element.getText();
})

Then('The number of members is displayed as {string}', async function (expected) {
    assert.equal(this.actualMembers, expected)
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

When('I enter member name {string}', async function (name) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(name);
});

When('I enter member email {string}', async function (email) {
    let element = await this.driver.$('#member-email');
    return await element.setValue(email);
});

When('I enter member label {string}', async function (label) {
    let element = await this.driver.$('div.ember-view.ember-basic-dropdown-trigger.ember-basic-dropdown-trigger--in-place.ember-power-select-trigger.ember-power-select-multiple-trigger.gh-token-input.gh-member-label-input');
    return await element.setValue(label);
    
});

When('I click add new member label', async function () {
    let addElement  = await this.driver.$('div.ember-basic-dropdown-content-wormhole-origin > div > ul > li');
    return await addElement.click();
});

When('I enter member note {string}', async function (note) {
    let element = await this.driver.$('#member-note');
    return await element.setValue(note);
});

When('I click save member', async function () {
    let element = await this.driver.$('button[data-test-button="save"]');
    return await element.click();
});

When('I click to return of Member list', async function () {
    let element = await this.driver.$('div.gh-canvas-breadcrumb > a[href="#/members/"]');
    return await element.click();
});

Then('The name of new member is displayed as {string}', async function (expected) {
    let element = await this.driver.$(`tbody.ember-view > tr > a > div > div > h3.ma0.pa0.gh-members-list-name`);
    let nameNewMember = await element.getText();
    assert.equal(nameNewMember, expected)
})

Then('The email of new member is displayed as {string}', async function (expected) {
    let element = await this.driver.$(`tbody.ember-view > tr > a > div > div > p.ma0.pa0.middarkgrey.f8.gh-members-list-email`);
    let emailNewMember = await element.getText();
    assert.equal(emailNewMember, expected)
})

// Third scenary
When('I click on the first member of the list', async function () {
    let element = await this.driver.$(`tbody.ember-view > tr > a > div > div > h3.ma0.pa0.gh-members-list-name`);
    return await element.click();
})

When('I click on member actions', async function () {
    let element = await this.driver.$(`button[data-test-button="member-actions"]`);
    return await element.click();
})

When('I click on Delete member option', async function () {
    let element = await this.driver.$(`button[data-test-button="delete-member"]`);
    return await element.click();
})

Then('I click on confirm Delete member', async function () {
    let element = await this.driver.$(`button.gh-btn.gh-btn-red.gh-btn-icon.ember-view[data-test-button="confirm"]`);
    return await element.click();
})

Then('The name of new member is not displayed as {string}', async function (expected) {
    let element = await this.driver.$(`tbody.ember-view > tr > a > div > div > h3.ma0.pa0.gh-members-list-name`);
    let member = await element.getText();
    assert.notEqual(member, expected)
})