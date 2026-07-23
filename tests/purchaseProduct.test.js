import HomePage from "../pages/HomePage.js";
import SingleProductPage from "../pages/SingleProductPage.js";
import CheckoutPage from "../pages/CheckoutPage.js";
import { driver } from "../utils/driver.js";

const home = new HomePage(driver);
const product = new SingleProductPage(driver);
const checkout = new CheckoutPage(driver);

async function testRun(){
    await home.loadHomepage();

    await home.productSearch();

    await product.setQuantityFromProductPage();

    await checkout.fillForm();

}

testRun();