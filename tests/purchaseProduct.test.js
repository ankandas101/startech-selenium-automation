import HomePage from "../pages/HomePage.js";
import SingleProductPage from "../pages/SingleProductPage.js";
import CheckoutPage from "../pages/CheckoutPage.js";
import { driver } from "../utils/driver.js";

const home = new HomePage(driver);
const product = new SingleProductPage(driver);
const checkout = new CheckoutPage(driver);

async function testRun(){
    try{
    await home.loadHomepage();
    await home.productSearch();

    await product.setQuantityFromProductPage();
    await product.addToCart();
    await product.viewCart();
    await product.goToCheckout();
    await checkout.formFillup();

    }finally{
    await driver.sleep(2000);
    await driver.quit();
    }


}

testRun();