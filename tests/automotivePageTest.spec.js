import{test, expect} from "@playwright/test"
import{AutomotivePage} from "../pages/AutomotivePage.js"

test.describe("Validate Automative Page elements: @sanity", ()=>{

    test('Navigate to Automotive Page and check if Header, Breadcrumb is present on it', async({page})=>{
        const automotiveP = new AutomotivePage(page)
        await automotiveP.openAutomotivePage()
        await automotiveP.headerPresent()
        await automotiveP.validateAutomotivePageUsingBreadCrumb()
        await page.close()
    })

    test('Navigate to Banner Section', async({page})=>{
        const automotiveP = new AutomotivePage(page)
        await automotiveP.openAutomotivePage()
        await automotiveP.validateBannerSection()
        await page.close()
    })

    test('Validate Card section', async({page})=>{
        const automotiveP = new AutomotivePage(page)
        await automotiveP.openAutomotivePage()
        await automotiveP.validateCards()
        await page.close()
    })

    test('Verify Pagination', async({page})=>{
        const automotiveP = new AutomotivePage(page)
        await automotiveP.openAutomotivePage()
        await automotiveP.varifyPaginationOnAutomotivePage()
        await page.close()
    })

})