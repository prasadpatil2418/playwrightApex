import { expect, page } from "@playwright/test";
import * as configElement from "../config.js"
import * as whereToBuyObj from "../pageobjects/whereToBuyPageObject.js"
import {baseClass} from "./baseClass.js";



exports.WhereToBuyPage = class WhereToBuyPage{
    constructor(page){
        this.page = page
        this.baseMethod = new baseClass(page)     
    }

    async openWhereToBuyPage(){
        await this.page.goto(process.env.BASE_URL + '/where-to-buy')
      }
  
      async headerPresent(){
        await this.page.locator(whereToBuyObj.header).isVisible()
      }

      async validateWhereToBuyPageUsingBreadCrumb(){
        await expect(this.page.getByLabel(whereToBuyObj.breadCrumb).getByText(whereToBuyObj.pageName)).toBeTruthy()
  
      }

      async onlinePurchaseUrlNavigation(){

        const onlineShoppingeUrls = this.page.locator(whereToBuyObj.onlinePurchaseUrlLocator)
        const onlineShoppingeUrlCount = await onlineShoppingeUrls.count()
        console.log(`No. of online Puechase Urls are: ${onlineShoppingeUrlCount}`)

        for(let eachShopUrl = 0; eachShopUrl<onlineShoppingeUrlCount; eachShopUrl++){

             //new Tab
             const [newPage] = await Promise.all([
                this.page.context().waitForEvent('page'),
                onlineShoppingeUrls.nth(eachShopUrl).click()  
            ])  
            await newPage.waitForTimeout(5000)              
            //await expect(newPage).toHaveURL(configElement.actualShoppingUrl[eachShopUrl])
            await newPage.close()
      }
    }

    async findNearByButtonClick(){
      await this.page.locator(whereToBuyObj.findnearByButtonLocator).click()
      //await this.page.waitForSelector(whereToBuyObj.mapLocator)
      expect(await this.page.locator(whereToBuyObj.mapLocator).isVisible()).toBeTruthy()
    }

    async pricespiderTabClick(){
      //new Tab
      const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.page.locator(whereToBuyObj.pricespiderTabLocator).click()  
    ])               
    await expect(newPage).toHaveURL(configElement.expPriceSpiderUrl)
    await newPage.close()
    }

    async countryDropDownValidation(){
      const countryDropdown = this.page.locator(whereToBuyObj.countryDropdownLoactor)
      //expect(await countryDropdown).toBeVisible()
      const countryOptions = this.page.locator(whereToBuyObj.countryOptionLoactor)
      const countryOptionCount = await countryOptions.count()
      console.log(`No. of countries showing in dropdown are :${countryOptionCount}`)

      for(let optionNumber=0; optionNumber<countryOptionCount; optionNumber++){
        await countryDropdown.click()
        const option = await this.page.locator(whereToBuyObj.countryMainoption).selectOption(whereToBuyObj.country[optionNumber])
        const optionText = await option.nth[optionNumber].textContent() 
        console.log(`Option ${optionNumber+1}: ${optionText}`)
      }

    }
}
