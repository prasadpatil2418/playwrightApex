import {test, expect} from '@playwright/test';
import{BoltBiterExtractionToolPage} from "../pages/BoltBiterExtractionToolPage"
require('dotenv').config();

test.describe('Browse all Bolt Biter Extraction Tools page elements, including header and footer elemnts @Sanity',()=>{
    let page, boltBiterExtractionToolP
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
        boltBiterExtractionToolP = new BoltBiterExtractionToolPage(page);
    }
    
    test('verify Banner section', async({browser})=>{
        await setup({ browser })
        const boltBiterExtractionToolP = new BoltBiterExtractionToolPage(page);
        await boltBiterExtractionToolP.openPageOnBrowsers();  //launch the site
        await boltBiterExtractionToolP.heroBannerElements();   
        await page.close();
    });
    test('verify Features section', async({browser})=>{  
        await setup({ browser })
        await boltBiterExtractionToolP.openPageOnBrowsers();  //launch the site
        await boltBiterExtractionToolP.boltBiterFeaturesSection();  
        await boltBiterExtractionToolP.boltBiterFeaturesSectionCard()
        await page.close();
    });
    test('verify Brochure section', async({browser})=>{
        await setup({ browser })
        await boltBiterExtractionToolP.openPageOnBrowsers();  //launch the site
        await boltBiterExtractionToolP.boltBiterBrochureSection();   
        await page.close();
    });
    test('verify Card section', async({browser})=>{   
        await setup({ browser })
        await boltBiterExtractionToolP.openPageOnBrowsers();  //launch the site
        await boltBiterExtractionToolP.boltBiterCardSection();   
        await page.close();
    });
    test('verify VideoPlayer section', async({browser})=>{  
        await setup({ browser })
        await boltBiterExtractionToolP.openPageOnBrowsers();  //launch the site
        await boltBiterExtractionToolP.videoPlayerFunctionalityCheckBoltBiter();   
        await page.close();
    });
})