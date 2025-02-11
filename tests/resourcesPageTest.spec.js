import {test, expect} from '@playwright/test';
import {ResourcePage} from '../pages/ResourcePage'
require('dotenv').config();
const dataSet = JSON.parse(JSON.stringify(require ("../Utils/ResourcePageData.json")))

test.describe('Resource Page elements:  @Sanity',()=>{

    let page, resourceP
    const setup = async ({ browser }) => {
        let context;
        if (process.env.BASE_URL.includes('dev') || ('stg')) {
            context = await browser.newContext({
                httpCredentials: {
                    username: process.env.SHIELD_USERNAME || 'default-username',  // Basic auth credentials
                    password: process.env.SHIELD_PASSWORD || 'default-password'
                }
            });
        }
        else {
            context = await browser.newContext();
        }
        page = await context.newPage();
        resourceP = new ResourcePage(page);
    }

    //header tools element
    test('Navigate to Resource Page and check if Header is present on Resource page', async({browser})=>{
        //Header check
        await setup({ browser })
        await resourceP.openResourcePage()
        await resourceP.headerPresent()
        await page.close();
    });

    test('Validate page opened via BreadCrumb', async({browser})=>{
        await setup({ browser })
        await resourceP.openResourcePage() 
        await resourceP.validateResourcePageUsingBreadCrumb()
        await page.close();

    });

    test('Filter: Media type Elements DropDown enabaled and checkBoxes', async({browser})=>{
        await setup({ browser })
        await resourceP.openResourcePage() 
        await resourceP.mediaTypeFiltercheckBoxFunctionalityVisibility()
        await page.close();

    });

    test('Filter: Tools Category Elements enabale and checkBoxes', async({browser})=>{
        await setup({ browser })
        await resourceP.openResourcePage() 
        await resourceP.toolsCategoryFiltercheckBoxFunctionalityVisibility()
        await page.close();

    });

    test('Give input in Sub-Topic search box, check the auto suggestions displayed', async({browser})=>{
        await setup({ browser })
        await resourceP.openResourcePage() 
        await resourceP.autoSuggestionSubTopicsSearch(dataSet.searchSubTopic)
        await page.close();

    });
    
    test('Sub-Topic Serach Bar functionality check', async({browser})=>{
        await setup({ browser })
        await resourceP.openResourcePage() 
        await resourceP.subTopicSearchBar(dataSet.searchSubTopics)
        await page.close();
    });

    test('"Apply Filter" and "Clear Filter" functionality check', async({browser})=>{
        await setup({ browser })
        await resourceP.openResourcePage() 
        await resourceP.applyFilterButtonAndClearFilterButtonFunctionality(dataSet.numberOfFiltersSelected) //only 0 to 4 can be given here, since 'content type'filters are used for this test
        await page.close();

    });

    test('Search Resource bar functionality test', async({browser})=>{
        await setup({ browser })
        await resourceP.openResourcePage() 
        await resourceP.serachResource(dataSet.resourceToSearch)
        await page.close();
    });

    test('Sort By Drop Down and its options visibility functionality and clickability check', async({browser})=>{
        await setup({ browser })
        await resourceP.openResourcePage() 
        await resourceP.sortByDropDownOptionVisibilityClickability()
        await page.close();
    });

    test('Sort By Date verification', async({browser})=>{
        await setup({ browser })
        await resourceP.openResourcePage() 
        await resourceP.sortByDateoptionVerification()
        await page.close();
    });

    test('Sort By Aphabet verification', async({browser})=>{
        await setup({ browser })
        await resourceP.openResourcePage() 
        await resourceP.sortByAlphabeticalOrder()
        await page.close();
    });

    test('Page Navigation and page number verification', async({browser})=>{  
        test.setTimeout(120000)
        const resourceP = new ResourcePage(page);
        await resourceP.openResourcePage() 
        await resourceP.paginationPageNumberVeriicationPageNavigation()
        await page.close();

    });

    test('Resource page actual items displayed and count on footer verification for every page', async({browser})=>{  
        test.setTimeout(120000)
        await setup({ browser })
        await resourceP.openResourcePage() 
        await resourceP.resourcePageElementsCountCheck()
        await page.close();

    });

    test('First and Last button visibility check as the page navigates through various pages', async({browser})=>{  
        test.setTimeout(120000)
        await setup({ browser })
        await resourceP.openResourcePage() 
        await resourceP.firstLastFooterButtonVisibility()
        await page.close();

    });

    test('Engage with us on Socials section functionality, visibility and clickability check', async({browser})=>{
        await setup({ browser })
        await resourceP.openResourcePage() 
        await resourceP.engageWithUsOnSocials()
        await page.close();

    });

    test('Footer email Sign-Up functionality', async({browser})=>{
        await setup({ browser })
        await resourceP.openResourcePage() 
        await resourceP.signUpForExclusiveProductNews(dataSet.firstName,dataSet.lastName,dataSet.email)
        await page.close();

    });

})
