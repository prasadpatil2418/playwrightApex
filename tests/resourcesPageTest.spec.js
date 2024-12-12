import {test, expect} from '@playwright/test';

import{ResourcesPage} from "../pages/ResourcesPage";

test.describe('Browse all Support page elements, including header and footer elemnts @Sanity',()=>{

    test('Open website and verify Banner Section @Sanity', async({page})=>{
        //Header check
        const resoucesP = new ResourcesPage(page);
        await resoucesP.openPageOnBrowsers();  //launch the site
        await resoucesP.heroBannerElements();   
        await page.close();
    })

    test('verify all filters are visible and interactable @Sanity', async({page})=>{
        //Header check
        const resoucesP = new ResourcesPage(page);
        await resoucesP.openPageOnBrowsers();  //launch the site
        await resoucesP.contentTypeFilterOnResources();  
        await resoucesP.clickonToolCategory()
        await resoucesP.toolCategoryFilterOnResources()
        await page.close();
    })

    })

