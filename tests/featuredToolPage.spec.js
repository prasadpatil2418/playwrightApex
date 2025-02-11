import {test, expect} from '@playwright/test';
import {FeaturedToolPage} from '../pages/FeaturedToolPage';
import {HomePage} from '../pages/HomePage';
require('dotenv').config();

test.describe('Browse all featured tool page elements @Sanity',()=>{

    let page , featuredToolP, homeP
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
        featuredToolP = new FeaturedToolPage (page);
        homeP = new HomePage(page);
    }
    // Header check
test('Click on logo and Navigate to Homepage itself', async({browser})=>{ 
    await setup ({browser})
    await featuredToolP.openFeaturedToolPageOnBrowsers();  //launch the featured tool Page
    await homeP.headerLogoVisibilityOnClickNavigationToHomePage();   
    await page.close();
}); 

test('Open featured tool Page and check breadcrumb visibility', async({browser})=>{
    // Breadcrumb Visibility Check   
    await setup ({browser})
    await featuredToolP.openFeaturedToolPageOnBrowsers();  //launch the featured tool Page
    await featuredToolP.featuredtoolPageBreadCrumbVisibility();   // Breadcrumb Visibility check
    await page.close();
});

test('Verify Displayed Product Section', async({browser})=>{
    // Verify Displayed Product Section
    await setup ({browser})
    await featuredToolP.openFeaturedToolPageOnBrowsers();  //launch the site
    await featuredToolP.productSectionImageTitleSubtitleLink();   
    await page.close();
});

test('Featured tool Page Hero Banner Element Check', async({browser})=>{
    // Hero Banner Element Visibility Check
    await setup ({browser})
    await featuredToolP.openFeaturedToolPageOnBrowsers();  //launch the Support Page
    await featuredToolP.heroBannerElementsVisibilty();   
    await page.close();
});

test('findMoreResourcesHeaderSubTitle Check', async({browser})=>{
    // Find More Resources Section Title and Subtitle Check
    await setup ({browser})
    await featuredToolP.openFeaturedToolPageOnBrowsers();  //launch the featured tool Page
    await featuredToolP.findMoreResourcesSection();   
    await page.close();
});

test('FAQ Section image, header, subtitle, button and navigation', async({browser})=>{
    //FAQ Section Image, Header, Subtitle, Button and Navigation Check
    await setup ({browser})
    await featuredToolP.openFeaturedToolPageOnBrowsers();  //launch the featured tool Page
    await featuredToolP.FAQsSectionSupportTextImageButtonNavigation();   
    await page.close();
});

test('Product Brochures And Resources section image, header, subtitle, button and navigation', async({browser})=>{
    //Product Brochures And ResourcesSection Section Image, Header, Subtitle, Button and Navigation Check
    await setup ({browser})
    await featuredToolP.openFeaturedToolPageOnBrowsers();  //launch the featured tool Page
    await featuredToolP.ProductBrochuresAndResourcesSectionTextImageButtonNavigation();   
    await page.close();
});
   
test('Footer Support, Gearwrench, Resource navigation', async({browser})=>{
    //Footer Check   
    await setup ({browser})
    await featuredToolP.openFeaturedToolPageOnBrowsers();  //launch the featured tool Page
    const homeP = new HomePage(page);
    await homeP.footerSupportGearwrenchResourceHeaderNavigation(); 
    await page.close();
});
})