import { expect, page } from "@playwright/test";
import * as configElement from "../config.js"
import * as bbetPgObject from "../pageobjects/boltBiterExtractionToolPageObject.js"
import {baseClass} from "./baseClass.js";
require('dotenv').config(); 


exports.BoltBiterExtractionToolPage = class BoltBiterExtractionToolPage{

    constructor(page){
        this.page = page
        this.baseMethod = new baseClass(page)
        
    }

    
    
    //method 1  **************************************************************************************************************************************
    async openPageOnBrowsers(){
        await this.page.goto(process.env.AUTH_URL_BBETOOL)
    }
    //method 2  **************************************************************************************************************************************
    async heroBannerElements(){

        await this.baseMethod.testImageTitleSubTitleClickOnShopNow(bbetPgObject.bannerImageLocator,
            bbetPgObject.bannerTitleLocator, configElement.expectedBannerTitleBBET,
            bbetPgObject.bannerSubtitleLocator, configElement.expectedBannerSubtitleBBET,
            bbetPgObject.shopNowButtonLocator, configElement.expectedUrlBBET)
    }

    //method 3

    async boltBiterFeaturesSection(){
        //validate Heading and subtext
        await expect(this.page.locator(bbetPgObject.boltBiterFeaturesTitleLocator)).toHaveText(configElement.expectedboltBiterFeaturesTitle)
        await expect(this.page.locator(bbetPgObject.boltBiterFeaturesTextLocator)).toContainText(configElement.expectedboltBiterFeaturesText)
    }
    //method 4
    async boltBiterFeaturesSectionCard(){
       
        await this.baseMethod.featureSectionImageTitleText(bbetPgObject.boltBiterFeaturesSectionTextLocator,configElement.expectedboltBiterFeaturesCard,
             bbetPgObject.boltBiterFeaturesImageLocator, bbetPgObject.boltBiterFeaturesSectionTitleLocator,bbetPgObject.boltBiterFeaturesSectionTextLocator )    
    }
    
   //method 5
    async boltBiterBrochureSection (){
     await this.baseMethod.testImageTitleSubTitle(bbetPgObject.boltBiterBrochureImageLocator,
        bbetPgObject.boltBiterBrochureTitleLocator, configElement.expectedboltBiterBrochureTitle,
        bbetPgObject.boltBiterBrochureTextLocator, configElement.expectedboltBiterBrochureText)

        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.page.locator(bbetPgObject.boltBiterBrochureDownloadButtonLocator).click()  
        ]) 
        await expect(newPage).toHaveURL(configElement.expectedboltBiterUrl)
    }

 //method 6
    async boltBiterCardSection(){
        await this.baseMethod.cardSectionImageTitleSubtitleLink(bbetPgObject.boltBiterCardLocator,configElement.expectedboltBiterCardDisplayed, 
                        bbetPgObject.boltBiterCardImageLocator, bbetPgObject.boltBiterCardTitleLocator,
                    bbetPgObject.boltBiterCardTextLocator,bbetPgObject.boltBiterCardButtonLocator, configElement.expectedBoltBiterCardUrl)
    }

 //method 7
    async videoPlayerFunctionalityCheckBoltBiter(){

        await this.baseMethod.videoPlayerFunctionalityCheckBoltBiter(bbetPgObject.boltBiterYouTubeIframeLocator,bbetPgObject.boltBiterYouTubeVideoPlayLocator,
              bbetPgObject.boltBiterYouTubeVideoPauseLocator, bbetPgObject.boltBiterYouTubeVideoMuteLocator, bbetPgObject.boltBiterYouTubeVideoUnmuteLocator,
              bbetPgObject.boltBiterYouTubeVideoFullScreenLocator,bbetPgObject.boltBiterYouTubeVideoExitFullScreenLocator)
    }
    
}
