import HomePage from "../pages/HomePage.js";
import { driver } from "../utils/driver.js";

import SingleProductPage from "../pages/SingleProductPage.js";
import CheckoutPage from "../pages/CheckoutPage.js";

const home = new HomePage(driver);
const product = new SingleProductPage(driver);
const checkout = new CheckoutPage(driver);

export async function purchaseProductTest(){
    try{
    await home.loadHomepage();
    await home.productSearch();

    await product.setQuantityFromProductPage();
    await product.addToCart();
    await product.viewCart();
    await product.goToCheckout();
    await checkout.formFillup();
    
    
    console.log("Verify purchaseProductTest Test Complete")        

    }catch (err) {
        console.error(err);
    }finally{
    await driver.sleep(2000);
    }


}