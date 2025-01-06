import { expect, page } from "@playwright/test";
import * as chromeSocketObj from "../pageobjects/chromeSocketObject.js"
import {baseClass} from "./baseClass.js";


exports.ChromeSocketPage = class ChromeSocketPage{
    constructor(page){
        this.page = page
        this.baseMethod = new baseClass(page)     
    }

    async openChromeSocketPage(){
        await this.page.goto(process.env.AUTH_URL_CHROMESOCKET)
      }
  
      async headerPresent(){
        await this.page.locator(chromeSocketObj.header).isVisible()
      }

      async validateChromeSocketPageUsingBreadCrumb(){
        await expect(this.page.getByLabel(chromeSocketObj.breadCrumb).getByText(chromeSocketObj.pageName)).toBeTruthy()
  
      }

      async driveTangSizeFiltercheckBoxFunctionalityVisibility(){
        await expect(this.page.locator(chromeSocketObj.driveTangSizeFilter)).toBeEnabled()
        await this.baseMethod.filterCheckBoxesVisibilityClickabilityProductCheck(chromeSocketObj.driveTangSizeFilterOptions,
          chromeSocketObj.productListOnPageLocator)
      }

  
      async lengthFormatFiltercheckBoxFunctionalityVisibility(){
        await this.page.locator(chromeSocketObj.lengthFormatFilter).click()
        await this.baseMethod.filterCheckBoxesVisibilityClickabilityProductCheck(chromeSocketObj.lengthFormatFilterOptions,
          chromeSocketObj.productListOnPageLocator)
      }

      async sAEMetricTorxFiltercheckBoxFunctionalityVisibility(){
        await this.page.locator(chromeSocketObj.sAEMetricTorxFilter).click()
        await this.baseMethod.filterCheckBoxesVisibilityClickabilityProductCheck(chromeSocketObj.sAEMetricTorxFilterOptions,
          chromeSocketObj.productListOnPageLocator)
      }

      async driveTypeFiltercheckBoxFunctionalityVisibility(){
        await this.page.locator(chromeSocketObj.driveTypeFilter).click()
        await this.baseMethod.filterCheckBoxesVisibilityClickabilityProductCheck(chromeSocketObj.driveTypeFilterOptions,
          chromeSocketObj.productListOnPageLocator)
      }

      async socketSizeSAEFiltercheckBoxFunctionalityVisibility(){
        await this.page.locator(chromeSocketObj.socketSizeSAEFilter).click()
        await this.baseMethod.filterCheckBoxesVisibilityClickabilityProductCheck(chromeSocketObj.socketSizeSAEFilterOptions,
          chromeSocketObj.productListOnPageLocator)
      }

      async socketSizeMMiltercheckBoxFunctionalityVisibility(){
        await this.page.locator(chromeSocketObj.socketSizeMMFilter).click()
        await this.baseMethod.filterCheckBoxesVisibilityClickabilityProductCheck(chromeSocketObj.socketSizeMMFilterOptions,
          chromeSocketObj.productListOnPageLocator)
      }

      async typeFiltercheckBoxFunctionalityVisibility(){
        await this.page.locator(chromeSocketObj.typeFilter).click()
        await this.baseMethod.filterCheckBoxesVisibilityClickabilityProductCheck(chromeSocketObj.typeFilterOptions,
          chromeSocketObj.productListOnPageLocator)
      }

      async socketSizeBitFiltercheckBoxFunctionalityVisibility(){
        await this.page.locator(chromeSocketObj.socketSizeBitFilter).click()
        await this.baseMethod.filterCheckBoxesVisibilityClickabilityProductCheck(chromeSocketObj.socketSizeBitFilterOptions,
          chromeSocketObj.productListOnPageLocator)
      }

      async setFiltercheckBoxFunctionalityVisibility(){
        await this.page.locator(chromeSocketObj.setFilter).click()
        await this.baseMethod.filterCheckBoxesVisibilityClickabilityProductCheck(chromeSocketObj.setFilterOptions,
          chromeSocketObj.productListOnPageLocator)
      }

    async paginationPageNumberVeriicationPageNavigation(){
     await this.baseMethod.pagination(chromeSocketObj.productListOnPageLocator, chromeSocketObj.nextButtonLocator)
      
      }    
}
