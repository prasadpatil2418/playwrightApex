import { test, expect } from "@playwright/test"
import { AutomotivePage } from "../pages/AutomotivePage.js"
require('dotenv').config();

test.describe("Validate Automative Page elements: @sanity", () => {

    let page, automotiveP
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
        automotiveP = new AutomotivePage(page);
    }

    test('Navigate to Automotive Page and check if Header, Breadcrumb is present on it', async ({ browser }) => {
        await setup({ browser })
        await automotiveP.openAutomotivePage()
        await automotiveP.headerPresent()
        await automotiveP.validateAutomotivePageUsingBreadCrumb()
        await page.close()
    })

    test('Navigate to Banner Section', async ({ browser }) => {
        await setup({ browser })
        await automotiveP.openAutomotivePage()
        await automotiveP.validateBannerSection()
        await page.close()
    })

    test('Validate Card section', async ({ browser }) => {
        await setup({ browser })
        await automotiveP.openAutomotivePage()
        await automotiveP.validateCards()
        await page.close()
    })

    test('Verify Pagination', async ({ browser }) => {
        await setup({ browser })
        await automotiveP.openAutomotivePage()
        await automotiveP.varifyPaginationOnAutomotivePage()
        await page.close()
    })
})