const {test,expect} = require('@playwright/test')
import{StrikingAndStruckPage} from "../pages/StrikingAndStruckPage"


test.describe("StrikingAndStrck Page elements:  @Sanity",()=>{

    let page, strikingAndStruckP
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
        strikingAndStruckP = new StrikingAndStruckPage(page);
    }

    //header and breadcrumb element
    test('Navigate to StrikingAndStrck Page and check if Header, Breadcrumb is present on it',async({browser})=>{

        await setup({ browser })
        await strikingAndStruckP.openStrikingAndStruckPage()
        await strikingAndStruckP.headerPresent()
        await strikingAndStruckP.validateStrikingAndStruckPageUsingBreadCrumb()
        await page.close();
    })

    test('Filter: Head Finish enabaled and checkBoxes', async({browser})=>{

        await setup({ browser })
        await strikingAndStruckP.openStrikingAndStruckPage()
        await strikingAndStruckP.headFinishFiltercheckBoxFunctionalityVisibility()
        await page.close();
    });

    test('Filter: Material enabaled and checkBoxes', async({browser})=>{

        await setup({ browser })
        await strikingAndStruckP.openStrikingAndStruckPage()
        await strikingAndStruckP.materialFiltercheckBoxFunctionalityVisibility()
        await page.close();
    });


    test('Filter: Hammer Style enabaled and checkBoxes', async({browser})=>{

        await setup({ browser })
        await strikingAndStruckP.openStrikingAndStruckPage()
        await strikingAndStruckP.hammerStyleFiltercheckBoxFunctionalityVisibility()
        await page.close();
    });

    test('Filter: Punch  Chisel Style enabaled and checkBoxes', async({browser})=>{

        await setup({ browser })
        await strikingAndStruckP.openStrikingAndStruckPage()
        await strikingAndStruckP.punchChiselStyleFiltercheckBoxFunctionalityVisibility()
        await page.close();
    });

    test('Filter: Type enabaled and checkBoxes', async({browser})=>{

        await setup({ browser })
        await strikingAndStruckP.openStrikingAndStruckPage()
        await strikingAndStruckP.typeFiltercheckBoxFunctionalityVisibility()
        await page.close();
    });

    test('Filter: Set enabaled and checkBoxes', async({browser})=>{

        await setup({ browser })
        await strikingAndStruckP.openStrikingAndStruckPage()
        await strikingAndStruckP.setFiltercheckBoxFunctionalityVisibility()
        await page.close();
    });
})