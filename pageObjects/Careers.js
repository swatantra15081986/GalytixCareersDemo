module.exports = function () {


 this.sse=element(by.xpath('//ul/li[1]/a/span[1]'));
 this.apply=element(by.xpath('//app-job/button'))   
 this.firstName=element(by.css('[placeholder = "Name"]'));
 this.email=element(by.css('[placeholder = "Please enter your email"]'));
 this.fileUpload=element(by.xpath("//div/form/div[2]/div/input"));
 this.applynow=element(by.xpath("//div[3]/div/button"));
 this.successMessage=element(by.css("div.success"))
 this.failureMessage=element(by.css("div.error"))
 this.job2=element(by.xpath('//ul/li[2]/a/span[1]'))
 this.job3=element(by.xpath('//ul/li[3]/a/span[1]'))
 this.job4=element(by.xpath('//ul/li[4]/a/span[1]'))
 this.job5=element(by.xpath('//ul/li[5]/a/span[1]'))
 this.job6=element(by.xpath('//ul/li[6]/a/span[1]'))




}
