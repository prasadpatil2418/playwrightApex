import {test, expect} from '@playwright/test';
import {ResourcePage} from '../pages/ResourcePage'

test.describe('Resource Page elements:  @Sanity',()=>{

    //header tools element
    test('Navigate to Resource Page and check if Header is present on Resource page', async({page})=>{
        //Header check
        const resourceP = new ResourcePage(page);
        await resourceP.openResourcePage()
        await resourceP.headerPresent()
        await page.close();
    });

    test('Validate page opened via BreadCrumb', async({page})=>{
        const resourceP = new ResourcePage(page);
        await resourceP.openResourcePage() 
        await resourceP.validateResourcePageUsingBreadCrumb()
        await page.close();

    });

    test('Filter: Media type Elements DropDown enabaled and checkBoxes', async({page})=>{
        const resourceP = new ResourcePage(page);
        await resourceP.openResourcePage() 
        await resourceP.mediaTypeFiltercheckBoxFunctionalityVisibility()
        await page.close();

    });

    test('Filter: Tools Category Elements enabale and checkBoxes', async({page})=>{
        const resourceP = new ResourcePage(page);
        await resourceP.openResourcePage() 
        await resourceP.toolsCategoryFiltercheckBoxFunctionalityVisibility()
        await page.close();

    });

    test('Give input in Sub-Topic search box, check the auto suggestions displayed', async({page})=>{
        const resourceP = new ResourcePage(page);
        await resourceP.openResourcePage() 
        await resourceP.autoSuggestionSubTopicsSearch('tool')
        await page.close();

    });
    
    test('Sub-Topic Serach Bar functionality check', async({page})=>{
        const resourceP = new ResourcePage(page);
        await resourceP.openResourcePage() 
        await resourceP.subTopicSearchBar('torque')
        await page.close();
    });

    test('"Apply Filter" and "Clear Filter" functionality check', async({page})=>{
        const resourceP = new ResourcePage(page);
        await resourceP.openResourcePage() 
        await resourceP.applyFilterButtonAndClearFilterButtonFunctionality(2) //only 0 to 4 can be given here, since 'content type'filters are used for this test
        await page.close();

    });

    test('Search Resource bar functionality test', async({page})=>{
        const resourceP = new ResourcePage(page);
        await resourceP.openResourcePage() 
        await resourceP.serachResource('product')
        await page.close();
    });

    test('Sort By Drop Down and its options visibility functionality and clickability check', async({page})=>{
        const resourceP = new ResourcePage(page);
        await resourceP.openResourcePage() 
        await resourceP.sortByDropDownOptionVisibilityClickability()
        await page.close();
    });

    test('Sort By Date verification', async({page})=>{
        const resourceP = new ResourcePage(page);
        await resourceP.openResourcePage() 
        await resourceP.sortByDateoptionVerification()
        await page.close();
    });

    test('Sort By Aphabet verification', async({page})=>{
        const resourceP = new ResourcePage(page);
        await resourceP.openResourcePage() 
        await resourceP.sortByAlphabeticalOrder()
        await page.close();
    });

    test('Page Navigation and page number verification', async({page})=>{  
        test.setTimeout(120000)
        const resourceP = new ResourcePage(page);
        await resourceP.openResourcePage() 
        await resourceP.paginationPageNumberVeriicationPageNavigation()
        await page.close();

    });

    test('Resource page actual items displayed and count on footer verification for every page', async({page})=>{  
        test.setTimeout(120000)
        const resourceP = new ResourcePage(page);
        await resourceP.openResourcePage() 
        await resourceP.resourcePageElementsCountCheck()
        await page.close();

    });

    test('First and Last button visibility check as the page navigates through various pages', async({page})=>{  
        test.setTimeout(120000)
        const resourceP = new ResourcePage(page);
        await resourceP.openResourcePage() 
        await resourceP.firstLastFooterButtonVisibility()
        await page.close();

    });

    test('Engage with us on Socials section functionality, visibility and clickability check', async({page})=>{
        const resourceP = new ResourcePage(page);
        await resourceP.openResourcePage() 
        await resourceP.engageWithUsOnSocials()
        await page.close();

    });

    test('Footer email Sign-Up functionality', async({page})=>{
        const resourceP = new ResourcePage(page);
        await resourceP.openResourcePage() 
        await resourceP.signUpForExclusiveProductNews('testName','testLastName','testme@gmail.com')
        await page.close();

    });

})
