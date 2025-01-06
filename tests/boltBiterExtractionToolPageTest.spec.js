import {test, expect} from '@playwright/test';
import{BoltBiterExtractionToolPage} from "../pages/BoltBiterExtractionToolPage"

test.describe('Browse all Bolt Biter Extraction Tools page elements, including header and footer elemnts @Sanity',()=>{

    test('verify Banner section', async({page})=>{
     
        const boltBiterExtractionToolP = new BoltBiterExtractionToolPage(page);
        await boltBiterExtractionToolP.openPageOnBrowsers();  //launch the site
        await boltBiterExtractionToolP.heroBannerElements();   
        await page.close();

    });

    test('verify Features section', async({page})=>{  
        const boltBiterExtractionToolP = new BoltBiterExtractionToolPage(page);
        await boltBiterExtractionToolP.openPageOnBrowsers();  //launch the site
        await boltBiterExtractionToolP.boltBiterFeaturesSection();  
        await boltBiterExtractionToolP.boltBiterFeaturesSectionCard()
        await page.close();

    });

    test('verify Brochure section', async({page})=>{
     
        const boltBiterExtractionToolP = new BoltBiterExtractionToolPage(page);
        await boltBiterExtractionToolP.openPageOnBrowsers();  //launch the site
        await boltBiterExtractionToolP.boltBiterBrochureSection();   
        await page.close();

    });

    test('verify Card section', async({page})=>{
     
        const boltBiterExtractionToolP = new BoltBiterExtractionToolPage(page);
        await boltBiterExtractionToolP.openPageOnBrowsers();  //launch the site
        await boltBiterExtractionToolP.boltBiterCardSection();   
        await page.close();

    });
    test('verify VideoPlayer section', async({page})=>{
     
        const boltBiterExtractionToolP = new BoltBiterExtractionToolPage(page);
        await boltBiterExtractionToolP.openPageOnBrowsers();  //launch the site
        await boltBiterExtractionToolP.videoPlayerFunctionalityCheckBoltBiter();   
        await page.close();

    });

   
})