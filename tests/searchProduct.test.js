import HomePage from "../pages/HomePage.js";
import { driver } from "../utils/driver.js";

const home = new HomePage(driver);
async function testRun(){
    try{
    await home.loadHomepage();
    await home.productSearch();

    }finally{
    await driver.quit();
    }
}

testRun();