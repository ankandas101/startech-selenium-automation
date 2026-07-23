import { By,Key } from "selenium-webdriver";
import { productData } from "../test-data/productData.js";
import HomePage from "../pages/HomePage.js";
import { driver } from "../utils/driver.js";

const home = new HomePage(driver);
const searchKeyword = productData.searchProductName;

export async function verifySearchTest(){

    try{
        await home.loadHomepage();
        await driver.findElement(By.xpath("//input[@placeholder='Search']")).click();
        await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(searchKeyword,Key.ENTER);
        let searchResults = await driver.findElements(By.xpath("//h4[@class='p-item-name']/a"));

            if(searchResults.length >0){
            let matchedCount =0;
            let notmatchedCount = 0;

            for (let i = 0; i < searchResults.length; i++) {
                const productTitle = await searchResults[i].getText();
                let productTitleLower = productTitle.toLowerCase();
                let searchWords = searchKeyword.toLowerCase().split(' ');   

                let isAllWordsPresentInTitle = searchWords.every(word => productTitleLower.includes(word));
                
                if (isAllWordsPresentInTitle) {
                matchedCount++;
                }else {
                notmatchedCount++;
                }
            }
            console.log("Matched Count: " + matchedCount);
            console.log("Not Matched: " + notmatchedCount);
            }else{
                console.log("No product Found");
            }
    console.log("Verify Search Test Complete")        
    }catch (err){
        console.error(err);
    }
}
