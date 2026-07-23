
export default class CheckoutPage{
       constructor(driver) {
        this.driver = driver;
    }


// function for checkout form fillup
async checkoutFormFillup(){
   await this.driver.findElement(By.xpath("//div[@class='form-group']/input[@name='firstname']")).sendKeys(randomFirstName);
   await this.driver.findElement(By.xpath("//div[@class='form-group']/input[@name='lastname']")).sendKeys(randomLastName);
   await this.driver.findElement(By.xpath("//div[@class='form-group']/input[@name='address_1']")).sendKeys(randomAddress);
   await this.driver.findElement(By.xpath("//div[@class='form-group']/input[@name='city']")).sendKeys(randomAddressCity);
   await this.driver.findElement(By.xpath("//div[@class='snap-drpd-sel' and @tabindex='0']")).click();
   await this.driver.sleep(300);
   let setDeveveryLocation = await driver.findElement(By.xpath("//div[@class='snap-drpd-inn']/div[contains(text(),'Bhola' )]"));
   await setDeveveryLocation.click();
   await this.driver.findElement(By.xpath("//div[@class='form-group']/input[@name='telephone']")).sendKeys(randomPhone);
   await this.driver.findElement(By.xpath("//div[@class='form-group']/input[@name='email']")).sendKeys(randomEmail);
   let setComment = await driver.findElement(By.xpath("//div[@class='form-group']/textarea[@name='comment']"));
   await setComment.sendKeys("TEST ORDER. This is a test purchase. Please don't confirm it.");
   //Select a payment method
   await this.driver.findElement(By.xpath("//input[@name='payment_method' and @value='online']")).click();
   //Select a delivery method
   await this.driver.findElement(By.xpath("//input[@name='shipping_method' and @value='courier.express']")).click();

}

}


