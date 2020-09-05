"use strict";

var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'info';
var data = require("../data/data.js");
var elementcareers = require("../pageObjects/Careers.js")
var elementcareers1 = new elementcareers();
var constant = require('../utils/constants.js');
var path = require('path');
var fileToUploadImage = constant.filePathImage;
var fileToUploadDoc = constant.filePathDoc;
var absolutePathImage = path.resolve(fileToUploadImage);
var absolutePathDoc = path.resolve(fileToUploadDoc);


describe("CAREERS", () => {

    beforeEach(function() {
         browser.get(data.baseURL) 
      });

    it("Senior software developer-Gurgaon Form submission", async () => {

        
        await elementcareers1.sse.click()
                      
        await elementcareers1.apply.click();
        await elementcareers1.fileUpload.sendKeys(absolutePathImage)
        await elementcareers1.fileUpload.sendKeys(absolutePathDoc)
        await elementcareers1.firstName.sendKeys(data.firstName[0])
        await elementcareers1.email.sendKeys(data.email[0])
        await elementcareers1.applynow.click()
        expect(elementcareers1.verifysubmit.getText()).toEqual("Application submitted");


    });

    it("Senior software developer-UK Form submission", async () => {

       

         
        await elementcareers1.job2.click()
              
        await elementcareers1.apply.click();
        await elementcareers1.fileUpload.sendKeys(absolutePathImage)
        await elementcareers1.fileUpload.sendKeys(absolutePathDoc)
        await elementcareers1.firstName.sendKeys(data.firstName[0])
        await elementcareers1.email.sendKeys(data.email[0])
        await elementcareers1.applynow.click()
        expect(elementcareers1.verifysubmit.getText()).toEqual("Application submitted");
    });

    it("Testing Engineer-GURGAON Form submission", async () => {

       

        await elementcareers1.job3.click()
              
        await elementcareers1.apply.click();
        await elementcareers1.fileUpload.sendKeys(absolutePathImage)
        await elementcareers1.fileUpload.sendKeys(absolutePathDoc)
        await elementcareers1.firstName.sendKeys(data.firstName[0])
        await elementcareers1.email.sendKeys(data.email[0])
        await elementcareers1.applynow.click()
        expect(elementcareers1.verifysubmit.getText()).toEqual("Application submitted");
    });

    it("Testing Engineer-UK Form submission", async () => {

       

        await elementcareers1.job4.click()
              
        await elementcareers1.apply.click();
        await elementcareers1.fileUpload.sendKeys(absolutePathImage)
        await elementcareers1.fileUpload.sendKeys(absolutePathDoc)
        await elementcareers1.firstName.sendKeys(data.firstName[0])
        await elementcareers1.email.sendKeys(data.email[0])
        await elementcareers1.applynow.click()
        expect(elementcareers1.verifysubmit.getText()).toEqual("Application submitted");
    });

    it("Sr web designer-Gurgaon Form submission", async () => {

       

        await elementcareers1.job5.click()
              
        await elementcareers1.apply.click();
        await elementcareers1.fileUpload.sendKeys(absolutePathImage)
        await elementcareers1.fileUpload.sendKeys(absolutePathDoc)
        await elementcareers1.firstName.sendKeys(data.firstName[0])
        await elementcareers1.email.sendKeys(data.email[0])
        await elementcareers1.applynow.click()
        expect(elementcareers1.verifysubmit2.getText()).toEqual("There was an error submitting the application");
    });

    it("Sr web designer-UK Form submission", async () => {

       

        await elementcareers1.job6.click()
              
        await elementcareers1.apply.click();
        await elementcareers1.fileUpload.sendKeys(absolutePathImage)
        await elementcareers1.fileUpload.sendKeys(absolutePathDoc)
        await elementcareers1.firstName.sendKeys(data.firstName[0])
        await elementcareers1.email.sendKeys(data.email[0])
        await elementcareers1.applynow.click()
        expect(elementcareers1.verifysubmit.getText()).toEqual("Application submitted");
    });

});
