"use strict";

var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'info';
var data = require("../data/data.js");
var elementcareers = require("../pageObjects/Careers.js")
var elementcareers1 = new elementcareers();
var constant = require('../utils/constants.js');
var customCareers=require("../custom/customCareers.js")
var customCareers1= new customCareers()
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

         customCareers1.sse();
         customCareers1.apply();         
         customCareers1.firstName(data.firstName[0])
         customCareers1.email(data.email[0])
         elementcareers1.fileUpload.sendKeys(absolutePathImage)
         elementcareers1.fileUpload.sendKeys(absolutePathDoc)
         customCareers1.applynow()
         customCareers1.successMessage(data.message[0])
    });

    it("Senior software developer-UK Form submission", async () => {

        customCareers1.job2()
        customCareers1.apply();         
        customCareers1.firstName(data.firstName[0])
        customCareers1.email(data.email[0])
        elementcareers1.fileUpload.sendKeys(absolutePathImage)
        elementcareers1.fileUpload.sendKeys(absolutePathDoc)
        customCareers1.applynow()
        customCareers1.successMessage(data.message[0])
    });

    it("Testing Engineer-GURGAON Form submission", async () => {

        customCareers1.job3()
        customCareers1.apply();         
        customCareers1.firstName(data.firstName[0])
        customCareers1.email(data.email[0])
        elementcareers1.fileUpload.sendKeys(absolutePathImage)
        elementcareers1.fileUpload.sendKeys(absolutePathDoc)
        customCareers1.applynow()
        customCareers1.successMessage(data.message[0]) 

      
    });

    it("Testing Engineer-UK Form submission", async () => {

        customCareers1.job4()
        customCareers1.apply();         
        customCareers1.firstName(data.firstName[0])
        customCareers1.email(data.email[0])
        elementcareers1.fileUpload.sendKeys(absolutePathImage)
        elementcareers1.fileUpload.sendKeys(absolutePathDoc)
        customCareers1.applynow()
        customCareers1.successMessage(data.message[0])  

    });

    it("Sr web designer-Gurgaon Form submission", async () => {

        customCareers1.job5()
        customCareers1.apply();         
        customCareers1.firstName(data.firstName[0])
        customCareers1.email(data.email[0])
        elementcareers1.fileUpload.sendKeys(absolutePathImage)
        elementcareers1.fileUpload.sendKeys(absolutePathDoc)
        customCareers1.applynow()
        customCareers1.failureMessage(data.message[1])  
  

         
    });

    it("Sr web designer-UK Form submission", async () => {

        customCareers1.job6()
        customCareers1.apply();         
        customCareers1.firstName(data.firstName[0])
        customCareers1.email(data.email[0])
        elementcareers1.fileUpload.sendKeys(absolutePathImage)
        elementcareers1.fileUpload.sendKeys(absolutePathDoc)
        customCareers1.applynow()
        customCareers1.successMessage(data.message[0])  

    });

});
