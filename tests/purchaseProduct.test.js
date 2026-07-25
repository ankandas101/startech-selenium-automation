import HomePage from "../pages/HomePage.js";
import { driver } from "../utils/driver.js";

import SingleProductPage from "../pages/SingleProductPage.js";
import CheckoutPage from "../pages/CheckoutPage.js";

const home = new HomePage(driver);
const product = new SingleProductPage(driver);
const checkout = new CheckoutPage(driver);

export async function purchaseProductTest(){
    try{
    console.log("Visiting Homepage");
   await home.loadHomepage();

   console.log("Search a product and visit single product page");
   await home.productSearch();
   console.log("Set product quantity");
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