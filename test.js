import { Browser, Builder, By, Key, until } from 'selenium-webdriver';
import { Select } from 'selenium-webdriver/lib/select.js'
import { faker } from '@faker-js/faker';
import { baseUrl } from "./utils/config.js";

const driver = new Builder().forBrowser(Browser.CHROME).build();

const searchProduct = 'walton laptop';
const quantity = 10;

const randomFirstName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const randomEmail = faker.internet.email();
const randomPhone = faker.string.numeric('017########');
const randomAddress = faker.location.streetAddress();
const randomAddressCity = faker.location.city();
const develeryLocation = 'Bhola';




async function testRun(){

    //Load Homepage 
    await loadHomepage();

    //Make a search operation
    await productSearch();

   //set quantity 
   await setQuantityFromProductPage ();

   //set checkout form
   await checkoutFormFillup();

   //await driver.findElement(By.xpath("//a[contains(text(),'Login to Avail')]")).click();
      
   await driver.sleep(1000);
   await driver.quit();

}

// function for loading homepage 
async function loadHomepage(){
    await driver.get(baseUrl);
    await driver.manage().window().maximize();
    await driver.sleep(300);
}

//Make search operation from home page

async function productSearch(){
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).click();
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(searchProduct);
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//div[@id='tab-prod']/div[@class='search-item'][1]")).click();
   
}


// function for checkout form fillup
async function checkoutFormFillup(){
   await driver.findElement(By.xpath("//div[@class='form-group']/input[@name='firstname']")).sendKeys(randomFirstName);
   await driver.findElement(By.xpath("//div[@class='form-group']/input[@name='lastname']")).sendKeys(randomLastName);
   await driver.findElement(By.xpath("//div[@class='form-group']/input[@name='address_1']")).sendKeys(randomAddress);
   await driver.findElement(By.xpath("//div[@class='form-group']/input[@name='city']")).sendKeys(randomAddressCity);
   await driver.findElement(By.xpath("//div[@class='snap-drpd-sel' and @tabindex='0']")).click();
   await driver.sleep(300);
   let setDeveveryLocation = await driver.findElement(By.xpath("//div[@class='snap-drpd-inn']/div[contains(text(),'Bhola' )]"));
   await setDeveveryLocation.click();
   await driver.findElement(By.xpath("//div[@class='form-group']/input[@name='telephone']")).sendKeys(randomPhone);
   await driver.findElement(By.xpath("//div[@class='form-group']/input[@name='email']")).sendKeys(randomEmail);
   let setComment = await driver.findElement(By.xpath("//div[@class='form-group']/textarea[@name='comment']"));
   await setComment.sendKeys("TEST ORDER. This is a test purchase. Please don't confirm it.");
   //Select a payment method
    await driver.findElement(By.xpath("//input[@name='payment_method' and @value='online']")).click();
    //Select a delivery method
    await driver.findElement(By.xpath("//input[@name='shipping_method' and @value='courier.express']")).click();

}

// function for set product quantity in single product page
async function setQuantityFromProductPage(){
   await driver.findElement(By.id("input-quantity")).clear(); 
   await driver.findElement(By.id("input-quantity")).sendKeys(quantity);
   await driver.findElement(By.id("button-cart")).click();
   await driver.sleep(1000);
   await driver.findElement(By.xpath("//div[@class='popup-inner']//div[@class='btn-wrap']//button[contains(text(),'View Cart')]")).click();
   await driver.findElement(By.xpath("//a[contains(text(),'Checkout')]")).click();

}

testRun();

 