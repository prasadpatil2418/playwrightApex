import { expect, page } from "@playwright/test";
import * as configElement from "../config.js"
import * as ftPgObject from "../pageobjects/featuredToolPageObject.js"
import {baseClass} from "./baseClass.js";
require('dotenv').config(); 

exports.FeaturedToolPage = class FeaturedToolPage {

    constructor(page){
        this.page = page
        //tools Drop Down
        this.baseMethod = new baseClass(page)
    }

//method 1 **************************************************************************************************************************************
    async openFeaturedToolPageOnBrowsers(){
        await this.page.goto(process.env.BASE_URL + '/featured-tools')
    }

//method 2 ********************************************************************************************************************************************
    async featuredtoolPageBreadCrumbVisibility (){
    const featuredToolPageBreadcrumb = this.page.locator (ftPgObject.featuredToolBreadcrumb)
     
    // breadCrumb Visibility
    await expect(featuredToolPageBreadcrumb).toBeVisible()
    }

//method 3 ***********************************************************************************************************************************************

    async heroBannerElementsVisibilty(){
    //check if the banner is visible
    await expect(this.page.locator(ftPgObject.featuredToolHeroBannerBackgroundImage)).toBeVisible()
 
    //validate Heading and subtext
    await expect(this.page.locator(ftPgObject.featuredToolHeroBannerHeading)).toHaveText(configElement.expectedFeaturedTooltHeroBannerHeading)
    await expect(this.page.locator(ftPgObject.featuredToolHeroBannerSubheading)).toHaveText(configElement.expectedFeaturedTooltHeroBannerSubtext)
    }

//method 4 ***********************************************************************************************************************************************
    async productSectionImageTitleSubtitleLink(){
 
    const listOfProductTitle =[]
    const listOfProductSubtitle =[]
    const listOfProductlink = []

    const productCardCount = await this.page.locator(ftPgObject.productcardLocator).count()
    expect(productCardCount).toBe(configElement.expectedProductDisplayed)

    for(let i = 0; i < await productCardCount; i++){

        //verify Image
        const productImage = this.page.locator(ftPgObject.productcardImagelocator).nth(i);
        await expect(productImage).toBeVisible();

        //verify Title
        const productTitle = this.page.locator(ftPgObject.productcardTitleLocator).nth(i);
        await expect(productTitle).toBeVisible()
        const iListTitle = await productTitle.textContent()
        console.log(iListTitle)
        listOfProductTitle.push(iListTitle)
        expect(configElement.productTitles[i].includes(listOfProductTitle[i])).toBeTruthy()
       
        //verify Subtitle
        const productSubtitle = this.page.locator(ftPgObject.productcardSubtitleLocator).nth(i);
        await expect(productSubtitle).toBeVisible();
        const iListSubtitle = await productSubtitle.textContent()
        console.log(iListSubtitle)
        listOfProductSubtitle.push(iListSubtitle)
        expect(configElement.productSubtitles[i].includes(listOfProductSubtitle[i])).toBeTruthy()
       
        //verify Link
        const productLink = this.page.locator(ftPgObject.productcardLinkLocator).nth(i);
        const hrefTag = await productLink.getAttribute('href');
        listOfProductlink.push(hrefTag)
        await expect(productLink).toBeVisible();

        //check if link is clickable without actully executing its default navigation action
        await productLink.click({trial: true})

        //verify the links captured
        expect(configElement.expectedProductUrl[i].includes(listOfProductlink[i])).toBeTruthy()
    }   
}

//method 5 ************************************************************************************************************************************************
    async findMoreResourcesSection(){
    //check title and subtitle being displayed:
    await expect(this.page.locator(ftPgObject.findMoreResourecsSectionTitle)).toBeVisible()
    await expect(this.page.locator(ftPgObject.findMoreResourecsSectionTitleSubtitle)).toBeVisible()
    }
//method 6 **************************************************************************************************************************************************************
    async FAQsSectionSupportTextImageButtonNavigation(){
    await this.baseMethod.testBackGroundImageTitleSubTitleButtonClickNavigation(ftPgObject.imageFAQsSection, ftPgObject.headerFAQsSection, ftPgObject.subtitleFAQssection, ftPgObject.exploreFAQsButton, configElement.faqPageURL)
    }

//method 7 **************************************************************************************************************************************************************
    async ProductBrochuresAndResourcesSectionTextImageButtonNavigation(){
    await this.baseMethod.testBackGroundImageTitleSubTitleButtonClickNavigation(ftPgObject.imageProductBrochuresAndResourcesSection, ftPgObject.headerProductBrochuresAndResourcesSection, ftPgObject.subtitleProductBrochuresAndResourcesSection, ftPgObject.exploreResourcesButton, configElement.resourcePageUrl)

    }
}