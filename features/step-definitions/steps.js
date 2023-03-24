const { Given, When, Then, And } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const ClientPage = require('../pageobjects/client.page');
const PromotionPage = require('../pageobjects/promotion.page');
const faker = require('@faker-js/faker');

Given("I am on the login page", async () => {
    await browser.reloadSession();
    await LoginPage.open();
})

When("I login with username as {string} and password as {string}", async (username, password) => {
    // await LoginPage.login(username, password);
    await LoginPage.inputUsername.waitForDisplayed();
    await LoginPage.inputUsername.setValue(username);
    await LoginPage.inputPassword.waitForDisplayed();
    await LoginPage.inputPassword.setValue(password);
    await LoginPage.btnSubmit.click();
})

Then("I should go to dashboard page", async () => {
    await expect(ClientPage.logoutIcon).toBeDisplayed();
})

Then("I should stay in login page", async () => {
    await browser.pause(2000);
    await browser.acceptAlert();
    // let url = await browser.getUrl();
    // await expect(url).toHaveUrl('http://167.114.201.175:5000/login');
    const text = $(`//*[contains(text(), 'Войти')]`);
    await text.waitForDisplayed();
    await expect(text).toHaveTextContaining('ВОЙТИ');
    // await LoginPage.expectText('ВОЙТИ')
    // await console.log('browser :'+ browser)
    // await console.log('browser Url:'+ browser.getUrl())
})

//Client Page Steps
Given("I am on the client page", async () => {
    await browser.reloadSession();
    await LoginPage.open();
    await LoginPage.login('Admin', 'Admin@Navi')
    await expect(ClientPage.logoutIcon).toBeDisplayed();
    await ClientPage.open();
})

When("I click add client", async () => {
    await ClientPage.clickAddClient();
})

When("I input client data", async () => {
    await ClientPage.inputSurname('surname');
    await ClientPage.inputUserName('username');
    await ClientPage.chooseGender('Мужской');
    await ClientPage.inputUserEmail(faker.faker.internet.email());
    await ClientPage.inputUserTelephone('88' + faker.faker.random.numeric(10));
    await ClientPage.inputUserBirth('2/2/1990');
})

When("I click save button", async () => {
    await ClientPage.clickSaveButton();
})

When("I click a client data", async () => {
    await ClientPage.clickClientData();
})

When("I change client data", async () => {
    await ClientPage.editUserSurname('UpdatedSurname')
})

Then("I should see create success message", async () => {
    await browser.pause(5000);
    await ClientPage.expectAlert('Пользователь успешно добавлен');
})

Then("I should see update success message", async () => {
    await browser.pause(5000)
    await ClientPage.expectAlert('Данные обновлены');
})

Then("I should see client detail data", async () => {
    await ClientPage.expectText('Информация');
})

// Promotion Page Step

Given("I am in the promotion page",  async () => {
    await browser.reloadSession();
    await LoginPage.open();
    await LoginPage.login('Admin', 'Admin@Navi')
    await expect(ClientPage.logoutIcon).toBeDisplayed();
    await PromotionPage.open();
})

When("I click a promotion", async () => {
    await PromotionPage.clickPromotionData();
})

When("I click edit basic promotion", async () => {
    await PromotionPage.clickEditPromotion();
})

When("I change basic promotion data",  async () => {
    //Priority 1-9
    await PromotionPage.selectPriorityPromotion('6');
    //Discount 0,5,10,15,20,thirty
    await PromotionPage.selectDiscountPromotion('10');
})

When("I click save", async () => {
    await PromotionPage.clickSave();
})

When('I click delete promotion', async () => {
    await PromotionPage.clickDeletePromotion();
})

Then('I should see promotion deleted', async () => {
    await PromotionPage.expectTextNotDisplayed('6');
})

Then("I should see the data changed", async () => {
    const text = $(`//span[contains(text(), '10')]`);
    await text.waitForDisplayed();
    await expect(text).toHaveTextContaining('10');
})
