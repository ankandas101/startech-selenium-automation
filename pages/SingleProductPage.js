import { By } from "selenium-webdriver";

import { productData } from "../test-data/productData.js";



export default class SingleProductPage {
       constructor(driver) {
        this.driver = driver;
    }


// function for set product quantity in single product page
async setQuantityFromProductPage(){
   await this.driver.findElement(By.id("input-quantity")).clear(); 
   await this.driver.findElement(By.id("input-quantity")).sendKeys(productData.quantity);
}

async addToCart(){
   await this.driver.findElement(By.id("button-cart")).click();
   await this.driver.sleep(1000);
}

async viewCart(){
   await this.driver.findElement(By.xpath("//div[@class='popup-inner']//div[@class='btn-wrap']//button[contains(text(),'View Cart')]")).click();
   await this.driver.sleep(1000);
}
async goToCheckout(){
   await this.driver.findElement(By.xpath("//a[contains(text(),'Checkout')]")).click();

}

}

