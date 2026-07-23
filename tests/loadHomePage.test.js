import HomePage from "../pages/HomePage.js";
import { driver } from "../utils/driver.js";

const home = new HomePage(driver);

export async function loadHomepage(){
    try{
    await home.loadHomepage();    
    console.log("Verify Load Home page Test Complete") 
    }catch (err) {
        console.error(err);
    }
}