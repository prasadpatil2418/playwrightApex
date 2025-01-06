import{test, except} from '@playwright/test'
import{ToolsByIndustryPage} from "../pages/ToolsByIndustryPage"



test.describe('Tools By Industry Page elements:  @Sanity',()=>{

    test('Navigate to Tools By Industry Page and check if Header, Breadcrumb is present on it',async({page})=>{
       
        const toolsByIndustryP = new ToolsByIndustryPage(page)
        await toolsByIndustryP.openToolsByIndustryPage()
        await toolsByIndustryP.headerPresent()
        await toolsByIndustryP.validateToolsByIndustryPageUsingBreadCrumb()
        await page.close();

    })

    test('Verify Banner Section',async({page})=>{
        const toolsByIndustryP = new ToolsByIndustryPage(page)
        await toolsByIndustryP.openToolsByIndustryPage()
        await toolsByIndustryP.validateBannerSection()
        await page.close();
    })
    
    test('Verify Industry Card',async({page})=>{
        const toolsByIndustryP = new ToolsByIndustryPage(page)
        await toolsByIndustryP.openToolsByIndustryPage()
        await toolsByIndustryP.validateIndustryCards()
        await page.close();
    })

})