

async function searchProductPage(){
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).click();
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(searchProductName,Key.ENTER);
    let searchResults = await driver.findElements(By.xpath("//h4[@class='p-item-name']/a"));

    if(searchResults.length >0){
    
    let matchedCount =0;
    let notmatchedCount = 0;

    for (let i = 0; i < searchResults.length; i++) {
        const productTitle = await searchResults[i].getText();
        let productTitleLower = productTitle.toLowerCase();
        let searchWords = searchProductName.toLowerCase().split(' ');   

        let isAllWordsPresentInTitle = searchWords.every(word => productTitleLower.includes(word));
        
        if (isAllWordsPresentInTitle) {
        matchedCount++;
        }else {
        notmatchedCount++;
        }
    }
    console.log("Matched Count: " + matchedCount);
    console.log("Not Matched: " + notmatchedCount);
    }else{
        console.log("No product Found");
    }
}