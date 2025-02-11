import { expect, page } from "@playwright/test";
import * as strikingAndStruckObj from "../pageobjects/strikingAndStruckPageObject.js"
import {baseClass} from "./baseClass.js";


exports.StrikingAndStruckPage = class StrikingAndStruckPage{
    constructor(page){
        this.page = page
        this.baseMethod = new baseClass(page)     
    }

    async openStrikingAndStruckPage(){
        await this.page.goto(process.env.BASE_URL ='/all-tools/hand-tools/striking-struck')
      }
  
      async headerPresent(){
        await this.page.locator(strikingAndStruckObj.header).isVisible()
      }

      async validateStrikingAndStruckPageUsingBreadCrumb(){
        await expect(this.page.getByLabel(strikingAndStruckObj.breadCrumb).getByText(strikingAndStruckObj.pageName)).toBeTruthy()
  
      }
      async headFinishFiltercheckBoxFunctionalityVisibility(){
        await expect(this.page.locator(strikingAndStruckObj.headFinishFilter)).toBeEnabled()
        await this.baseMethod.filterCheckBoxesVisibilityClickabilityProductCheck(strikingAndStruckObj.headFinishFilterOptions,
          strikingAndStruckObj.productListOnPageLocator)
      }
      async materialFiltercheckBoxFunctionalityVisibility(){
        await this.page.locator(strikingAndStruckObj.materialFilter).click()
        await this.baseMethod.filterCheckBoxesVisibilityClickabilityProductCheck(strikingAndStruckObj.materialFilterOptions,
          strikingAndStruckObj.productListOnPageLocator)
      }

      async hammerStyleFiltercheckBoxFunctionalityVisibility(){
        await this.page.locator(strikingAndStruckObj.hammerStyleFilter).click()
        await this.baseMethod.filterCheckBoxesVisibilityClickabilityProductCheck(strikingAndStruckObj.hammerStyleFilterOptions,
          strikingAndStruckObj.productListOnPageLocator)
      }

      async punchChiselStyleFiltercheckBoxFunctionalityVisibility(){
        await this.page.locator(strikingAndStruckObj.punchChiselStyleFilter).click()
        await this.baseMethod.filterCheckBoxesVisibilityClickabilityProductCheck(strikingAndStruckObj.punchChiselStyleFilterOptions,
          strikingAndStruckObj.productListOnPageLocator)
      }

      async typeFiltercheckBoxFunctionalityVisibility(){
        await this.page.locator(strikingAndStruckObj.typeFilter).click()
        await this.baseMethod.filterCheckBoxesVisibilityClickabilityProductCheck(strikingAndStruckObj.typeFilterOptions,
          strikingAndStruckObj.productListOnPageLocator)
      }

      async setFiltercheckBoxFunctionalityVisibility(){
        await this.page.locator(strikingAndStruckObj.setFilter).click()
        await this.baseMethod.filterCheckBoxesVisibilityClickabilityProductCheck(strikingAndStruckObj.setFilterOptions,
          strikingAndStruckObj.productListOnPageLocator)
      }
    }