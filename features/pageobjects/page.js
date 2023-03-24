/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

    get buttonYes (){
        return $('//button//span[contains(text(), "Да")]')
    }

    get buttonNo (){
        return $('//button//span[contains(text(), "Нет")]')
    }

    async expectAlert(message){
        // await console.log('Alert text : ' + browser.getAlertText())
        await expect(await browser.getAlertText()).toHaveTextContaining(message);
    }

    async expectText(message){
        const text = $(`//*[contains(text(), '${message}')]`);
        await text.waitForDisplayed();
        await expect(text).toHaveTextContaining(message);
    }

    async expectTextNotDisplayed(message){
        const text = $(`//*[contains(text(), '${message}')]`);
        await expect(text).not.toBeDisplayed()
    }

    open (path) {
        return browser.url(`http://167.114.201.175:5000/${path}`)
    }
}
