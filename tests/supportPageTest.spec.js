import {test, expect} from '@playwright/test';
import{SupportPage} from "../pages/SupportPage";
require('dotenv').config();

test.describe('Browse all Support page elements, including header and footer elemnts @Sanity',()=>{

    let page, supportP
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
        supportP = new SupportPage(page);
    }

    test('Open website and verify Banner Section @Sanity', async({browser})=>{
        //Header check
        await setup({ browser })
        await supportP.openPageOnBrowsers();  //launch the site
        await supportP.heroBannerElements();   
        await page.close();

    });

    test('Warrenty section image, header, subtitle, button and navigation @Sanity', async({browser})=>{
        //Header check
        await setup({ browser })
        await supportP.openPageOnBrowsers();  //launch the site
        await supportP.checkOutOurResources();
        await supportP.WarrentySectionTextImageButtonNavigation(); 
        await page.close();
    });

    test('FAQs section image, header, subtitle, button and navigation @Sanity', async({browser})=>{
        //Header check
        await setup({ browser })
        await supportP.openPageOnBrowsers();  //launch the site
        await supportP.FaqsSectionTextImageButtonNavigation(); 
        await page.close();
    });

    test('Sign Up section element check, and sign up functionality verified @Sanity', async({browser})=>{
        //Header check
        await setup({ browser })
        await supportP.openPageOnBrowsers();  //launch the site
        await supportP.signUpForExclusiveProductNews('testName','testLastName','testme@gmail.com') 
        await page.close();
    });


})