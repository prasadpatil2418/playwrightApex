import {test, expect} from '@playwright/test';
import {ProductDetailPageLighting} from '../pages/ProductDPLighting'
require('dotenv').config();

 
test.describe('Product Detail Page Lighting elements:  @Sanity',()=> {

    let page, PdpLightingP
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
        PdpLightingP = new ProductDetailPageLighting(page);
    }
 
test('Navigate to Product Detail Page Lighting and check if Header is present on it', async({browser})=>{
// Header and BreadCrumb Visibility Check
    await setup({ browser })
    await PdpLightingP .openPDPPageLightingOnBrowsers()
    await PdpLightingP.headerAndBreadCrumbVisibility()
    await page.close();
});
 
// PDP Page Element Visibility
test('Validate PDP Page Elements', async({browser})=>{
    await setup({ browser })
    await PdpLightingP .openPDPPageLightingOnBrowsers()
    await PdpLightingP.productPageElementsVisibilty()
    await page.close();
});

// Carosual Image Visibility Check
test('Validate Carosual Image', async({browser})=>{
    await setup({ browser })
    await PdpLightingP .openPDPPageLightingOnBrowsers()
    await PdpLightingP.carosualImageSection()
    await page.close();
});

// Features And Specifications Visibilty Check
test('Validate the Features And Specifications', async({browser})=>{
    await setup({ browser })
    await PdpLightingP .openPDPPageLightingOnBrowsers()
    await PdpLightingP.featuresAndSpecificationsVisibilty()
    await page.close();
});

// FAQ Section Visibility Check
test('Validate the FAQ Section', async({browser})=>{
    await setup({ browser })
    await PdpLightingP .openPDPPageLightingOnBrowsers()
    await PdpLightingP.faqSectionVisibility()
    await page.close();
});

// Related Product Section Visibility Check
test('Validate th Related Product Section', async({browser})=>{
    await setup({ browser })
    await PdpLightingP .openPDPPageLightingOnBrowsers()
    await PdpLightingP.relatedProductSectionImageTitleSubtitleLink()
    await page.close();
});
 
// test('Filter: Type enabaled and checkBoxes', async({page})=>{
//     const PdpLightingP = new ProductDetailPageLighting(page);
//     await PdpLightingP .openPDPPageLightingOnBrowsers()
//     await PdpLightingP.driveTypeFiltercheckBoxFunctionalityVisibility()
//     await page.close();
// });
  
// test('Pagination on Mechanics Tool Set', async({page})=>{
//     const PdpLightingP = new ProductDetailPageLighting(page);
//     await PdpLightingP .openPDPPageLightingOnBrowsers()
//     await PdpLightingP.paginationPageNumberVeriicationPageNavigation()
//     await page.close();
// });
 
})
