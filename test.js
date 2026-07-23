async function testRun(){

    //Load Homepage 
    await loadHomepage();

    // make a full search
    await searchProductPage()

    //Make a search operation
    await productSearch();

   //set quantity 
   await setQuantityFromProductPage ();

   //set checkout form
   await checkoutFormFillup();

   //await driver.findElement(By.xpath("//a[contains(text(),'Login to Avail')]")).click();
      
   await driver.sleep(1000);
   await driver.quit();
}

testRun();

 