import HomePage from "../pages/HomePage.js";
import { driver } from "../utils/driver.js";

const home = new HomePage(driver);

export async function searchProductTest(){
    try{
    await home.loadHomepage();
    await home.productSearch();
    
    console.log("Verify searchProduct Test Complete")        

    }catch (err) {
        console.error(err);
    }
}