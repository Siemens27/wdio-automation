

const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ClientPage extends Page {
    /**
     * define selectors using getter methods
     */
    get logoutIcon () {
        return $('//*[contains(@class, "crm-logout")]');
    }

    get addClient () {
        return $('//*[contains(@class, "clients-add-user-dialog crm-button")]')
    }

    get userSurnameField(){
        return $('//*[contains(@formcontrolname, "userSurname")]')
    }

    get userNameField(){
        return $('//*[contains(@formcontrolname, "userName")]')
    }

    get genderMale(){
        return $('//label//div[contains(text(), "Мужской")]')
    }

    get genderFemale(){
        return $('//label//div[contains(text(), "Женский")]')
    }

    get userEmail(){
        return $('//*[contains(@formcontrolname, "email")]')
    }

    get userTelephone(){
        return $('//*[contains(@formcontrolname, "phone")]')
    }

    get userDateOfBirth(){
        return $('//*[contains(@formcontrolname, "birthday")]')
    }

    get saveButton(){
        return $('//*[contains(@name, "save")]')
    }

    get clientData(){
        return $$('//*[contains(@class, "crm-navigator-table__row ng-star-inserted")]');
    }

    get editUserSurnameField(){
        return $('#mat-input-1')
    }

    async clickAddClient(){
        await this.addClient.waitForDisplayed();
        await this.addClient.click();
    }

    async inputSurname(surname){
        await this.userSurnameField.waitForDisplayed();
        await this.userSurnameField.setValue(surname);
    }

    async inputUserName(userName){
        await this.userNameField.waitForDisplayed();
        await this.userNameField.setValue(userName);
    }

    async chooseGender(gender){
        if(gender === "Мужской"){
            await this.genderMale.click();
        }else{
            await this.genderFemale.click();
        }
    }

    async inputUserEmail(email){
        await this.userEmail.waitForDisplayed();
        await this.userEmail.setValue(email);
    }

    async inputUserTelephone(phone){
        await this.userTelephone.waitForDisplayed();
        await this.userTelephone.setValue(phone);
    }

    async inputUserBirth(birth){
        await this.userDateOfBirth.waitForDisplayed();
        await this.userDateOfBirth.setValue(birth);
    }

    async editUserSurname(surname){
        await this.editUserSurnameField.waitForDisplayed()
        await this.editUserSurnameField.setValue(surname)
    }

    async clickSaveButton(){
        await this.saveButton.waitForDisplayed();
        await this.saveButton.click();
    }

    async clickClientData(){
        await this.clientData[0].waitForDisplayed();
        await this.clientData[0].click();
    }

    open () {
        return super.open('clients');
    }
}

module.exports = new ClientPage();
