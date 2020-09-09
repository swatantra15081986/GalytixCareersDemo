var HtmlReporter = require('protractor-beautiful-reporter');



exports.config = {

    framework: 'jasmine',
    directConnect: true,


    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ["--start-maximized"]
            //args: ["--headless", "--window-size=1366,768", "--disable-gpu", "--remote-debugging-port=9222"]
        },
                /*proxy: {
            proxyType: "manual",
            httpProxy: "localhost:8080",
            sslProxy: "localhost:8080"
        }*/
    },  
    
     
    

    allScriptsTimeout: 12000,

    jasmineNodeOpts: {
        defaultTimeoutInterval: 36000
    },

    suites: {
        sanity: ['./main/executeCareers.js']
    },

    onPrepare: function () {
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'reports',
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            takeScreenShotsOnlyForFailedSpecs: true,
            docTitle: 'Galytix-Careers Test Report',
            preserveDirectory: false,
            clientDefaults: {
                columnSettings: {
                    displayTime: true,
                    displayBrowser: true,
                    displaySessionId: false,
                    displayOS: true,
                    inlineScreenshots: false
                },
                showTotalDurationIn: "belowHeader",
                totalDurationFormat: "hms"
            }
        }).getJasmine2Reporter());

        browser.manage().timeouts().implicitlyWait(8000);
    }
   
}