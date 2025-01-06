import{test, except} from '@playwright/test'
import{AllToolPage} from "../pages/AllToolPage"



test.describe('AllTool Page elements:  @Sanity',()=>{

    test('Navigate to AllTool Page and check if Header, Breadcrumb is present on it',async({page})=>{
       
        const allToolP = new AllToolPage(page)
        await allToolP.openAllToolPage()
        await allToolP.headerPresent()
        await allToolP.validateAllToolPageUsingBreadCrumb()
        await page.close();

    })

    test('Verify Banner Section',async({page})=>{
        const allToolP = new AllToolPage(page)
        await allToolP.openAllToolPage()
        await allToolP.validateBannerSection()
        await page.close();
    })
    
    test('Verify Shop by industry Section',async({page})=>{
        const allToolP = new AllToolPage(page)
        await allToolP.openAllToolPage()
        await allToolP.validateShopByIndustry()
        await page.close();
    })

    test('Verify Sector Menus Section',async({page})=>{
        const allToolP = new AllToolPage(page)
        await allToolP.openAllToolPage()
        await allToolP.validateSectorwiseMenus()
        await page.close();
    })
  

    test('Verify Auto speciality Card',async({page})=>{
        const allToolP = new AllToolPage(page)
        await allToolP.openAllToolPage()
        await allToolP.validateAutoSpecialitySectorCards()
        await page.close();
    })

})