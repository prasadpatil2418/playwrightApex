import { test, except } from '@playwright/test'
import { WarrantyFormPage } from "../pages/WarrantyFormPage"



test.describe('Warranty Form  Page elements:  @Sanity', () => {

    test('Navigate to Warranty Form Page and check if Header, Breadcrumb is present on it', async ({ page }) => {

        const warrantyFormP = new WarrantyFormPage(page)
        await warrantyFormP.openWarrantyFormPage()
        await warrantyFormP.headerPresent()
        await warrantyFormP.validateWarrantyFormPageUsingBreadCrumb()
        await page.close();
    })

    test('Validate Warrenty Form Step Section ', async ({ page }) => {

        const warrantyFormP = new WarrantyFormPage(page)
        await warrantyFormP.openWarrantyFormPage()
        await warrantyFormP.warrantyStepsSection()
        await page.close();
    })

    test('Validate Item Number Field Autosuggestions ', async ({ page }) => {

        const warrantyFormP = new WarrantyFormPage(page)
        await warrantyFormP.openWarrantyFormPage()
        await warrantyFormP.itemNumberFieldSearch('tool')
        await page.close();
    })

    test('Type and Select Item Number Field', async ({ page }) => {

        const warrantyFormP = new WarrantyFormPage(page)
        await warrantyFormP.openWarrantyFormPage()
        await warrantyFormP.itemNumberFieldTypeSelect('tool')
        await page.close();
    })

    test('Validate Send Us a Photo Field', async ({ page }) => {

        const warrantyFormP = new WarrantyFormPage(page)
        await warrantyFormP.openWarrantyFormPage()
        await warrantyFormP.validateSendUsPhotoField()
        await page.close();
    })


    test('Validate Upload Reciept Field', async ({ page }) => {

        const warrantyFormP = new WarrantyFormPage(page)
        await warrantyFormP.openWarrantyFormPage()
        await warrantyFormP.validateUploadRecieptField()
        await page.close();
    })

    test('Validate Warrenty Form Page', async ({ page }) => {

        const warrantyFormP = new WarrantyFormPage(page)
        await warrantyFormP.openWarrantyFormPage()
        await warrantyFormP.validateProductInformationSection('tool','this is test message','amazon')
        await warrantyFormP.personalInformation('Fname','Lname','test@gmail.com','9876543210','b-23,abc-society','newyork','42030')
        await page.close();
    })

})