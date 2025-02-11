import { expect, page } from "@playwright/test";
import * as configElement from "../config.js"
import * as allToolObj from "../pageobjects/allToolPageObject.js"
import {baseClass} from "./baseClass.js";
require('dotenv').config();


exports.AllToolPage = class AllToolPage{
    constructor(page){
        this.page = page
        this.baseMethod = new baseClass(page)     
    }

    async openAllToolPage(){
      await this.page.goto(process.env.BASE_URL + '/all-tools')
      }
  
      async headerPresent(){
        await this.page.locator(allToolObj.header).isVisible()
      }

      async validateAllToolPageUsingBreadCrumb(){
        await expect(this.page.getByLabel(allToolObj.breadCrumb).getByText(allToolObj.pageName)).toBeTruthy()
  
      }

      async validateBannerSection(){
        await this.baseMethod.testImageTitleSubTitle(allToolObj.allToolBannerImage,allToolObj.allToolBannerTitle,configElement.expBannerTitleAllTool,
          allToolObj.allToolBannerText,configElement.expBannerTextAllTool)
      }

      async validateShopByIndustry(){
        expect(await this.page.locator(allToolObj.shopByIndustryTitleLocator).isVisible()).toBeTruthy()
        await this.page.locator(allToolObj.shopByIndustryLinkLocator).click()
        expect(this.page).toHaveURL(configElement.shopByIndustryUrl)
        await this.page.waitForTimeout(2000)
      }

        async validateSectorwiseMenus(){
             const sectorMenus = this.page.locator(allToolObj.sectorMenusLocator)
             const sectorMenusCount = await sectorMenus.count()
             console.log(`No. of Sector Menus :${sectorMenusCount}`)

             for(let eachMenu=0; eachMenu<sectorMenusCount; eachMenu++){
              await sectorMenus.nth(eachMenu).click()
              const menuText = await sectorMenus.nth(eachMenu).textContent()
              console.log(`Sector Name is: ${menuText}`)
              await expect (this.page.locator(allToolObj.allSectorLocator).nth(eachMenu)).toBeVisible()
              await this.page.waitForTimeout(2000)
             }
          }

      async validateAutoSpecialitySectorCards(){

        await this.baseMethod.sectorCardImageTitleSubtitleLink(allToolObj.autoSpecialtyLocator, allToolObj.autoSpecialtyImageLocator,
          allToolObj.autoSpecialtyTitleLocator,allToolObj.autoSpecialtyTextLocator, allToolObj.autoSpecialtyLinkLocator,configElement.expAutoSpecialityCardUrl)
      }
    }