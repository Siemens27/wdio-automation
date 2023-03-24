const Page = require("./page");

class PromotionPage extends Page {

    get promotionData(){
        return $$('//div[contains(@class, "promotion-data")]//span//i')
    }

    get buttonEditPromotion(){
        return $('//*[contains(@mattooltip, "Редактировать")]')
    }

    get buttonDeletePromotion(){
        return $('//*[contains(@mattooltip, "Удалить")]')
    }

    get priorityPromotion(){
        return $('#mat-select-4')
    }

    get discountPromotion(){
        return $('#mat-select-5')
    }

    get buttonSave(){
        return $('//*[contains(text(), "Сохранить")]')
    }

    get buttonCancel(){
        return $('//*[contains(text(), "Отменить")]')
    }

    async clickPromotionData(){
        await browser.pause(5000);
        //index 0-7 for promotion data
        await this.promotionData[7].waitForDisplayed();
        await this.promotionData[7].click();
        console.log('Click promotion data')
    }

    async clickEditPromotion(){
        await this.buttonEditPromotion.waitForDisplayed();
        await this.buttonEditPromotion.click();
        console.log('Click edit promotion')
    }

    async clickDeletePromotion(){
        await this.buttonDeletePromotion.waitForDisplayed();
        await this.buttonDeletePromotion.click();
        await this.buttonYes.waitForDisplayed();
        await this.buttonYes.click();
        console.log('Click delete promotion')
    }

    async selectPriorityPromotion(option){
        await this.priorityPromotion.waitForDisplayed();
        await this.priorityPromotion.click()
        const priorityOption = $(`//mat-option//span[contains(text(), "${option}")]`)
        await priorityOption.click();
        console.log('Select priority promotion')
    }

    discountPromotionOption(value) {
        var result;
        switch (value) {
            case '0' :
                result = 0;
                break;
            case '5' : 
                result = 1;
                break;
            case '10' : 
                result = 2;
                break;
            case '15' : 
                result = 4;
                break;
            case '20' : 
                result = 3;
                break;
            case 'thirty' : 
                result = 5;
                break;
        }
        return $$('//mat-option')[result].click();
    }

    async selectDiscountPromotion(value){
        await browser.pause(2000);
        await this.discountPromotion.waitForDisplayed();
        await this.discountPromotion.click();
        await this.discountPromotionOption(value);
        console.log('Select discount promotion')
    }

    async clickSave(){
        await this.buttonSave.waitForDisplayed();
        await this.buttonSave.click();
        await this.buttonYes.waitForDisplayed();
        await this.buttonYes.click();
        console.log('Click save')
    }

    async clickCancel(){
        await this.buttonCancel.waitForDisplayed();
        await this.buttonCancel.click();   
        console.log('Click cancel') 
    }

    open () {
        return super.open('promotions');
    }
}

module.exports = new PromotionPage();