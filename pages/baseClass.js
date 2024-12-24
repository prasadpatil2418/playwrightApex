import { expect, page } from "@playwright/test";
import * as configElement from "../config.js"

exports.baseClass = class baseClass{

    constructor(page){
        this.page = page

    }
//Used in Homepage, Support Page
    async testBackGroundImageTitleSubTitleButtonClickNavigation(imageLocator,mainTitleLocator,subTitleLocator,buttonLocator,navigatedPageLink){
        //background image each section
        await expect(this.page.locator(imageLocator)).toBeVisible();
        //header of each seaction
        await expect(this.page.locator(mainTitleLocator)).toBeVisible();
        //sub text of each seaction
        await expect(this.page.locator(subTitleLocator)).toBeVisible();

        //check the visibility
        await expect(this.page.locator(buttonLocator)).toBeVisible();

        //on clicking the logo do we land on the same home page
        await this.page.locator(buttonLocator).click()
        await expect(this.page).toHaveURL(navigatedPageLink)
    }


    // Used in Resouces Page
    //filter under particular section
    async filterCheckBoxesVisibilityClickability(listLocator){
        const filterElements = this.page.locator(listLocator)
        const fetchedFilterElements = [];
        
        //Items count
        const filterElementsCount = await filterElements.count();
        console.log(`Total Number of elemnts in Filters are: ${filterElementsCount}`)
        
      
        //visibility, enabled, verify link
        for(let itemNo = 0; itemNo < filterElementsCount; itemNo++){
            const option = filterElements.nth(itemNo); 
            await option.isVisible()
            await option.check()
            const optionSelected = await option.textContent()
            fetchedFilterElements.push(optionSelected);      
        }
        console.log(fetchedFilterElements)    
      }
      
      //verification of items count on particular page againt the count displayed in footer
      async numberOfElementsDisplayedOnCurrentPageVerifiedAgainstFooterCountDisplayed(itemsDisplayedLocator, footerTextLocator){
        const numberOfElements = await this.page.locator(itemsDisplayedLocator).count()
        const capturedFooterCount = await this.page.locator(footerTextLocator).innerText()
        console.log(`The page footer count captued is: ${capturedFooterCount}`)
        const parts = capturedFooterCount.split(' ')
        const extractedCountFromFooter = parseInt(parts[2])   //the third word in the '1 - 10 of 113 Articles' is 10
      //expect(numberOfElements).toBe(extractedCountFromFooter)
  
      console.log(`Total Number of elements Actually Displayed on the page are: ${numberOfElements}`)
      console.log( `Total elements count displayed in footer index: ${extractedCountFromFooter}`)
      }

      //extract current page number
      async fetchCurrentPageNumber(activePageLocator){
        await this.page.waitForTimeout(1000)
        const capturedCurrentPageText = await this.page.locator(activePageLocator).innerText()
        const currentPage = parseInt(capturedCurrentPageText.split('\n').pop().trim())
        return currentPage
      }


    //Used in Support, FeaturedTool Page, Bolt Biter tool Page, Moduler tool page
    async testImageTitleSubTitle(imageLocator,titleLocator, expectedTitleLocator, subtitleLocator, expectedSubtitleLocator  ){
        //check if the banner is visible
        await expect(this.page.locator(imageLocator)).toBeVisible()
    
        //validate Heading and subtext
        await expect(this.page.locator(titleLocator)).toHaveText(expectedTitleLocator)
        await expect(this.page.locator(subtitleLocator)).toHaveText(expectedSubtitleLocator)
    }

    //Used in Bolt Biter Extraction Tools, Modular Tool Sets
    async testImageTitleSubTitleClickOnShopNow(imageLocator, titleLocator, expectedTitleLocator, subtitleLocator, expectedSubtitleLocator, shopNowButtonLocator, expectedUrl ){
        //check if the banner is visible
        await expect(this.page.locator(imageLocator)).toBeVisible()

        //validate Heading and subtext
        await expect(this.page.locator(titleLocator)).toHaveText(expectedTitleLocator)
        await expect(this.page.locator(subtitleLocator)).toHaveText(expectedSubtitleLocator)

        //check the navigation after clicking on the "Shop Now Button" and check the navigation
        await this.page.locator(shopNowButtonLocator).click()
        await expect(this.page).toHaveURL(expectedUrl)
}

//Used in Bolt Biter Extraction Tools, Modular Tool Sets
async featureSectionImageTitleText(featureCardLocator,expectedFeatureDisplayed,featureImagelocator, featureTitleLocator, featureTextLocator ){

    const listOfFeatureTitle =[]
    const listOfFeatureText =[]
    

    const featureCardCount = await this.page.locator(featureCardLocator).count()

    expect(featureCardCount).toBe(expectedFeatureDisplayed)

    for(let item=0; item<featureCardCount; item++){

        //verify Image
        const featureImage = this.page.locator(featureImagelocator).nth(item);
        await expect(featureImage).toBeVisible();

        //verify Title
        const featureTitle = this.page.locator(featureTitleLocator).nth(item);
        await expect(featureTitle).toBeVisible()
        const iListTitle = await featureTitle.textContent()
        console.log(iListTitle)
        listOfFeatureTitle.push(iListTitle)
       

         //verify Subtitle
         const featureText = this.page.locator(featureTextLocator).nth(item);
         await expect(featureText).toBeVisible();
         const iListText = await featureText.textContent()
         console.log(iListText)
         listOfFeatureText.push(iListText)
    }      
}
//Used in Bolt Biter Extraction Tools, Modular Tool Sets
async cardSectionImageTitleSubtitleLink(cardLocator, expectedCardDisplayed, cardImagelocator,cardTitleLocator, cardTextLocator, cardLinkLocator, expectedCardUrl ){

    const listOfCardTitle =[]
    const listOfCardText =[]
    const listOfCardlink = []

    const cardCount = await this.page.locator(cardLocator).count()

    expect(cardCount).toBe(expectedCardDisplayed)

    for(let item=0; item<cardCount; item++){

        //verify Image
        const cardImage = this.page.locator(cardImagelocator).nth(item);
        await expect(cardImage).toBeVisible();

        //verify Title
        const cardTitle = this.page.locator(cardTitleLocator).nth(item);
        await expect(cardTitle).toBeVisible()
        const iListTitle = await cardTitle.textContent()
        console.log(iListTitle)
        listOfCardTitle.push(iListTitle)
        //expect(configElement.productTitles[i].includes(listOfProductTitle[i])).toBeTruthy()
       

         //verify Subtitle
         const cardText = this.page.locator(cardTextLocator).nth(item);
         await expect(cardText).toBeVisible();
         const iListText = await cardText.textContent()
         console.log(iListText)
         listOfCardText.push(iListText)
         //expect(configElement.productSubtitles[i].includes(listOfProductSubtitle[i])).toBeTruthy()

          //verify Link
          const cardLink = this.page.locator(cardLinkLocator).nth(item);
          const hrefTag = await cardLink.getAttribute('href');
          listOfCardlink.push(hrefTag)
          await expect(cardLink).toBeVisible();

        //check if link is clickable without actully executing its default navigation action
        await cardLink.click({trial: true})

        //verify the links captured
         
        expect(expectedCardUrl[item].includes(listOfCardlink[item])).toBeTruthy()
       
    }      
}

// Used in Bolt Biter Extraction Tools, Modular Tool Sets
async videoPlayerFunctionalityCheck(youTubeIframeLocator, youTubeVideoPlayLocator, youTubeVideoPauseLocator, youTubeVideoMuteLocator, youTubeVideoUnmuteLocator, youTubeVideoFullscreenLocator, youTubeVideoExitFullScreenLocator ){
 
    const iframe = await this.page.frameLocator(youTubeIframeLocator)
    await expect(await this.page.frameLocator(youTubeIframeLocator)).toBeVisible();
    await iframe.locator(youTubeVideoPlayLocator).click()
    await this.page.waitForTimeout(2000);
    await iframe.locator(youTubeVideoPauseLocator).click()
    await iframe.locator(youTubeVideoMuteLocator ).click()
    await this.page.waitForTimeout(2000);
    await iframe.locator(youTubeVideoUnmuteLocator).click()
    await iframe.locator(youTubeVideoFullscreenLocator).click()
    await this.page.waitForTimeout(2000);
    await iframe.locator(youTubeVideoExitFullScreenLocator).click()
 
}

}
