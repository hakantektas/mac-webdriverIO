

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }

    async swipe () {
        await browser.pause(1000);
        await driver.touchPerform([
            { action: 'press', options: { x: 1000, y: 500 }},
            { action: 'wait', options: { ms: 1000 }},
            { action: 'moveTo', options: { x: 250, y: 500 }},
            { action: 'release' }
          ]);
    }
}

module.exports = new SecurePage();
