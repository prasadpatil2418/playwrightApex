import { expect, page } from "@playwright/test";
import * as configElement from "../config.js"
import * as fTObject from "../pageobjects/featuredtoolPageObject.js"
import {baseClass} from "./baseClass";
require('dotenv').config(); 


exports.FeaturedToolPage = class FeaturedToolPage{

    constructor(page){
        this.page = page
      
        this.baseMethod = new baseClass(page)

    }

    
    //method 1  **************************************************************************************************************************************
    async openPageOnBrowsers(){
        await this.page.goto(process.env.AUTH_URL_FEATUREDTOOL)
    }

     //method 2  **************************************************************************************************************************************
     async productSectionImageTitleSubtitleLink(){

        const listOfProductTitle =[]
        const listOfProductSubtitle =[]
        const listOfProductlink = []

        const productCardCount = await this.page.locator(fTObject.productcardLocator).count()

        expect(productCardCount).toBe(configElement.expectedProductDisplayed)

        for(item=0; item<productCardCount; item++){

            //verify Image
            const productImage = this.page.locator(fTObject.productcardImagelocator).nth(item);
            await expect(productImage).toBeVisible();

            //verify Title
            const productTitle = this.page.locator(fTObject.productcardTitleLocator).nth(item);
            await expect(productTitle).toBeVisible()
            const iListTitle = await productTitle.textContent()
            console.log(iListTitle)
            listOfProductTitle.push(productTitle)
           

             //verify Subtitle
             const productSubtitle = this.page.locator(fTObject.productcardSubtitleLocator).nth(item);
             await expect(productSubtitle).toBeVisible();
             const iListSubtitle = await productTitle.textContent()
             console.log(iListSubtitle)
             listOfProductSubtitle.push(iListSubtitle)

              //verify Link
              const productLink = this.page.locator(fTObject.productcardLinkLocator).nth(item);
              const hrefTag = await productLink.getAttribute('href');
              listOfProductlink.push(hrefTag)
              await expect(productLink).toBeVisible();

            //check if link is clickable without actully executing its default navigation action
            await productLink.click({trial: true})

            //verify the links captured
             for (let i = 0; i< configElement.expectedProductUrl.count; i++){
            expect(configElement.expectedProductUrl[i].includes(listOfProductlink[i])).toBeTruthy()
           
            }

        }
        
    }

}