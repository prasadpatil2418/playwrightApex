import { expect, page } from "@playwright/test"
import * as configElement from "../config.js"
import * as automotiveObj from "../pageobjects/automotivePageObject.js"
import{baseClass} from "./baseClass"

exports.AutomotivePage = class AutomotivePage {
constructor(page){
    this.page = page
    this.baseMethod = new baseClass(page)
}

async openAutomotivePage(){
   await this.page.goto(process.env.AUTH_URL_AUTOMOTIVE)

}
async headerPresent(){
    await this.page.locator(automotiveObj.header).isVisible()

}
async validateAutomotivePageUsingBreadCrumb(){
    await expect(this.page.getByLabel(automotiveObj.breadCrumb).getByText(automotiveObj.pageName)).toBeVisible()

}
async validateBannerSection(){
    await this.baseMethod.testImageTitleSubTitle(automotiveObj.bannerImagesLocator, automotiveObj.bannerTitleLocator, configElement.expBannerTitleAutomotive,
        automotiveObj.bannerTextLocator, configElement.expBannerTextAutomotive)

}

async validateCards(){

    let listOfCardTitle=[]
    let listOfCardlink=[]
    let listOfCardToken=[]

     const cardCount = await this.page.locator(automotiveObj.automotiveCardLocator).count()
     console.log(`Total no. of Cards are : ${cardCount}`)

     for(let card=0; card<cardCount; card++){

        //verify image
        const cardImage = this.page.locator(automotiveObj.automotiveCardImageLocator).nth(card);
        await expect(cardImage).toBeVisible()

        //verify title
        const cardTitle = this.page.locator(automotiveObj.automotiveCardTitleLocator).nth(card)
        await expect(cardTitle).toBeVisible()
        const cardTitleText = await cardTitle.textContent()
        listOfCardTitle.push(cardTitleText)
        expect(await listOfCardTitle[card].trim()).toBe(configElement.expectedCardTitleAutomotive[card].trim())
       
        //Click on title 
        const hrefTag = await cardTitle.getAttribute('href') 
        listOfCardlink.push(hrefTag)
        await cardTitle.click({ trial: true })

        //verify token
        const cardToken = this.page.locator(automotiveObj.automotiveCardTokanLocator).nth(card)
        await expect(cardToken).toBeVisible()
        const cardTokenText = await cardToken.textContent()
        listOfCardToken.push(cardTokenText)
        expect(await listOfCardToken[card].trim()).toBe(configElement.expectedCardTokenAutomotive[card].trim())

        //Print title and token
        console.log(`Card title is :${cardTitleText} and card token is: ${cardTokenText}`)
        
        //verify button
        // const cardBtn = this.page.locator(automotiveObj.automotiveCardBtnLocator).nth(card)
        // await expect(cardBtn).toBeVisible();
        // await cardBtn.click({ trial: true })
     }
}
async varifyPaginationOnAutomotivePage(){
    await this.baseMethod.pagination(automotiveObj.automotiveCardLocator, automotiveObj.nxtBtnLocator)
}
}