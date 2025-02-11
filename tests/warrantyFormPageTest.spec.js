import { test, except } from '@playwright/test'
import { WarrantyFormPage } from "../pages/WarrantyFormPage"

const dataSet = JSON.parse(JSON.stringify(require ("../Utils/WarrantyPageData.json")))



test.describe('Warranty Form  Page elements:  @Sanity', () => {

    let page, warrantyFormP
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
        warrantyFormP = new WarrantyFormPage(page);
    }


    test('Navigate to Warranty Form Page and check if Header, Breadcrumb is present on it', async ({ browser }) => {

        await setup({ browser })
        await warrantyFormP.openWarrantyFormPage()
        await warrantyFormP.headerPresent()
        await warrantyFormP.validateWarrantyFormPageUsingBreadCrumb()
        await page.close();
    })

    test('Validate Warrenty Form Step Section ', async ({ browser }) => {

        await setup({ browser })
        await warrantyFormP.openWarrantyFormPage()
        await warrantyFormP.warrantyStepsSection()
        await page.close();
    })

    test('Validate Item Number Field Autosuggestions ', async ({ browser }) => {

        await setup({ browser })
        await warrantyFormP.openWarrantyFormPage()
        await warrantyFormP.itemNumberFieldSearch('tool')
        await page.close();
    })

    test('Type and Select Item Number Field', async ({ browser }) => {

        await setup({ browser })
        await warrantyFormP.openWarrantyFormPage()
        await warrantyFormP.itemNumberFieldTypeSelect('tool')
        await page.close();
    })

    test('Validate Send Us a Photo Field', async ({ browser }) => {

        await setup({ browser })
        await warrantyFormP.openWarrantyFormPage()
        await warrantyFormP.validateSendUsPhotoField()
        await page.close();
    })


    test('Validate Upload Reciept Field', async ({ browser }) => {

        await setup({ browser })
        await warrantyFormP.openWarrantyFormPage()
        await warrantyFormP.validateUploadRecieptField()
        await page.close();
    })

    test('Validate Warrenty Form Page', async ({ browser }) => {

        await setup({ browser })
        await warrantyFormP.openWarrantyFormPage()
        await warrantyFormP.validateProductInformationSection(dataSet.searchItemNo, dataSet.SendMessage, dataSet.EnterSellerName)
        await warrantyFormP.personalInformation(dataSet.FirstName, dataSet.LastName, dataSet.EmailAddress, dataSet.PhoneNumber, dataSet.StreetAddress, dataSet.City, dataSet.ZipCode)
        await page.close();
    })
    //Country And Province Selection Check
    test('Validate the Country And Province Selection', async ({ browser}) => {

        await setup({ browser })
        await warrantyFormP.openWarrantyFormPage()       //Launch the Warranty Form Page
        await warrantyFormP.personalInfoSectionCountryAndProvinceSelection(dataSet.Country, dataSet.Province);
        await page.close();
    })
})