import {test, expect} from '@playwright/test';
import{FeaturedToolPage} from "../pages/FeaturedToolPage"

test.describe('Browse all featured-tool page elements, including header and footer elemnts @Sanity',()=>{

    test('verify Banner section', async({page})=>{
        //Header check
        const featuredToolP = new FeaturedToolPage(page);
        await featuredToolP.openPageOnBrowsers();  //launch the site
        await featuredToolP.heroBannerElements();   
        await page.close();

    });


    test('verify displayed product section', async({page})=>{
       
        const featuredToolP = new FeaturedToolPage(page);
        await featuredToolP.openPageOnBrowsers();  //launch the site
        await featuredToolP.productSectionImageTitleSubtitleLink();   
        await page.close();

    });
})