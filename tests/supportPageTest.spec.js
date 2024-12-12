import {test, expect} from '@playwright/test';

import{SupportPage} from "../pages/SupportPage";

test.describe('Browse all Support page elements, including header and footer elemnts @Sanity',()=>{

    test('Open website and verify Banner Section @Sanity', async({page})=>{
        //Header check
        const supportP = new SupportPage(page);
        await supportP.openPageOnBrowsers();  //launch the site
        await supportP.heroBannerElements();   
        await page.close();

    });

    test('Warrenty section image, header, subtitle, button and navigation @Sanity', async({page})=>{
        //Header check
        const supportP = new SupportPage(page);
        await supportP.openPageOnBrowsers();  //launch the site
        await supportP.checkOutOurResources();
        await supportP.WarrentySectionTextImageButtonNavigation(); 
        await page.close();
    });

    test('FAQs section image, header, subtitle, button and navigation @Sanity', async({page})=>{
        //Header check
        const supportP = new SupportPage(page);
        await supportP.openPageOnBrowsers();  //launch the site
        await supportP.FaqsSectionTextImageButtonNavigation(); 
        await page.close();
    });

    test('Sign Up section element check, and sign up functionality verified @Sanity', async({page})=>{
        //Header check
        const supportP = new SupportPage(page);
        await supportP.openPageOnBrowsers();  //launch the site
        await supportP.signUpForExclusiveProductNews('testName','testLastName','testme@gmail.com') 
        await page.close();
    });


})