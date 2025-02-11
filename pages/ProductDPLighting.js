import { expect, page } from "@playwright/test";
import * as configElement from "../config.js"
import * as pdppgObject from "../pageobjects/productDPLightingObject.js"
import {baseClass} from "./baseClass.js";
require('dotenv').config(); 

exports.ProductDetailPageLighting = class ProductDetailPageLighting {

    constructor(page){
    this.page = page
    this.baseMethod = new baseClass(page)  
}

//method 1 **************************************************************************************************************************************
async openPDPPageLightingOnBrowsers(){
    await this.page.goto(process.env.BASE_URL + '/all-tools/shop-equipment-tool-sets/lighting/gwfl85-8-12-flex-head-rechargeable-light')
}

//method 2 ********************************************************************************************************************************************
async headerAndBreadCrumbVisibility(){
    await this.page.locator(pdppgObject.header).isVisible()

    const breadcrumb = this.page.locator(pdppgObject.breadcrumb)
     
    // breadCrumb Visibility
    await expect(breadcrumb).toBeVisible()
}

//method 3 ***********************************************************************************************************************************************
async productPageElementsVisibilty(){

    //Check if the Title is visible
    await expect(this.page.locator(pdppgObject.productTitle)).toHaveText(configElement.expectedProductTitle.trim())
 
    //Validate SKU Id, Rating,Description and Buy Now CTA Visibility
    await expect(this.page.locator(pdppgObject.SKUId)).toBeVisible()
    await expect(this.page.locator(pdppgObject.rating)).toBeVisible()
    await expect(this.page.locator(pdppgObject.productDescription)).toBeVisible()
    const whereToBuyCTA = await this.page.locator(pdppgObject.whereToBuyCTA)
    await whereToBuyCTA.click({trial: true})
}

//method 4 ***********************************************************************************************************************************************

async carosualImageSection(){

    const carosualImage = await this.page.locator(pdppgObject.productImageLocator)
    const carosualImageCount = await carosualImage.count()
    console.log (carosualImageCount)

    // Navigate forward through the carousel
    for (let i = 0; i < carosualImageCount; i++) {
    const visibleImage = await this.page.locator(pdppgObject.productImageLocator).nth(i).isVisible();
    expect(visibleImage).toBe(true);

    if (i < carosualImageCount - 1) {
    await this.page.locator(pdppgObject.slideArrowNext).click();
    await this.page.waitForTimeout(1000);
    } else {
    // On the last image, click forward to return to the first image
    await this.page.locator(pdppgObject.slideArrowNext).click();
    await this.page.waitForTimeout(1000);
    const firstImageVisible = await this.page.locator(pdppgObject.productImageLocator).nth(0).isVisible();
    expect(firstImageVisible).toBe(true);
    }
}
    // Navigate backward through the carousel
    for (let i = carosualImageCount - 1; i >= 0; i--) {
    const visibleImage = await this.page.locator(pdppgObject.productImageLocator).nth(i).isVisible();
    expect(visibleImage).toBe(true);

    if (i > 0) {
    await this.page.locator(pdppgObject.slideArrowPreviousLocator).click();
    await this.page.waitForTimeout(1000);
    } else {
    // On the first image, click backward to return to the last image
    await this.page.locator(pdppgObject.slideArrowPreviousLocator).click()
    await this.page.waitForTimeout(1000);
    const lastImageVisible = await this.page.locator(pdppgObject.productImageLocator).nth(carosualImageCount - 1).isVisible();
    expect(lastImageVisible).toBe(true);
    }
  }

}

//method 4 ***********************************************************************************************************************************************
async featuresAndSpecificationsVisibilty(){

    const tabNameF = await this.page.locator(pdppgObject.featuresTAB).textContent()
    console.log (tabNameF)
    const features = await this.page.locator(pdppgObject.featuresTAB)
    await expect(features).toBeVisible();
    await features.click();

    //Verify the category cards section is for the correct category
    const featuresHeader = this.page.locator(pdppgObject.featuresSectionTitle)
    await expect(featuresHeader).toHaveText(tabNameF);
    await expect(this.page.locator(pdppgObject.featuresDetail)).toBeVisible()

    const tabNameS = await this.page.locator(pdppgObject.specificationsTAB).textContent()
    console.log (tabNameS)
    const specifications = await this.page.locator(pdppgObject.specificationsTAB)
    await expect(specifications).toBeVisible();
    await specifications.click();

    //Verify the category cards section is for the correct category
    const specificationsHeader = this.page.locator(pdppgObject.specificationsSectionTitle); 
    await expect(specificationsHeader).toHaveText(tabNameS);
    const readMore = await this.page.locator(pdppgObject.readMoreSpecifications)
    await readMore.click();
    await expect(this.page.locator(pdppgObject.specificationsDetail)).toBeVisible()
    await readMore.click();
    await expect(this.page.locator(pdppgObject.expandedspecificationsDetails)).toBeVisible()
}

async faqSectionVisibility (){

    // Locate the individual FAQ items
    const faqs = await this.page.locator(pdppgObject.faqsLocator)
    const faqsCount  = await faqs.count()
    console.log(faqsCount)
    
    for (let i = 0; i < faqsCount ; i++) {
        
    // Locator for question inside the current FAQ container
    const question = await this.page.locator(pdppgObject.faqsQuestionLocator).nth(i)
    const faQuestion = await this.page.locator(pdppgObject.faqsQuestionLocator).nth(i).textContent()
    console.log(faQuestion)

    // Click on the question to toggle the answer
    await question.click();
    await this.page.waitForTimeout(2000) 

    // Locator for answer inside the current FAQ container
    const answer = await this.page.locator(pdppgObject.faqsAnswersLocator)
    const faAnswer = await this.page.locator(pdppgObject.faqsAnswersLocator).textContent()
    console.log(faAnswer)

    // Assert the answer is visible after clicking
    await expect(answer).toBeVisible();
  }
}

async relatedProductSectionImageTitleSubtitleLink(){
 
    const listOfRelatedProductCardTitle =[]
    const listOfRelatedProductCardSubText =[]
    const listOfRelatedProductCardlink = []
    const listOfRelatedProductSKUId = []

    const relatedProductCardCount = await this.page.locator(pdppgObject.relatedProductCards).count()
    expect(relatedProductCardCount).toBe(configElement.expectedRelatedProductCardDisplayed)

    for(let i = 0; i < await relatedProductCardCount; i++){

    //Verify Image
    const relatedProductImage = this.page.locator(pdppgObject.relatedProductCardImage).nth(i);
    await expect(relatedProductImage).toBeVisible();

    //Verify Title
    const relatedProductCardTitle = this.page.locator(pdppgObject.relatedProductCardTitle).nth(i);
    await expect(relatedProductCardTitle).toBeVisible()
    const iListTitle = await relatedProductCardTitle.textContent()
    console.log(iListTitle)
    listOfRelatedProductCardTitle.push(iListTitle)
    expect(configElement.expectedrelatedProductCardTitles[i].includes(listOfRelatedProductCardTitle[i])).toBeTruthy()

    //Verify SKUId
    const relatedProductCardSKUId = this.page.locator(pdppgObject.relatedProductCardSKUIdLocator).nth(i);
    await expect(relatedProductCardSKUId).toBeVisible();
    const iListSKUId = await relatedProductCardSKUId.textContent()
    console.log(iListSKUId)
    listOfRelatedProductSKUId.push(iListSKUId)
    expect(configElement.expectedrelatedProductCardSKUId[i].trim().includes(listOfRelatedProductSKUId[i].trim())).toBeTruthy()
   
    //Verify Rating
    const cardRating = this.page.locator(pdppgObject.relatedProductCardStarRating).nth(i);
    await expect(cardRating).toBeVisible()

    //Verify SubText
    const relatedProductCardSubText = this.page.locator(pdppgObject.relatedProductCardSubText).nth(i);
    await expect(relatedProductCardSubText).toBeVisible();
    const iListSubText= await relatedProductCardSubText.textContent()
    console.log(iListSubText)
    listOfRelatedProductCardSubText.push(iListSubText)
    expect(configElement.expectedrelatedProductCardSubText[i].trim().includes(listOfRelatedProductCardSubText[i].trim())).toBeTruthy()

    //Verify Link
    const relatedProductCardLink = this.page.locator(pdppgObject.relatedProductCardLink).nth(i);
    const hrefTag = await relatedProductCardLink.getAttribute('href');
    listOfRelatedProductCardlink.push(hrefTag)

    //check if link is clickable without actully executing its default navigation action
    await relatedProductCardLink.click({trial: true})

    //Verify the links captured
    expect(configElement.expectedRelatedProductCardUrl[i].includes(listOfRelatedProductCardlink[i])).toBeTruthy()

    //Verify WhereToBuy CTA 
    const relatedProductWhereToBuyCTA = this.page.locator(pdppgObject.relatedProductWhereToBuyCTA).nth(i);

    //check if link is clickable without actully executing its default navigation action
    await relatedProductWhereToBuyCTA.click({trial: true})
  }   
}
}