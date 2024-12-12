import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Browse all home page elements, including header and footer elemnts @Sanity',()=>{

//header tools element
    test('Open website click on logo and Navigate to Homepage itself', async({page})=>{
        //Header check
        const homeP = new HomePage(page);
        await homeP.openPageOnBrowsers();  //launch the site
        await homeP.headerLogoVisibilityOnClickNavigationToHomePage();   
        await page.close();

    });

    //3 test Tools DropDown
    test('Click on Tools DropDown and check the Number of items and verify links', async({page})=>{
        //Header check
        const homeP = new HomePage(page);
        await homeP.openPageOnBrowsers();  //launch the site
        await homeP.toolsDropDownListElementNavigationFromHomePage();   
        await page.close();
        //except "Featured Tools" and "All Tools" all 24 elements are checked
    });

    test('Click on Tools DropDown click on "Featured Tools" option navigate to featured tools page', async({page})=>{
        //Header check
        const homeP = new HomePage(page);
        await homeP.openPageOnBrowsers();  //launch the site
        await homeP.clickFeaturedToolsOptionInToolsDropDownNavigation();   
        await page.close();
    });

    test('Click on Tools DropDown click on "All Tools" option navigate to all tools page', async({page})=>{
        //Header check
        const homeP = new HomePage(page);
        await homeP.openPageOnBrowsers();  //launch the site
        await homeP.clickAllToolsOptionInToolsDropDownNavigation();   
        await page.close();
    });

    //support
    test('Click on "Support" option in header navigate to support page', async({page})=>{
        //Header check
        const homeP = new HomePage(page);
        await homeP.openPageOnBrowsers();  //launch the site
        await homeP.supportHeaderNavigationFromHomePage();   
        await page.close();
    });

    test('Click on "Where to Buy" option in header navigate to this page', async({page})=>{
        //Header check
        const homeP = new HomePage(page);
        await homeP.openPageOnBrowsers();  //launch the site
        await homeP.whereToBuyHeaderNavigationFromHomePage();   
        await page.close();
    });

    test('Click on SearchBar and give input to navigate to search page', async({page})=>{
        //Header check
        const homeP = new HomePage(page);
        await homeP.openPageOnBrowsers();  //launch the site
        await homeP.clickOnSearchBarGiveInputNavigationPageCheck("Tools"); 
        await page.close();
    });

    test('Country DropDown Navigations', async({page})=>{
        //Header check
        const homeP = new HomePage(page);
        await homeP.openPageOnBrowsers();  //launch the site
        await homeP.countryNavigationCheck(); 
        await page.close();
    });

    test('Hero Banner, title, button visibility, clcik on "Shop Now"', async({page})=>{
        //Header check
        const homeP = new HomePage(page);
        await homeP.openPageOnBrowsers();  //launch the site
        await homeP.heroBannerElementsClickOnShopNow(); 
        await page.close();
    });

    test('Browse our new product title, subtitle, number of products displayed and interactable product tile', async({page})=>{
        //Header check
        const homeP = new HomePage(page);
        await homeP.openPageOnBrowsers();  //launch the site
        await homeP.browseOurNewProductHeaderSubTitleElementCountAndTile(); 
        await page.close();
    });

    test('Check all Product Images are being Displayed and are clickable', async({page})=>{
        //Header check
        const homeP = new HomePage(page);
        await homeP.openPageOnBrowsers();  //launch the site
        await homeP.browseOurProductImageVisibility(); 
        await page.close();
    });

    test('Click on Buy Now button of each product to check if pop-up is visible', async({page})=>{
        //Header check
        const homeP = new HomePage(page);
        await homeP.openPageOnBrowsers();  //launch the site
        await homeP.eachBuyNowButtonPopUpFunctionallity(); 
        await page.close();
    });

    test('View New Products button functionality and navigation', async({page})=>{
        //Header check
        const homeP = new HomePage(page);
        await homeP.openPageOnBrowsers();  //launch the site
        await homeP.newProductPageClickabilityandNavigationa(); 
        await page.close();
    });

    test('Modular Tool Sets section image, header, subtitle, button and navigation', async({page})=>{
        //Header check
        const homeP = new HomePage(page);
        await homeP.openPageOnBrowsers();  //launch the site
        await homeP.modularToolSetVisibilityNavigation(); 
        await page.close();
    });

   
    test('Shop By Industry section image, header, subtitle, button and navigation', async({page})=>{
        //Header check
        const homeP = new HomePage(page);
        await homeP.openPageOnBrowsers();  //launch the site
        await homeP.shopToolsByIndustryVisibilityNavigation(); 
        await page.close();
    });

    test('Who we are section image, header, subtitle, button and navigation', async({page})=>{
        //Header check
        const homeP = new HomePage(page);
        await homeP.openPageOnBrowsers();  //launch the site
        await homeP.whoWeAreScetionImageTextVisibilityNavigation(); 
        await page.close();
    });

    test('Sign Up section element check, and sign up functionality verified', async({page})=>{
        //Header check
        const homeP = new HomePage(page);
        await homeP.openPageOnBrowsers();  //launch the site
        await homeP.signUpForExclusiveProductNews('testName','testLastName','testme@gmail.com') 
        await page.close();
    });


    test('Warrenty section image, header, subtitle, button and navigation', async({page})=>{
        //Header check
        const homeP = new HomePage(page);
        await homeP.openPageOnBrowsers();  //launch the site
        await homeP.WarrentySectionTextImageButtonNavigation(); 
        await page.close();
    });

    test('Resource section image, header, subtitle, button and navigation', async({page})=>{
        //Header check
        const homeP = new HomePage(page);
        await homeP.openPageOnBrowsers();  //launch the site
        await homeP.ResourceSectionTextImageButtonNavigation(); 
        await page.close();
    });


    test('Footer logo and address visibility and on click navigation', async({page})=>{
        //Header check
        const homeP = new HomePage(page);
        await homeP.openPageOnBrowsers();  //launch the site
        await homeP.footerLogoClikabilityAndNavigationAndAdressVerification(); 
        await page.close();
    });

    test('social meadia list and navigation', async({page})=>{
        //Header check
        const homeP = new HomePage(page);
        await homeP.openPageOnBrowsers();  //launch the site
        await homeP.footerSocialsNavigation(); 
        await page.close();
    });

    test('Footer Support, Gearwrench, Resource navigation', async({page})=>{
        //Header check
        const homeP = new HomePage(page);
        await homeP.openPageOnBrowsers();  //launch the site
        await homeP.footerSupportGearwrenchResourceHeaderNavigation(); 
        await page.close();
    });

    test('Footer SubLinks Link check', async({page})=>{
        //Header check
        const homeP = new HomePage(page);
        await homeP.openPageOnBrowsers();  //launch the site
        await homeP.footerSubLinksNavigation(); 
        await page.close();
    });


    


})