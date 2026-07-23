import { driver } from "./utils/driver.js";

import { loadHomepage } from "./tests/loadHomePage.test.js";
import { searchProductTest } from "./tests/searchProduct.test.js";
import { purchaseProductTest } from "./tests/purchaseProduct.test.js";
import { verifySearchTest} from "./tests/verifySearch.test.js";
import { doLogin } from "./tests/login.test.js";

async function runAllTests() {
   try{

   //await searchProductTest();
   //await purchaseProductTest();
   //await verifySearchTest();
   await loadHomepage();

   // await doLogin();


    console.log("All Test Done")
    }catch (err) {
        console.error(err);
    } finally {
        await driver.sleep(2000);
        await driver.quit();
        
    }
}

runAllTests();