import { Browser, Builder, By, Key, until } from 'selenium-webdriver';
import { driver } from "../utils/driver.js";
export default class OfferPage {
    constructor(driver) {
        this.driver = driver;
    }



    async verifyoffers() {
        try {
            const offerLocator = By.xpath("//a[contains(@class, 'view-details')]");
            
             await this.driver.wait(until.elementsLocated(offerLocator), 10000);
            const offerElements = await this.driver.findElements(offerLocator);

            console.log("Total Offer Found: " + offerElements.length);

             const offerUrls = [];
            for (let element of offerElements) {
                const url = await element.getAttribute('href');
                if (url) offerUrls.push(url);
            }

             for (let index = 0; index < offerUrls.length; index++) {
                console.log(`Visiting Offer ${index + 1}/${offerUrls.length}: ${offerUrls[index]}`);
                
                await this.driver.get(offerUrls[index]);
                await this.driver.sleep(1500);  

                 const backButtonLocator = By.xpath("//a[./span[contains(text(),'arrow_back')]]");
                
                try {
                    const backBtn = await this.driver.wait(
                        until.elementLocated(backButtonLocator), 
                        5000
                    );
                    await backBtn.click();
                } catch {
                     console.log("Back button not found");
                    await this.driver.navigate().back();
                }

                 await this.driver.sleep(1000);
                console.log(`Visit Single offer ${index + 1} success`);

                if(index >2){
                    break;
                }
            }

        } catch (err) {
            console.error("Error in findoffers:", err);
        }
    }
}