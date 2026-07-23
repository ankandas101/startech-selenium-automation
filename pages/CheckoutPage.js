import {customerData} from "../test-data/customerData.js"
import {By, Key, until} from 'selenium-webdriver';

export default class CheckoutPage{
       constructor(driver) {
        this.driver = driver;
    }

// function for checkout form fillup
async formFillup(){
   await this.driver.findElement(By.xpath("//div[@class='form-group']/input[@name='firstname']")).sendKeys(customerData.randomFirstName);
   await this.driver.findElement(By.xpath("//div[@class='form-group']/input[@name='lastname']")).sendKeys(customerData.randomLastName);
   await this.driver.findElement(By.xpath("//div[@class='form-group']/input[@name='address_1']")).sendKeys(customerData.randomAddress);
   await this.driver.findElement(By.xpath("//div[@class='form-group']/input[@name='city']")).sendKeys(customerData.randomAddressCity);
   await this.driver.findElement(By.xpath("//div[@class='snap-drpd-sel' and @tabindex='0']")).click();
   await this.driver.sleep(300);
   let setDeveveryLocation = await this.driver.findElement(By.xpath(`//div[@class='snap-drpd-inn']/div[contains(text(),${customerData.develeryLocation})]`));
   await setDeveveryLocation.click();
   await this.driver.findElement(By.xpath("//div[@class='form-group']/input[@name='telephone']")).sendKeys(customerData.randomPhone);
   await this.driver.findElement(By.xpath("//div[@class='form-group']/input[@name='email']")).sendKeys(customerData.randomEmail);
   let setComment = await this.driver.findElement(By.xpath("//div[@class='form-group']/textarea[@name='comment']"));
   await setComment.sendKeys("TEST ORDER. This is a test purchase. Please don't confirm it.");
   //Select a payment method
   await this.driver.findElement(By.xpath(`//input[@name='payment_method' and @value='${customerData.payment_method}']`)).click();
   //Select a delivery method
   await this.driver.findElement(By.xpath(`//input[@name='shipping_method' and @value='${customerData.shipping_method}']`)).click();

}

}


