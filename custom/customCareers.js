"use strict";

module.exports = function () {
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


this.sse =  function() {
elementcareers1.sse.click()
 };

this.job2 =  function() {
elementcareers1.job2.click()
};   
        
this.job3 =  function() {
elementcareers1.job3.click()
}; 
            
this.job4 =  function() {
elementcareers1.job4.click()
};   

this.job5 =  function() {
elementcareers1.job5.click()
}; 

this.job6 =  function() {
elementcareers1.job6.click()
    };

this.apply = function() {
elementcareers1.apply.click()
};    

this.firstName =  function(firstName) {
elementcareers1.firstName.sendKeys(firstName)
};

this.email =  function(email) {
elementcareers1.email.sendKeys(email)
};

this.applynow = function() {
elementcareers1.applynow.click()
};

this.successMessage=  function(message) {
expect(elementcareers1.successMessage.getText()).toEqual(message);
};

this.failureMessage=  function(message) {
expect(elementcareers1.failureMessage.getText()).toEqual(message);
};
    





}


