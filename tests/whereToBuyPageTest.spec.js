import{test, except} from '@playwright/test'
import{WhereToBuyPage} from "../pages/WhereToBuyPage"
require('dotenv').config();

test.describe('WhereToBuy Page elements:  @Sanity',()=>{

    let page, whereToBuyP
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
        whereToBuyP = new WhereToBuyPage(page);
    }

    test('Navigate to WhereToBuy Page and check if Header, Breadcrumb is present on it',async({browser})=>{
       
        await setup({ browser })
        await whereToBuyP.openWhereToBuyPage()
        await whereToBuyP.headerPresent()
        await whereToBuyP.validateWhereToBuyPageUsingBreadCrumb()
        await page.close();

    })

    test('Verify OnlineShopping Url Navigation',async({browser})=>{

        await setup({ browser })
       await whereToBuyP.openWhereToBuyPage()
       await whereToBuyP.onlinePurchaseUrlNavigation()
       await page.close();
    })

    test('Verify FindNearBy and Price Spider Button',async({browser})=>{

        await setup({ browser })
        await whereToBuyP.openWhereToBuyPage()
        await whereToBuyP.findNearByButtonClick()
        await whereToBuyP.pricespiderTabClick()
        await page.close();
     })


    test('Verify Country Dropdown',async({browser})=>{

        await setup({ browser })
        await whereToBuyP.openWhereToBuyPage()
        await whereToBuyP.countryDropDownValidation()
        await page.close();
     })
})