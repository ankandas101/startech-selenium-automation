import { searchProductTest } from "./tests/searchProduct.test.js";
import { purchaseProductTest } from "./tests/purchaseProduct.test.js";
import { verifySearchTest} from "./tests/verifySearch.test.js";
import { driver } from "./utils/driver.js";

async function runAllTests() {
   try{
    await searchProductTest();
   // await purchaseProductTest();
   // await verifySearchTest();
    console.log("All Test Done")
    }catch (err) {
        console.error(err);
    } finally {
        await driver.quit();
        
    }
}

runAllTests();