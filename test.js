import { driver } from "./utils/driver.js";

import { loadHomepageTest } from "./tests/loadHomePage.test.js";
import { searchProductTest } from "./tests/searchProduct.test.js";
import { purchaseProductTest } from "./tests/purchaseProduct.test.js";
import { verifySearchTest} from "./tests/verifySearch.test.js";
import { doLogin } from "./tests/login.test.js";
import { verifyOffers } from "./tests/verifyOfferPage.test.js";





async function runAllTests() {
   try{
console.log("Start Testing...");

   await loadHomepageTest();
   await searchProductTest();
   await verifySearchTest();
   await doLogin();
   await verifyOffers();
   await purchaseProductTest();


    console.log("...All Test Done")
    }catch (err) {
        console.error(err);
    } finally {
        await driver.sleep(2000);
        await driver.quit();
        
    }
}

runAllTests();