import { expect, page } from "@playwright/test";
import * as configElement from "../config.js"

exports.baseClass = class baseClass{

    constructor(page){
        this.page = page

    }
//Used in Homepage, Support Page
    async testBackGroundImageTitleSubTitleButtonClickNavigation(imageLocator,mainTitleLocator,subTitleLocator,buttonLocator,navigatedPageLink){
        //background image each section
        await expect(this.page.locator(imageLocator)).toBeVisible();
        //header of each seaction
        await expect(this.page.locator(mainTitleLocator)).toBeVisible();
        //sub text of each seaction
        await expect(this.page.locator(subTitleLocator)).toBeVisible();

        //check the visibility
        await expect(this.page.locator(buttonLocator)).toBeVisible();

        //on clicking the logo do we land on the same home page
        await this.page.locator(buttonLocator).click()
        await expect(this.page).toHaveURL(navigatedPageLink)
    }


    // Used in Resouces Page
    async allFilterVisibleAndInteractive(filterLocator, filtersElements){
        const listOfElements = [];
        const filtersElement = this.page.locator(filterLocator) // Example dropdown selector
           
           const elementcount = await filtersElement.count()
          
       //visibility, enabled 
       for(let itemNo = 0; itemNo < elementcount; itemNo++){
        const option =  filtersElement.nth(itemNo); 
        await option.isVisible()
        await option.isEnabled() 
       
        
        const iList = await option.textContent()
        console.log(iList)
       listOfElements.push(iList)
       
       expect(filtersElements[itemNo].includes(option[itemNo])).toBeTruthy()
    // console.log(listOfElements)
        
    }
          
    }
}
