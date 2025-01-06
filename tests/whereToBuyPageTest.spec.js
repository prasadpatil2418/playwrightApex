import{test, except} from '@playwright/test'
import{WhereToBuyPage} from "../pages/WhereToBuyPage"



test.describe('WhereToBuy Page elements:  @Sanity',()=>{

    test('Navigate to WhereToBuy Page and check if Header, Breadcrumb is present on it',async({page})=>{
       
        const whereToBuyP = new WhereToBuyPage(page)
        await whereToBuyP.openWhereToBuyPage()
        await whereToBuyP.headerPresent()
        await whereToBuyP.validateWhereToBuyPageUsingBreadCrumb()
        await page.close();

    })

    test('Verify OnlineShopping Url Navigation',async({page})=>{
       const whereToBuyP = new WhereToBuyPage(page)
       await whereToBuyP.openWhereToBuyPage()
       await whereToBuyP.onlinePurchaseUrlNavigation()
       await page.close();
    })

    test('Verify FindNearBy and Price Spider Button',async({page})=>{
        const whereToBuyP = new WhereToBuyPage(page)
        await whereToBuyP.openWhereToBuyPage()
        await whereToBuyP.findNearByButtonClick()
        await whereToBuyP.pricespiderTabClick()
        await page.close();
     })


    test('Verify Country Dropdown',async({page})=>{
        const whereToBuyP = new WhereToBuyPage(page)
        await whereToBuyP.openWhereToBuyPage()
        await whereToBuyP.countryDropDownValidation()
        await page.close();
     })
})