import {test, expect} from '@playwright/test';
import {TorqueConversionPage} from '../pages/TorqueConversionPage'
import { HomePage } from '../pages/HomePage';
require('dotenv').config();
const dataSet = JSON.parse(JSON.stringify(require ("../Utils/TorqueConversionPageData.json")))
 
test.describe('Torque Conversion Page Elements:  @Sanity',()=> {

    let page , TorqueConversionP 
    const setup = async ({ browser }) => {
        let context;
        if (process.env.BASE_URL.includes('dev') || ('stg')) {
          context = await browser.newContext({
            httpCredentials: {
              username: process.env.SHIELD_USERNAME || 'default-username',  // Basic Auth Credentials
              password: process.env.SHIELD_PASSWORD || 'default-password'
            }
        });

        }
        else {
          context = await browser.newContext();
        }
        page = await context.newPage();
        TorqueConversionP  = new TorqueConversionPage (page);
    }

//Header Logo Navigation Check
test('Verify the Navigation Upon Clicking on the Logo', async({browser})=>{
    await setup ({browser});
    await TorqueConversionP.openTorqueConversionPage();      //Launch the Torque Conversion Page
    const homeP = new HomePage(page);
    await homeP.headerLogoVisibilityOnClickNavigationToHomePage();   
    await page.close();
    });    

//Header and Breadcrumb Check
test('Validate the Header and BreadCrumb Section', async({browser})=>{
    await setup ({browser});
    await TorqueConversionP.openTorqueConversionPage();      //Launch the Torque Conversion Page
    await TorqueConversionP.headerAndbreadcrumbVisibility();
    await page.close();
});

//Banner And Warranty Info Section Check
test('Validate the Banner And Conversion Process Info Visibility', async({browser})=>{
    await setup ({browser});
    await TorqueConversionP.openTorqueConversionPage();      //Launch the Torque Conversion Page
    await TorqueConversionP.bannerAndConversionProcessInfoVisibility();
    await page.close();
});

//Calculator Steps Section Check
test ('Validate the Calculator Steps Section', async({browser})=>{
    await setup ({browser});
    await TorqueConversionP.openTorqueConversionPage();       //Launch the Torque Conversion Page
    //await TorqueConversionP.calculatorStepsSection();       //(need to update the method)
    await page.close();
});

// Torque Calculation Check
test ('Validate the Torque Calculation', async({browser})=>{
    await setup ({browser});
    await TorqueConversionP.openTorqueConversionPage();       //Launch the Torque Conversion Page
    await TorqueConversionP.torqueCalculation(dataSet.EnterNumber,dataSet.CurrentUnit);
    await page.close();
});
});