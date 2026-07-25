import HomePage from "../pages/HomePage.js";
import { driver } from "../utils/driver.js";

import Login from "../pages/login.js";

const home = new HomePage(driver);
const login = new Login(driver);

export async function doLogin() {
   try{
  //  await home.loadHomepage();
   console.log("Going to Login Page");
   await home.goToLoginPage();
   console.log("Submit Login Form");
   await login.loginFormSubmit();
    console.log("Login Form Submit Test Comeplete")
   }catch(err){
    console.error(err);
   }


}