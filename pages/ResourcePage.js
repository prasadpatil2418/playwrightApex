import { expect, page } from "@playwright/test";
import * as resourceObj from "../pageobjects/resourcePageObject.js"
import {baseClass} from "./baseClass.js";


exports.ResourcePage = class ResourcePage{
    constructor(page){
        this.page = page
        this.baseMethod = new baseClass(page)
        this.sortdropDown = this.page.locator(resourceObj.sortByDropDown)
    }

    async openResourcePage(){
      await this.page.goto(process.env.AUTH_URL_RESOUCES)
    }

    async headerPresent(){
      await this.page.locator(resourceObj.header).isVisible()
    }

    async validateResourcePageUsingBreadCrumb(){
      await expect(this.page.getByLabel(resourceObj.breadCrumb).getByText(resourceObj.pageName)).toBeTruthy()

    }

    async mediaTypeFiltercheckBoxFunctionalityVisibility(){
      await expect(this.page.locator(resourceObj.mediaTypeDropDown)).toBeEnabled()
      await this.baseMethod.filterCheckBoxesVisibilityClickability(resourceObj.mediaTypeCheckBoxes)
    }

    async toolsCategoryFiltercheckBoxFunctionalityVisibility(){
      await this.page.locator(resourceObj.toolsDropDown).click()
      await this.baseMethod.filterCheckBoxesVisibilityClickability(resourceObj.toolsCategoryCheckBoxes)
    }

    async autoSuggestionSubTopicsSearch(searchSubTopic){
      await this.page.locator(resourceObj.subTopicsSearchBox).type(searchSubTopic, {delay: 100})
      //wait for autosuggestion container to load
      await this.page.locator(resourceObj.autoSuggestionContainer).waitFor({state:'visible', timeout:3000})
      await this.page.locator(resourceObj.autoSuggestionContainer).toBeVisible
      //fetch elements in auto suggetsion
      const allItemsInAutoSuggestion = this.page.locator(resourceObj.itemsListedAutoSuggestion)
      const autoSuggestionCount = await allItemsInAutoSuggestion.count()

      console.log(autoSuggestionCount)
      for (let suggestionNumber = 0; suggestionNumber < autoSuggestionCount; suggestionNumber++){
        const suggestionText = await allItemsInAutoSuggestion.nth(suggestionNumber).innerText();
        suggestionText.includes(searchSubTopic)
      }

    }

    async subTopicSearchBar(searchSubTopic){
        const subTopicSearchBox = this.page.locator(resourceObj.subTopicsSearchBox)
        await subTopicSearchBox.type(searchSubTopic)
        await subTopicSearchBox.press('Enter')
        
        const displayedCardHeading = this.page.locator(resourceObj.displayedCardMainTitle)
        const displayedCardSubPara = this.page.locator(resourceObj.displayedCardSubTopic)
        const countOfProductsDislayed = await displayedCardHeading.count()
  
        //Iterate over the products cards to extract title and sub-para
        for (let cardNumber = 0; cardNumber < countOfProductsDislayed; cardNumber++){
          const titleText = await displayedCardHeading.nth(cardNumber).innerText();
          const subParaText = await displayedCardSubPara.nth(cardNumber).innerText();
          
          //check if serachSubTopic is listed
          const conditionToValidate = titleText.toLowerCase().includes(searchSubTopic.toLowerCase()) || subParaText.toLowerCase().includes(searchSubTopic.toLowerCase())
          if(conditionToValidate){
            console.log(`Search Term '${searchSubTopic} found in card ${cardNumber+1}`)
          }else{
            console.log(`Search Term '${searchSubTopic} NOT found in card ${cardNumber+1}`)
          }
          expect(conditionToValidate).toBeTruthy()
        }
      }

    async applyFilterButtonAndClearFilterButtonFunctionality(numberOfFiltersSelected){
      const filterElements = this.page.locator(resourceObj.mediaTypeCheckBoxes)   
      const applyFilter = this.page.locator(resourceObj.applyFilterButton)
      const clearFilter = this.page.locator(resourceObj.clearFilterButton)
        //visibility, enabled, verify link
        for(let itemNo = 0; itemNo < numberOfFiltersSelected; itemNo++){
            const option = filterElements.nth(itemNo); 
            await option.check()
        }
        await applyFilter.click()
        await clearFilter.click()
        expect(!(await clearFilter.isVisible())).toBeTruthy()
    }

    async serachResource(resourceToSearch){
        const searchResourceBox = this.page.locator(resourceObj.searchResource)
        await searchResourceBox.click()
        await searchResourceBox.fill(resourceToSearch)
        await searchResourceBox.press('Enter')

        const itemField = await this.page.locator(resourceObj.cardField)
        const itemFieldCount = await itemField.count()
        for(let itemTitleField=0; itemTitleField<itemFieldCount; itemTitleField++){
          const itemFieldLabel = await this.page.locator(resourceObj.cardField).nth(itemTitleField).textContent();
          console.log(itemFieldLabel)
          const areSearchItemsListed = await itemFieldLabel.toLowerCase().includes(resourceToSearch.toLowerCase())
          console.log(areSearchItemsListed ? 'Yes the products displayed heave sreached Items' : 'No the products listed do no have searched items')
          expect(areSearchItemsListed).toBeTruthy()  
        }
    }

    async sortByDropDownOptionVisibilityClickability(){
      await expect(this.sortdropDown).toBeVisible()
      const options = await this.sortdropDown.locator(resourceObj.sortByOptions).all()
      const optionsCount = await options.length
      console.log(`Found ${optionsCount} options in Sort By tools Drop Down`)

      for(let optionNumber=0; optionNumber < optionsCount; optionNumber++){
        const optionText = await options[optionNumber].textContent()
        const optionValue = await options[optionNumber].getAttribute('value')
        console.log(`Option ${optionNumber+1}: ${optionText} (Value: ${optionValue})`)

        await this.sortdropDown.click()
        await this.sortdropDown.selectOption({index: optionNumber})

        //verify that option is correctly selected
        const selectedValue = await this.sortdropDown.inputValue()
        expect(selectedValue).toBe(optionValue)
        console.log(`Selected Value is: ${selectedValue}`)
      }
    }

    async sortByDateoptionVerification(){
      const sortByDateOption = this.page.getByRole(resourceObj.getByroleForDate).selectOption(resourceObj.selectOptionForDate); //sort bY date option in dropdown  
      await this.sortdropDown.click()
      await this.sortdropDown.click(sortByDateOption)

      const datesOfElementDisplayed = this.page.locator(resourceObj.displayedElementsDates)
      const displayedDatesCount = await datesOfElementDisplayed.count()
      console.log(`Total Dates Fetched: ${displayedDatesCount}`)

      //await expect(this.page).toHaveURL('https://dev-www.gearwrench.com/media-center?search_api_fulltext=&field_tags=&sort_by=field_published_date')
      const dates = []
      for (let i=0; i < displayedDatesCount; i++){
        const dateText = await datesOfElementDisplayed.nth(i).textContent()
        dates.push(new Date(dateText))
      }
      const sortedDates = [...dates].sort((a,b) =>a-b)    //a-b ensures dates are sorted in ascedning order since the website is sorting elments in ascending order
      //comparision
      const areTheDatesSorted = JSON.stringify(dates) === JSON.stringify(sortedDates)
      console.log(dates)
      console.log(sortedDates)
      console.log(areTheDatesSorted ? 'Dates are Sorted Correctly.' : 'Dates are not Sorted Correctly')
      expect(areTheDatesSorted).toBe(true)
    }

    async sortByAlphabeticalOrder(){
      const sortByAlphabetical = this.page.getByRole(resourceObj.getByroleForDate).selectOption(resourceObj.selectOptionForAlphabet); //sort bY alphabets option in dropdown  
      await this.sortdropDown.click()
      await this.sortdropDown.click(sortByAlphabetical)

      const displayedTitles = this.page.locator(resourceObj.displayedCardTitles)
      const displayedTitlesCount = await displayedTitles.count()
      console.log(`Total number of product card titles displayed are: ${displayedTitlesCount}`)

      const titles = []
      for (let i=0; i < displayedTitlesCount; i++){
        const titleText = await displayedTitles.nth(i).textContent()
        titles.push(titleText.trim())
      }
      console.log('Captured titles', titles)

      const sortedTitles = [...titles].sort((a,b) => a.localeCompare(b))
      console.log('Sorted titles are', sortedTitles)   
      //comparision
      const areTitlesSorted = JSON.stringify(titles) === JSON.stringify(sortedTitles)
      console.log(areTitlesSorted ? 'Titles are Sorted Correctly.' : 'Titles are not Sorted Correctly')
      expect(areTitlesSorted).toBe(true)
    }

    async paginationPageNumberVeriicationPageNavigation(){
      let expectedPage = 1
      do{
            const currentPage = await this.baseMethod.fetchCurrentPageNumber(resourceObj.activePageLocator)
            expect(currentPage).toBe(expectedPage)
            console.log(currentPage)
            
        //if ">" button is visible click on it
        if(await this.page.locator(resourceObj.nextButton).isVisible()){
          await this.page.locator(resourceObj.nextButton).click();
          expectedPage++
          //wait for new page to laod after clicking next button
          await this.page.waitForTimeout(1000)
        }else{
          //breaks the loop if ">" button is not visible
          break;
        }
      }while(true)
    }

    async resourcePageElementsCountCheck(){
      do{
        //fetch current page count
        const currentPage = await this.baseMethod.fetchCurrentPageNumber(resourceObj.activePageLocator)
        console.log(currentPage)
        //verfiy the count
        await this.baseMethod.numberOfElementsDisplayedOnCurrentPageVerifiedAgainstFooterCountDisplayed(resourceObj.itemsDisplayedOnMainResourcePage,resourceObj.contentCountFooter)

        //if ">" button is visible click on it
        if(await this.page.locator(resourceObj.nextButton).isVisible()){
          await this.page.locator(resourceObj.nextButton).click();
          //wait for new page to laod after clicking next button
          await this.page.waitForTimeout(1000)
        }else{
          //breaks the loop if ">" button is not visible
          break;
        }

      }while(true)
    }

    async firstLastFooterButtonVisibility(){
      do{
        //fetch current page count
        const currentPage = await this.baseMethod.fetchCurrentPageNumber(resourceObj.activePageLocator)
        //check if first and last button is visible
        const isFirstVisible = await this.page.locator(resourceObj.firstButton).isVisible()
        const isLastVisible = await this.page.locator(resourceObj.lastButton).isVisible()
        const nextButton = await this.page.locator(resourceObj.nextButton)

        if(currentPage === 1){
          //on first page
          await expect(isFirstVisible).toBe(false)
          console.log(`we are on page ${currentPage} and FIRST button is not Visible`)
        }else{
          await expect(isFirstVisible).toBe(true)
          console.log(`we are on page ${currentPage} and FIRST button is Visible`)
        }

        if(!(await nextButton.isVisible())){
          await expect(isLastVisible).toBe(false)
          console.log(`We have reached the last page, which is page number ${currentPage} and the LAST button is not visible`)
          break;
        }else{
          await expect(isLastVisible).toBe(true)
          console.log(`We are on page ${currentPage} and LAST button is visible`)
        }

        await nextButton.click();
        await this.page.waitForTimeout(1000)
      }while(true)
    }

    async engageWithUsOnSocials(){
      //check if the tiitle is visible
      await expect(this.page.locator(resourceObj.engageWithUsOnSocialsTitle)).toBeVisible();
      const numberOfSocialTiles = await this.page.locator(resourceObj.socialsTiles).count()
      console.log(`Number of social media tiles listed at Engage us section are: ${numberOfSocialTiles}`)

      for(let tileNumber = 0; tileNumber < numberOfSocialTiles; tileNumber++){
            const tileImage = this.page.locator(resourceObj.socialTileImages).nth(tileNumber);
            const socialSubTitle = this.page.locator(resourceObj.socialfeedTitle).nth(tileNumber)
            const socialMediaLinks = this.page.locator(resourceObj.socialLinks).nth(tileNumber)
            const socialmediaIcons = this.page.locator(resourceObj.socialIcons).nth(tileNumber)
            await expect(tileImage).toBeVisible();
            //check if tile elemnts are clickable without actully executing its default navigation action
            await tileImage.click({trial: true})
            await socialSubTitle.click({trial: true})
            await socialMediaLinks.click({trial: true})
            await socialmediaIcons.click({trial: true})
            //note: since we have already tested navigation to different social media sites in footer section we are testing
      }
    }

    async signUpForExclusiveProductNews(firstName,lastName,email){
      //check field visibility
      await this.page.getByLabel(resourceObj.firstNameSignUpField).fill(firstName)
      await this.page.getByLabel(resourceObj.lastNameSignUpField).fill(lastName)
      await this.page.getByLabel(resourceObj.emailSignUpField).fill(email)
      //check the checkBox
      await this.page.getByLabel(resourceObj.checkBoxSignUp).check()
      await this.page.locator(resourceObj.buttonSignUp).click()
      await expect(this.page.getByText(resourceObj.signUpSuccessText)).toBeVisible()
    }
}