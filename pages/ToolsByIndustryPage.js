import { expect, page } from "@playwright/test";
import * as configElement from "../config.js"
import * as toolsByIndustryObj from "../pageobjects/toolsByIndustryPageObject.js"
import {baseClass} from "./baseClass.js";



exports.ToolsByIndustryPage = class ToolsByIndustryPage{
    constructor(page){
        this.page = page
        this.baseMethod = new baseClass(page)     
    }

    async openToolsByIndustryPage(){
        await this.page.goto(process.env.AUTH_URL_TOOLSBYINDUSTRY)
      }
  
      async headerPresent(){
        await this.page.locator(toolsByIndustryObj.header).isVisible()
      }

      async validateToolsByIndustryPageUsingBreadCrumb(){
        await expect(this.page.getByLabel(toolsByIndustryObj.breadCrumb).getByText(toolsByIndustryObj.pageName)).toBeTruthy()
  
      }

      async validateBannerSection(){
        await this.baseMethod.testImageTitleSubTitle(toolsByIndustryObj.toolsByIndustryBannerImage,toolsByIndustryObj.toolsByIndustryBannerTitle,configElement.expBannerTitleToolsByindustry,
          toolsByIndustryObj.toolsByIndustryBannerText,configElement.expBannerTextToolsByindustry)
      }

      async validateIndustryCards(){

        await this.baseMethod.sectorCardImageTitleSubtitleLink(toolsByIndustryObj.allIndustryCardsLoactor, toolsByIndustryObj.allIndustryCardsImageLoactor,
          toolsByIndustryObj.allIndustryCardsTitleLoactor,toolsByIndustryObj.allIndustryCardsTextLoactor, toolsByIndustryObj.allIndustryCardsLinkLoactor,configElement.expIndustryUrl)
      }
    }
