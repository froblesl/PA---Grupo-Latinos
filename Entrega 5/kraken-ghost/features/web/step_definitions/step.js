const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert')
let actualMembers = undefined;

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
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

When('I enter member name {kraken-string}', async function (name) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(name);
});

When('I enter member email {kraken-string}', async function (email) {
    let element = await this.driver.$('#member-email');
    return await element.setValue(email);
});

When('I enter member label {kraken-string}', async function (label) {
    let element = await this.driver.$('div.ember-view.ember-basic-dropdown-trigger.ember-basic-dropdown-trigger--in-place.ember-power-select-trigger.ember-power-select-multiple-trigger.gh-token-input.gh-member-label-input');
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
    let element = await this.driver.$('button[data-test-button="save"]');
    return await element.click();
});

Then('I click to return of Member list', async function () {
    let element = await this.driver.$('div.gh-canvas-breadcrumb > a[href="#/members/"]');
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
    let element = await this.driver.$(`button[data-test-button="member-actions"]`);
    return await element.click();
})

When('I click on Delete member option', async function () {
    let element = await this.driver.$(`button[data-test-button="delete-member"]`);
    return await element.click();
})

Then('I confirm Delete component', async function () {
    let element = await this.driver.$(`button.gh-btn.gh-btn-red.gh-btn-icon.ember-view[data-test-button="confirm"]`);
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
    let element = await this.driver.$('div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div:nth-child(1) > div > p');
    return await element.click();
})

When('I enter content post {kraken-string}', async function (content) {
    let element = await this.driver.$('div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div:nth-child(1) > div > p');
    return await element.setValue(content);
})

When('I click on Edit post', async function () {
    let element = await this.driver.$(`h3.gh-content-entry-title`);
    return await element.click();
})

When('I click Editor post', async function () {
    let element = await this.driver.$(`div > header > button.gh-btn-editor.gh-publish-back-button`);
    return await element.click();
})

Then('I click on Publish', async function () {
    let element = await this.driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger[data-test-button="publish-flow"]');
    return await element.click();
})

Then('I click Continue, final review', async function () {
    let element = await this.driver.$('button.gh-btn.gh-btn-black.gh-btn-large[data-test-button="continue"]');
    return await element.click();
})

Then('I click Publish component', async function () {
    let element = await this.driver.$('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view[data-test-button="confirm-publish"]');
    return await element.click();
})

Then('I click to return of Post list', async function () {
    let element = await this.driver.$('a.ember-view.gh-btn-editor.gh-editor-back-button[data-test-link="posts"]');
    return await element.click();
})

Then('I click Settings of post', async function () {
    let element = await this.driver.$('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon[title="Settings"]');
    return await element.click();
})

Then('I click Delete post', async function () {
    let element = await this.driver.$('#entry-controls > div > div.settings-menu-content > div > button');
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

When('I click Right now', async function () {
    let element = await this.driver.$('div.gh-publish-settings > div.gh-publish-setting.last > button');
    return await element.click();
})

Then('I click Schedule for later', async function () {
    let element = await this.driver.$('div > fieldset > div > div:nth-child(2) > label');
    return await element.click();
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
    let element = await this.driver.$('div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div:nth-child(1) > div > p');
    return await element.click();
})

Then('I enter content page {kraken-string}', async function (content) {
    let element = await this.driver.$('div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div:nth-child(1) > div > p');
    return await element.setValue(content);
})

Then('I click to return of Page list', async function () {
    let element = await this.driver.$('a.ember-view.gh-btn-editor.gh-editor-back-button[data-test-link="pages"]');
    return await element.click();
})

When('I click on last element Published', async function () {
    let element = await this.driver.$('div.posts-list.gh-list.feature-memberAttribution > div:nth-child(1) > li');
    return await element.click();
})

Then('I click Unpublish', async function () {
    let element = await this.driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-unpublish-trigger[data-test-button = "update-flow"]');
    return await element.click();
})

Then('I click Unpublish and revert to private draft', async function () {
    let element = await this.driver.$('button.gh-revert-to-draft[data-test-button = "revert-to-draft"]');
    return await element.click();
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
    let element = await this.driver.$('div.gh-canvas-breadcrumb > a[href="#/tags/"]');
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
    let element = await this.driver.$(`button[data-test-button="delete-tag"]`);
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