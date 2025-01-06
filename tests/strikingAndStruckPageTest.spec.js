const {test,expect} = require('@playwright/test')
import{StrikingAndStruckPage} from "../pages/StrikingAndStruckPage"

test.describe("StrikingAndStrck Page elements:  @Sanity",()=>{

    //header and breadcrumb element
    test('Navigate to StrikingAndStrck Page and check if Header, Breadcrumb is present on it',async({page})=>{

        const strikingAndStruckP = new StrikingAndStruckPage(page)
        await strikingAndStruckP.openStrikingAndStruckPage()
        await strikingAndStruckP.headerPresent()
        await strikingAndStruckP.validateStrikingAndStruckPageUsingBreadCrumb()
        await page.close();
    })

    test('Filter: Head Finish enabaled and checkBoxes', async({page})=>{
        const strikingAndStruckP = new StrikingAndStruckPage(page);
        await strikingAndStruckP.openStrikingAndStruckPage()
        await strikingAndStruckP.headFinishFiltercheckBoxFunctionalityVisibility()
        await page.close();
    });

    test('Filter: Material enabaled and checkBoxes', async({page})=>{
        const strikingAndStruckP = new StrikingAndStruckPage(page);
        await strikingAndStruckP.openStrikingAndStruckPage()
        await strikingAndStruckP.materialFiltercheckBoxFunctionalityVisibility()
        await page.close();
    });


    test('Filter: Hammer Style enabaled and checkBoxes', async({page})=>{
        const strikingAndStruckP = new StrikingAndStruckPage(page);
        await strikingAndStruckP.openStrikingAndStruckPage()
        await strikingAndStruckP.hammerStyleFiltercheckBoxFunctionalityVisibility()
        await page.close();
    });

    test('Filter: Punch  Chisel Style enabaled and checkBoxes', async({page})=>{
        const strikingAndStruckP = new StrikingAndStruckPage(page);
        await strikingAndStruckP.openStrikingAndStruckPage()
        await strikingAndStruckP.punchChiselStyleFiltercheckBoxFunctionalityVisibility()
        await page.close();
    });

    test('Filter: Type enabaled and checkBoxes', async({page})=>{
        const strikingAndStruckP = new StrikingAndStruckPage(page);
        await strikingAndStruckP.openStrikingAndStruckPage()
        await strikingAndStruckP.typeFiltercheckBoxFunctionalityVisibility()
        await page.close();
    });

    test('Filter: Set enabaled and checkBoxes', async({page})=>{
        const strikingAndStruckP = new StrikingAndStruckPage(page);
        await strikingAndStruckP.openStrikingAndStruckPage()
        await strikingAndStruckP.setFiltercheckBoxFunctionalityVisibility()
        await page.close();
    });
})