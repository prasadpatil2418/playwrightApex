import {test, expect} from '@playwright/test';
import {ChromeSocketPage} from '../pages/ChromeSocketPage'
require('dotenv').config();

test.describe('ChromeSocket Page elements:  @Sanity',()=>{
    let page, chromeSocketP
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
        chromeSocketP = new ChromeSocketPage(page);
    }

    //header tools element
    test('Navigate to ChromeSocket Page and check if Header is present on it', async({browser})=>{
        //Header check
        await setup({ browser })
        await chromeSocketP.openChromeSocketPage()
        await chromeSocketP.headerPresent()
        await page.close();
    });
    test('Validate page opened via BreadCrumb', async({browser})=>{
        await setup({ browser })
        await chromeSocketP.openChromeSocketPage()
        await chromeSocketP.validateChromeSocketPageUsingBreadCrumb()
        await page.close();
    });    
    test('Filter: Drive Tang Size enabaled and checkBoxes', async({browser})=>{
        await setup({ browser })
        await chromeSocketP.openChromeSocketPage()
        await chromeSocketP.driveTangSizeFiltercheckBoxFunctionalityVisibility()
        await page.close();
    });
    test('Filter: Length Format enabaled and checkBoxes', async({browser})=>{
        await setup({ browser })
        await chromeSocketP.openChromeSocketPage()
        await chromeSocketP.lengthFormatFiltercheckBoxFunctionalityVisibility()
        await page.close();
    });
    test('Filter: SAE Metric Torx enabaled and checkBoxes', async({browser})=>{
        await setup({ browser })
        await chromeSocketP.openChromeSocketPage()
        await chromeSocketP.sAEMetricTorxFiltercheckBoxFunctionalityVisibility()
        await page.close();
    });
    test('Filter: Drive Type enabaled and checkBoxes', async({browser})=>{
        await setup({ browser })
        await chromeSocketP.openChromeSocketPage()
        await chromeSocketP.driveTypeFiltercheckBoxFunctionalityVisibility()
        await page.close();
    });
    test('Filter: Socket Size SAE enabaled and checkBoxes', async({browser})=>{
        await setup({ browser })
        await chromeSocketP.openChromeSocketPage()
        await chromeSocketP.socketSizeSAEFiltercheckBoxFunctionalityVisibility()
        await page.close();
    });
    test('Filter: Socket Size MM enabaled and checkBoxes', async({browser})=>{
        await setup({ browser })
        await chromeSocketP.openChromeSocketPage()
        await chromeSocketP.socketSizeMMiltercheckBoxFunctionalityVisibility()
        await page.close();
    });
    test('Filter: Type enabaled and checkBoxes', async({browser})=>{
        await setup({ browser })
        await chromeSocketP.openChromeSocketPage()
        await chromeSocketP.typeFiltercheckBoxFunctionalityVisibility()
        await page.close();
    });
    test('Filter: Socket Size Bit enabaled and checkBoxes', async({browser})=>{
        await setup({ browser })
        await chromeSocketP.openChromeSocketPage()
        await chromeSocketP.socketSizeBitFiltercheckBoxFunctionalityVisibility()
        await page.close();
    });

    test('Filter: Set enabaled and radioButtons', async({browser})=>{
        await setup({ browser })
        await chromeSocketP.openChromeSocketPage()
        await chromeSocketP.setFiltercheckBoxFunctionalityVisibility()
        await page.close();
    });
    test('Pagination on Chrome Socket', async({browser})=>{
        await setup({ browser })
        await chromeSocketP.openChromeSocketPage()
        await chromeSocketP.paginationPageNumberVeriicationPageNavigation()
        await page.close();
    });
})
