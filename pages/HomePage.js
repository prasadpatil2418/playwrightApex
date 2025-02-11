import { expect, page } from "@playwright/test";
import * as configElement from "../config.js"
import * as hPgObject from "../pageobjects/homePageObject.js"
import {baseClass} from "./baseClass";
require('dotenv').config(); 


exports.HomePage = class HomePage{

    constructor(page){
        this.page = page
        //tools Drop Down
        this.toolsDropDown = this.page.locator(hPgObject.toolsDropDown)
        this.baseMethod = new baseClass(page)

    }

    
//*******************************************************           Header section              ***************************************************************
    
    //method 1  **************************************************************************************************************************************
    async openPageOnBrowsers(){
        await this.page.goto(process.env.BASE_URL)
    }

    //method 2  ********************************************************************************************************************************************
    async headerLogoVisibilityOnClickNavigationToHomePage(){  
        const logoHP = this.page.locator(hPgObject.logo)   
        
        //Logo visibility
        await expect(logoHP).toBeVisible();
        //on clicking the logo do we land on the same home page
        await logoHP.click()
        await expect(this.page).toHaveURL(configElement.homePageURL)
    }

    //method 3   ***********************************************************************************************************************************************
    async toolsDropDownListElementNavigationFromHomePage(){
            const elementsInToolsDropDown = this.toolsDropDown.locator(hPgObject.toolsItemsInToolsDropDown)
            const listFetchedLinks = [];          //arrays to save the text and links for further verification
    

            //click on the drop down
            await this.toolsDropDown.click();
            
            //Items count
            const menuItemCount = await elementsInToolsDropDown.count();
            console.log(`Total Number of elemnts in Tools DropDown (except "Featured Tools" and "All Tools"): ${menuItemCount}`)
            
            //visibility, enabled, veru=ify link
            for(let itemNo = 0; itemNo < menuItemCount; itemNo++){
                const option = elementsInToolsDropDown.nth(itemNo); 
                await option.isVisible()
                await option.isEnabled() 
    
                const optionLink = await option.getAttribute('href');
                listFetchedLinks.push(optionLink); 
                expect(configElement.expectedHeaderToolsSubUrl[itemNo].includes(listFetchedLinks[itemNo])).toBeTruthy()
                //console.log(option)
                
            }
    
    }

    //method 4   ********************************************************************************************************************************************
    async clickFeaturedToolsOptionInToolsDropDownNavigation(){
        const featuredToolsOption = this.page.locator(hPgObject.featuredToolsOptionInToolsDropDown)

        await this.toolsDropDown.click()
        await featuredToolsOption.click()
        await expect(this.page).toHaveURL(configElement.featuredToolsPageUrl)

    }

    //method 5   ********************************************************************************************************************************************
    async clickAllToolsOptionInToolsDropDownNavigation(){
        const allToolsOption = this.page.locator(hPgObject.allToolsOptionInToolsDropDown)

        await this.toolsDropDown.click()
        await allToolsOption.click()
        await expect(this.page).toHaveURL(configElement.allToolsUrl)

    }

    //method 6   ********************************************************************************************************************************************
    async supportHeaderNavigationFromHomePage(){
        const supportOption = this.page.locator(hPgObject.supportLocator)

        //click on support in the header item and 
        await supportOption.click()
        //check the url you land on
        await expect(this.page).toHaveURL(configElement.supportUrl)
    }
    

    //method 7   ********************************************************************************************************************************************
    async whereToBuyHeaderNavigationFromHomePage(){
        const whereToBuyOption = this.page.locator(hPgObject.whereToBuyLocator)

        //click on "Where to Buy" in the header item and
        await whereToBuyOption.click()
        //check the url you land on
        await expect(this.page).toHaveURL(configElement.whereToBuyUrl)
    }

    //method 8  **********************************************************************************************************************************************
    async clickOnSearchBarGiveInputNavigationPageCheck(itemToSearch){
        const supportIcon = this.page.locator(hPgObject.searchBarIconLocator)
        const searchBox = this.page.locator(hPgObject.searchBoxLoacator)

        await supportIcon.click()
        await searchBox.fill(itemToSearch)
        await searchBox.press('Enter')
        //console.log(this.SearchBarObj.SearchBarURL+itemToSearch)
        await expect(this.page).toHaveURL(configElement.searchItemsPage+itemToSearch)
    }

    //method 9  **********************************************************************************************************************************************
    //country


//**************************************************************             Home Page Body Test             *************************************************************
    
   
    //method 10  **********************************************************************************************************************************************
    async heroBannerElementsClickOnShopNow(){
            //check if the banner is visible
            await expect(this.page.locator(hPgObject.heroBannerBackGroundImageLocator)).toBeVisible()

            //validate Heading and subtext
            await expect(this.page.locator(hPgObject.heroBannerHeadingLocator)).toHaveText(configElement.expectedHeroBannerHeading)
            await expect(this.page.locator(hPgObject.heroBannerSubTextLocator)).toHaveText(configElement.expectedHeroBannerSubtext)

            //check the navigation after clicking on the "Shop Now Button" and check the navigation
            await this.page.locator(hPgObject.heroBannerShopNowButtonLocator).click()
            await expect(this.page).toHaveURL(configElement.diagnosticPageUrl)
    }


    //method 11 ************************************************************************************************************************************************
    async browseOurNewProductHeaderSubTitleElementCountAndTile(){
            //check title and subtitle being displayed:
            await expect(this.page.locator(hPgObject.browseOurNewProductTitleLocator)).toBeVisible()
            await expect(this.page.getByText(hPgObject.browseOurNewProductSubTitle)).toBeVisible()

            //check the number of elements in the list displayed
            const numberOfElementsDisplayed = await this.page.locator(hPgObject.totalProductsDisplayedInBrowseOurProduct).count()
            await expect(numberOfElementsDisplayed).toBe(configElement.expectedValueOfItemsDisplayed)


            //check if the tile is clickable
            const listOfElements = [];              //storing tiles in an array
            for(let itemNo = 0; itemNo < numberOfElementsDisplayed; itemNo++){
                const item = this.page.locator(hPgObject.totalProductsDisplayedInBrowseOurProduct).nth(itemNo);
                const iList= await item
                listOfElements.push(iList);    
            }

            //check the above stored tiles to be Visible and clicakble
            for(const eachTile of listOfElements){
                await expect(eachTile).toBeVisible();

                //check if whole tile is clickable withou actully executing its default navigation action
                await eachTile.click({trial: true})
            } 

    }

    //method 12 ************************************************************************************************************************************************
    async browseOurProductImageVisibility(){

        const numberOfImages = await this.page.locator(hPgObject.productImagesBrowseOurNewProductSection).count()

        for(let itemNo = 0; itemNo < numberOfImages; itemNo++){
            const item = this.page.locator(hPgObject.productImagesBrowseOurNewProductSection).nth(itemNo);
            await expect(item).toBeVisible();

            //check if image is clickable without actully executing its default navigation action
            await item.click({trial: true})

        }  
        
    }


    //method 13 ************************************************************************************************************************************************
    async eachBuyNowButtonPopUpFunctionallity(){    
        const countBuyButton = await this.page.locator(hPgObject.buyButtonCountForTiles).count()
    
        //const allTileBuyButtton = []
        
        for(let itemNo = 0; itemNo < countBuyButton; itemNo++){
            const item = this.page.locator(hPgObject.buyButtonCountForTiles).nth(itemNo); 
            await item.click()
            await expect( this.page.locator(hPgObject.popUpForBuyNowVisible)).toBeVisible()
            await  this.page.locator(hPgObject.closeBuyNowpopUp).click()
            
        }

    }


    //method 14 ************************************************************************************************************************************************
    async newProductPageClickabilityandNavigationa(){
        await this.page.locator(hPgObject.viewNewProductsButtonLocator).click()
        await expect(this.page).toHaveURL(configElement.NewProductPageURL)
    }

    //method 15 ************************************************************************************************************************************************
    async modularToolSetVisibilityNavigation(){
       await this.baseMethod.testBackGroundImageTitleSubTitleButtonClickNavigation(hPgObject.imageModularToolSet, hPgObject.headingModularToolSet, hPgObject.subTextModulaToolSet, hPgObject.buttonLearnMoreModularToolSet, configElement.LearnMoreModularToolSetURL)

    }

    //method 16 ************************************************************************************************************************************************
    async shopToolsByIndustryVisibilityNavigation(){       
        await this.baseMethod.testBackGroundImageTitleSubTitleButtonClickNavigation(hPgObject.imageShopByIndustry, hPgObject.headingShopByIndustry, hPgObject.subTextShopByIndustry, hPgObject.buttonShopToolsByIndustry, configElement.ShopToolsByIndusrtyURL)
    }

    //method 17 ************************************************************************************************************************************************
    async whoWeAreScetionImageTextVisibilityNavigation(){

        await this.baseMethod.testBackGroundImageTitleSubTitleButtonClickNavigation(hPgObject.imageWhoWeAreSection,hPgObject.headingWhoWeAre, hPgObject.subParaWhoWeAre, hPgObject.buttonLearnAboutUsWhoWeAre, configElement.WhoWeAreURL)

    }

    //method 19 ************************************************************************************************************************************************
    async signUpForExclusiveProductNews(firstName,lastName,email){
        //check field visibility
        await expect(this.page.locator(hPgObject.headingSignUp)).toBeVisible();
        await expect(this.page.getByText(hPgObject.subTextSignUp)).toBeVisible();
        await this.page.getByLabel(hPgObject.firstNameSignUpField).fill(firstName)
        await this.page.getByLabel(hPgObject.lastNameSignUpField).fill(lastName)
        await this.page.getByLabel(hPgObject.emailSignUpField).fill(email)

        //check the checkBox
        await this.page.getByLabel(hPgObject.checkBoxSignUp).check()
        await this.page.locator(hPgObject.buttonSignUp).click()

        await expect(this.page.getByText(hPgObject.signUpSuccessText)).toBeVisible()

    }

    //method 20 **************************************************************************************************************************************************************
    async WarrentySectionTextImageButtonNavigation(){
        await this.baseMethod.testBackGroundImageTitleSubTitleButtonClickNavigation(hPgObject.imageWarrentySection, hPgObject.headerWarrentySection, hPgObject.subtitleWarrentySection, hPgObject.viewWarrentyInfoButton, configElement.warrentyPageUrl)

    }

    //method 21 **************************************************************************************************************************************************************
    async ResourceSectionTextImageButtonNavigation(){
        await this.baseMethod.testBackGroundImageTitleSubTitleButtonClickNavigation(hPgObject.imageResourceSection, hPgObject.headerResourceSection, hPgObject.subtitlResourceSection, hPgObject.viewResourceInfoButton, configElement.resourcePageUrl)

    }



 //************************************************************************     Footer Section Test      *******************************************************************/

    //method 22 ************************************************************************************************************************************************
    async footerLogoClikabilityAndNavigationAndAdressVerification(){
        //logo visibility and clickability 
       await expect(this.page.locator(hPgObject.logoFooter)).toBeVisible();
       //check if image is clickable and navigates to the home page
       await this.page.locator(hPgObject.logoFooter).click()
       await expect(this.page).toHaveURL(configElement.homePageURL)

       //check address provided
       await expect(this.page.locator(hPgObject.addressFooter)).toBeVisible();

   }


   //Doubt
    //method 23 ************************************************************************************************************************************************
    async footerSocialsNavigation(){
        //socials
         const socialIconsCount = await this.page.locator(hPgObject.socialIcons).count()
         //await expect(this.page)
        console.log(`Total Number of socials Listed are: ${socialIconsCount}`)
         //the code skips Tik Tok so are running the loop for only 3 social media
         //facebook
         //Instagram
         //youTube

         //skip TikTok
         for(let eachIcon = 0; eachIcon<socialIconsCount; eachIcon++){
            if(eachIcon===2){
                console.log("Skipping TikTok link");
                continue;
            }
            //new Tab
                const [newPage] = await Promise.all([
                    this.page.context().waitForEvent('page'),
                    this.page.locator(hPgObject.socialIcons).nth(eachIcon).click()  
                ])                
           await expect(newPage).toHaveURL(configElement.actualSocialsList[eachIcon])
           await newPage.close()
        }
    }


    //method 24 ************************************************************************************************************************************************
    async footerSupportGearwrenchResourceHeaderNavigation(){
        const expectedUrl = [configElement.supportUrl,
                            configElement.homePageURL,
                            configElement.resourceUrl
        ]

        const footerHeaderElements = [hPgObject.footerTitleSupport, 
                                    hPgObject.footerTitleResources,
                                    hPgObject.footerTitleGearwrench
        ]

        for(const i=0; i<footerHeaderElements.count; i++){
            await footerHeaderElements[i].click()
            await expect(this.page).toHaveURL(expectedUrl[i]) 
        }
           
    }

    //method 25 ************************************************************************************************************************************************
    async footerSubLinksNavigation(){
        const subLinksCount = await this.page.locator(hPgObject.footerSubLinks).count()
        const listSubHeadingHref = []

        //caputre each elemts text and link and push it in repective array
        for(let itemNo = 0; itemNo < subLinksCount; itemNo++){
            const item = this.page.locator(hPgObject.footerSubLinks).nth(itemNo);
            const hrefTag = await item.getAttribute('href');
            listSubHeadingHref.push(hrefTag);  
            await item.isVisible()
            await item.isEnabled()  
        }

        //verify the elements captured
        for (let i = 0; i< configElement.expectedFooterSubUrl.count; i++){
                expect(configElement.expectedFooterSubUrl[i].includes(listSubHeadingHref[i])).toBeTruthy()
                //console.log(listActualLinks[i].includes(listFetchedLinks[i])  ? "Its a MATCH!!!!!!":"Nope not a match")
        }


           
    }

    //methos 26 ************************************************************************************************************************************************
    async countryNavigationCheck(){
        //click on coutry dropDown
        await this.page.locator(hPgObject.countryDropDown).click()
        const countryListCount = await this.page.locator(hPgObject.coutryOption).count()

        //check the country navigation
        for(let itemNo = 0; itemNo < countryListCount; itemNo++){
            const item = this.page.locator(hPgObject.coutryOption).nth(itemNo);
            const hrefTag = await item.getAttribute('href');
            await item.isVisible()
            await item.isEnabled()
            await expect(configElement.countrySiteLinks[itemNo].includes(hrefTag)).toBeTruthy()      
        }      
    }



}