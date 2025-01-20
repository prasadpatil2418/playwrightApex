import { expect, page } from "@playwright/test";
import * as configElement from "../config.js"
import * as warrantyFormObj from "../pageobjects/warrantyFormPageObject.js"
import {baseClass} from "./baseClass.js";



exports.WarrantyFormPage = class WarrantyFormPage{
    constructor(page){
        this.page = page
        this.baseMethod = new baseClass(page)     
    }

    async openWarrantyFormPage(){
        await this.page.goto(process.env.AUTH_URL_WARRANTYFORM)
      }
  
      async headerPresent(){
        await this.page.locator(warrantyFormObj.header).isVisible()
      }

      async validateWarrantyFormPageUsingBreadCrumb(){
        await expect(this.page.getByLabel(warrantyFormObj.breadCrumb).getByText(warrantyFormObj.pageName)).toBeTruthy()
  
      }

      async warrantyStepsSection(){

        //Section Title
        expect(this.page.locator(warrantyFormObj.warrentyStepsSectionTitlelocator)).toBeVisible()
        const warrentyStepsSectionTitile = await this.page.locator(warrantyFormObj.warrentyStepsSectionTitlelocator).textContent()
        console.log(`Section Title is:${warrentyStepsSectionTitile}`)

        //Steps to validate
        const stepCount = await this.page.locator(warrantyFormObj.warrentyStepsSectionlocator).count()
        console.log(`No.of steps for warranty form are:${stepCount} `)

        for(let step=0; step<stepCount; step++){

          const title = this.page.locator(warrantyFormObj.warrentyStepsTitlelocator).nth(step)
          await expect( title).toBeVisible()
          const stepTitle = await title.textContent()
          console.log(stepTitle)

          const text = this.page.locator(warrantyFormObj.warrentyStepsTextlocator).nth(step)
          await expect(text ).toBeVisible()
          const stepText = await text.textContent()
          console.log(stepText)
        }       
      }

      async itemNumberFieldSearch(searchitemNumber){
        const itemNumberField = this.page.locator(warrantyFormObj.itemNumberLocator)
        await itemNumberField.fill(searchitemNumber, {delay: 100})
        
        //wait for autosuggestion container to load
        await this.page.locator(warrantyFormObj.searchSuggestion).waitFor({state: 'visible', timeOut:1000})
        await expect(this.page.locator(warrantyFormObj.searchSuggestion)).toBeVisible()
        
        //fetch elements in auto suggetsion
        const allItemsInAutoSuggestion = await this.page.locator(warrantyFormObj.searchSuggestionTitleLocator).count()
        console.log(`Total suggestion for searched item are :${allItemsInAutoSuggestion}`)

        for(let eachItem =0; eachItem<allItemsInAutoSuggestion; eachItem++){
          const itemTitle = await this.page.locator(warrantyFormObj.searchSuggestionTitleLocator).nth(eachItem).textContent()
          const itemDeascription = await this.page.locator(warrantyFormObj.searchSuggestionDescriptionLocator).nth(eachItem).textContent()
          console.log(`${itemTitle} and ${itemDeascription}`)
          const areSearchItemsListed = await itemDeascription.toLowerCase().includes(searchitemNumber.toLowerCase())
          expect(areSearchItemsListed).toBeTruthy()
        }    
      }

      async itemNumberFieldTypeSelect(searchitemNumber){
        const itemNumberField = this.page.locator(warrantyFormObj.itemNumberLocator)
        await itemNumberField.fill(searchitemNumber, {delay: 100})
        await this.page.locator(warrantyFormObj.searchSuggestionTitleLocator).first().click()
      } 

      async validateSendUsPhotoField(){
        //Select choosefile field
        await this.page.locator(warrantyFormObj.chooseFileLocator).setInputFiles('tests/uploadFiles/test1.jpg')
        await this.page.waitForTimeout(20000)
        expect(await this.page.locator(warrantyFormObj.uploadedImageLocator)).toContainText('test1.jpg')

        //select remove button
        await this.page.locator(warrantyFormObj.removeBtnLocator).click()
        await this.page.waitForTimeout(20000)
        await expect(this.page.locator(warrantyFormObj.chooseFileLocator)).toBeVisible()
      } 

      async validateUploadRecieptField(){
        //Select choose reciept field
        await this.page.locator(warrantyFormObj.chooseRecieptLocator).setInputFiles('tests/uploadFiles/test2.jpg')
        await this.page.waitForTimeout(20000)
        expect(await this.page.locator(warrantyFormObj.uploadedRecieptLocator)).toContainText('test2.jpg')

        //select remove button
        await this.page.locator(warrantyFormObj.removeBtnLocator).click()
        await this.page.waitForTimeout(20000)
        await expect(this.page.locator(warrantyFormObj.chooseRecieptLocator)).toBeVisible()
      } 

      async validateProductInformationSection(searchitemNumber,message,whereToPurchase){

        //Item Number Field
        const itemNumberField = this.page.locator(warrantyFormObj.itemNumberLocator)
        await itemNumberField.fill(searchitemNumber, {delay: 100})
        await this.page.locator(warrantyFormObj.searchSuggestionTitleLocator).first().click()

        //Select choosefile field
        await this.page.locator(warrantyFormObj.chooseFileLocator).setInputFiles('tests/uploadFiles/test1.jpg')
        await this.page.waitForTimeout(20000)

         //Select choose reciept field
         await this.page.locator(warrantyFormObj.chooseRecieptLocator).setInputFiles('tests/uploadFiles/test2.jpg')
         await this.page.waitForTimeout(20000)

         //select message Field 
         await this.page.fill(warrantyFormObj.messageFieldLocator,message)

         //select purchase This Item From Field
         await this.page.fill(warrantyFormObj.purchaseThisItemFromFieldLocator,whereToPurchase)

         // select Next Button Field
         await this.page.locator(warrantyFormObj.nxtBtnFieldLocator).click()
      }

      async personalInformation(first,last,email,phone,addr,city,zip){
        await this.page.fill(warrantyFormObj.firstNameLocator,first)
        await this.page.fill(warrantyFormObj.lastNameLocator,last)
        await this.page.fill(warrantyFormObj.eMailLocator,email)
        await this.page.fill(warrantyFormObj.phoneNumberLocator,phone)
        await this.page.fill(warrantyFormObj.streetAddressLocator,addr)
        await this.page.fill(warrantyFormObj.cityLocator,city)
        await this.page.fill(warrantyFormObj.zipCodeLocator,zip)
        await this.page.locator(warrantyFormObj.countryDropdownLocator).selectOption({index:1})
        await this.page.waitForTimeout(1000)
        await this.page.locator(warrantyFormObj.provinceLocator).selectOption({index:2})
        await this.page.check(warrantyFormObj.privacyPolicyCheckBoxLocator)
        await this.page.check(warrantyFormObj.subscribeEmailCheckBoxLocator)
        await this.page.click(warrantyFormObj.sumbitBtnLocator)
        await this.page.waitForTimeout(1000)
        await expect (this.page.locator(warrantyFormObj.thankYouLocator)).toContainText(configElement.expThankYouMsg)
      }
    }