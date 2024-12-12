import {test, expect} from '@playwright/test';
import{FeaturedToolPage} from "../pages/FeaturedToolPage"

test.describe('Browse all featured-tool page elements, including header and footer elemnts @Sanity',()=>{

//header tools element
    test('verify displayed product section', async({page})=>{
        //Header check
        const featuredToolP = new FeaturedToolPage(page);
        await featuredToolP.openPageOnBrowsers();  //launch the site
        await featuredToolP.productSectionImageTitleSubtitleLink();   
        await page.close();

    });
})