import{test, except} from '@playwright/test'
import{ToolsByIndustryPage} from "../pages/ToolsByIndustryPage"
require('dotenv').config();


test.describe('Tools By Industry Page elements:  @Sanity',()=>{

    let page, toolsByIndustryP
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
        toolsByIndustryP = new ToolsByIndustryPage(page);
    }

    test('Navigate to Tools By Industry Page and check if Header, Breadcrumb is present on it',async({browser})=>{
       
        await setup({ browser })
        await toolsByIndustryP.openToolsByIndustryPage()
        await toolsByIndustryP.headerPresent()
        await toolsByIndustryP.validateToolsByIndustryPageUsingBreadCrumb()
        await page.close();

    })

    test('Verify Banner Section',async({browser})=>{
        await setup({ browser })
        await toolsByIndustryP.openToolsByIndustryPage()
        await toolsByIndustryP.validateBannerSection()
        await page.close();
    })
    
    test('Verify Industry Card',async({browser})=>{
        await setup({ browser })
        await toolsByIndustryP.openToolsByIndustryPage()
        await toolsByIndustryP.validateIndustryCards()
        await page.close();
    })

})