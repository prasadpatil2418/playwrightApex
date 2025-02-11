import{test, except} from '@playwright/test'
import{AllToolPage} from "../pages/AllToolPage"
require('dotenv').config();


test.describe('AllTool Page elements:  @Sanity',()=>{

    let page , allToolP
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
        allToolP = new AllToolPage (page);
    }

    test('Navigate to AllTool Page and check if Header, Breadcrumb is present on it',async({browser})=>{
       
        await setup ({browser})
        await allToolP.openAllToolPage()
        await allToolP.headerPresent()
        await allToolP.validateAllToolPageUsingBreadCrumb()
        await page.close();

    })

    test('Verify Banner Section',async({browser})=>{
        await setup ({browser})
        await allToolP.openAllToolPage()
        await allToolP.validateBannerSection()
        await page.close();
    })
    
    test('Verify Shop by industry Section',async({browser})=>{
        await setup ({browser})
        await allToolP.openAllToolPage()
        await allToolP.validateShopByIndustry()
        await page.close();
    })

    test('Verify Sector Menus Section',async({browser})=>{
        await setup ({browser})
        await allToolP.openAllToolPage()
        await allToolP.validateSectorwiseMenus()
        await page.close();
    })
  

    test('Verify Auto speciality Card',async({browser})=>{
        await setup ({browser})
        await allToolP.openAllToolPage()
        await allToolP.validateAutoSpecialitySectorCards()
        await page.close();
    })

})