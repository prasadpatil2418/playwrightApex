import { expect, page } from "@playwright/test";
import * as configElement from "../config.js"
import * as hPgObject from "../pageobjects/homePageObject.js"
import {baseClass} from "./baseClass";
require('dotenv').config(); 

exports.SupportPage = class SupportPage{

    constructor(page){
        this.page =page;
        this.baseMethod = new baseClass(page)

    }

    //method 1  **************************************************************************************************************************************
    async openPageOnBrowsers(){
        await this.page.goto(process.env.BASE_URL + '/support') 
        await this.page.waitForLoadState()
    }

     //method 2  **************************************************************************************************************************************
     async heroBannerElements(){
        //check if the banner is visible
    //     await expect(this.page.locator(hPgObject.heroBannerBackGroundImageLocatorSupport)).toBeVisible()

    //     //validate Heading and subtext
    //     await expect(this.page.locator(hPgObject.heroBannerHeadingLocatorSupport)).toHaveText(configElement.expectedHeroBannerHeadingSupport)
    //     await expect(this.page.locator(hPgObject.heroBannerSubTextLocatorSupport)).toHaveText(configElement.expectedHeroBannerSubtextSupport)
    await this.baseMethod.testImageTitleSubTitle(hPgObject.heroBannerBackGroundImageLocatorSupport,
                        hPgObject.heroBannerHeadingLocatorSupport,configElement.expectedHeroBannerHeadingSupport, 
                        hPgObject.heroBannerSubTextLocatorSupport, configElement.expectedHeroBannerSubtextSupport)

}

    //method 3 **************************************************************************************************  **********************************************
    async checkOutOurResources(){
        //check title and subtitle being displayed:
        await expect(this.page.locator(hPgObject.checkOutOurResourcesTitleLocator)).toBeVisible()
        await expect(this.page.locator(hPgObject.checkOutOurResourcesSubTitleLocator)).toBeVisible()

    } 

   //method 4 **************************************************************************************************************************************************************
    async WarrentySectionTextImageButtonNavigation(){
    await this.baseMethod.testBackGroundImageTitleSubTitleButtonClickNavigation(hPgObject.imageWarrentySectionSupport, hPgObject.headerWarrentySectionSupport, hPgObject.subtitleWarrentySectionSupport, hPgObject.viewWarrentyInfoButtonSupport, configElement.warrentyPageUrlSupport)

    }

     //method 5**************************************************************************************************************************************************************
     async FaqsSectionTextImageButtonNavigation(){
        await this.baseMethod.testBackGroundImageTitleSubTitleButtonClickNavigation(hPgObject.imageFaqsSectionSupport, hPgObject.headerFaqsSectionSupport, hPgObject.subtitleFaqsSectionSupport, hPgObject.exploreFaqsButtonSupport, configElement.faqsPageUrlSupport)
    
    }

    //method 6 ************************************************************************************************************************************************
    async signUpForExclusiveProductNews(firstName,lastName,email){
        //check field visibility
        await expect(this.page.locator(hPgObject.headingSignUpSupport)).toBeVisible();
        await this.page.locator(hPgObject.firstNameSignUpFieldSupport).fill(firstName)
        await this.page.locator(hPgObject.lastNameSignUpFieldSupport).fill(lastName)
        await this.page.locator(hPgObject.emailSignUpFieldSupport).fill(email)

        //check the checkBox
        await this.page.locator(hPgObject.checkBoxSignUpSupport).check()
        await this.page.locator(hPgObject.buttonSignUpSupport).click()

        await expect(this.page.getByText(hPgObject.signUpSuccessTextSupport)).toBeVisible()

    }
}


    