import { Browser, Builder, By, Key, until } from 'selenium-webdriver';
import { baseUrl } from "../utils/config.js";
import { productData } from "../test-data/productData.js";

export default class HomePage {
    constructor(driver) {
        this.driver = driver;

        this.searchBox = By.xpath("//input[@placeholder='Search']");
        this.firstResult = By.xpath("//div[@id='tab-prod']/div[@class='search-item'][1]");
    }

    // function for loading homepage 
    async loadHomepage(){
        await this.driver.get(baseUrl);
        await this.driver.manage().window().maximize();
        await this.driver.sleep(300);
    }

    //Make search operation from homepage
    async productSearch(){
        await this.driver.findElement(this.searchBox).click();
        await this.driver.findElement(this.searchBox).sendKeys(productData.searchProductName);
        await this.driver.sleep(2000);
        await this.driver.findElement(this.firstResult).click();
    }

}