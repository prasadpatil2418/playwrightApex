import { expect, page } from "@playwright/test";
import * as configElement from "../config.js"
import * as hPgObject from "../pageobjects/homePageObject.js"
import {baseClass} from "./baseClass.js";
import { count } from "console";
require('dotenv').config(); 

exports.ResourcesPage = class ResourcesPage{

    constructor(page){
        this.page =page;
        this.baseMethod = new baseClass(page)

    }

    //method 1  **************************************************************************************************************************************
    async openPageOnBrowsers(){
        await this.page.goto(process.env.AUTH_URL_RESOUCES) 
        await this.page.waitForLoadState()
    }

     //method 2  **************************************************************************************************************************************
     async heroBannerElements(){
        //check if the banner is visible
      //  await expect(this.page.locator(hPgObject.heroBannerBackGroundImageLocatorResources)).toBeVisible()

        //validate Heading and subtext
        await expect(this.page.locator(hPgObject.heroBannerHeadingLocatorResources)).toHaveText(configElement.expectedHeroBannerHeadingResources)
        await expect(this.page.locator(hPgObject.heroBannerSubTextLocatorResources)).toHaveText(configElement.expectedHeroBannerSubtextResources)
    }

    //method 3  ************************************************************************************************************************************** 

async contentTypeFilterOnResources(){

    await this.baseMethod.allFilterVisibleAndInteractive(hPgObject.contentTypeFilterLocator, configElement.expectedFilterElementsContentType)
}

 //method 4  ************************************************************************************************************************************** 

 async clickonToolCategory(){

    await this.page.locator(hPgObject.toolCategoryFilterLocator).click()
}


//method 5  ************************************************************************************************************************************** 

    async toolCategoryFilterOnResources(){

        await this.baseMethod.allFilterVisibleAndInteractive(hPgObject.toolCategoryFilterLocator, configElement.expectedFilterElementsToolCategory)
    }

//method 6  ************************************************************************************************************************************** 

}
