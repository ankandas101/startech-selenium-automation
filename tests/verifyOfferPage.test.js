import { By,Key } from "selenium-webdriver";
import HomePage from "../pages/HomePage.js";
import { driver } from "../utils/driver.js";
import OfferPage from "../pages/OfferPage.js";

const home = new HomePage(driver);
const offer = new OfferPage(driver);

export async function verifyOffers(){

   // await home.loadHomepage();
    await home.goToOfferPage();
    await offer.verifyoffers();

}