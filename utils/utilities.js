var EC = protractor.ExpectedConditions;

(function () {
    'use strict';

    // this function is for scrolling down
    function scrollElemToBottomOfView(elem) {
        elem.scrollIntoView(false);
    }

    exports.scrollElemFinderUp = function (elemFinder) {
        var promise = browser.executeScript(scrollElemToBottomOfView, elemFinder);
        return promise;
    };

    //this function is for scrolling up
    function scrollElemToTopOfView(elem) {
        elem.scrollIntoView();
    }
    exports.scrollElemFinderDown = function (elemFinder) {
        var promise = browser.executeScript(scrollElemToTopOfView, elemFinder);
        return promise;
    };

      //this function click on dropdown and select value from dropdown as per input
    exports.clickAndSelect = async function (elem1, elem2) {
        await elem1.click();
        browser.wait(EC.elementToBeClickable(elem2), 3000);
        await elem2.click();
    }

    //this function closes tabs
    exports.closeAllTabs = async function (tabs) {
        return new Promise(async (resolve, reject) => {
            let index = 0;
            for (let tab of tabs) {
                if (index !== 0) {
                    await browser.switchTo().window(tab);
                    await browser.driver.close(); //closing current tab
                    await browser.driver.switchTo().window(tabs[0]);
                }
                index++;
            }
            resolve();
        });
    }

  module.exports = exports;

})();