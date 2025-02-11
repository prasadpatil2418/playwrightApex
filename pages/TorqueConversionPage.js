import { expect, page } from "@playwright/test";
import * as torqueConversionObj from "../pageobjects/torqueConversionObject.js"
import * as configElement from "../config.js"
import {baseClass} from "./baseClass.js";

 
exports.TorqueConversionPage = class TorqueConversionPage{
    constructor(page){
    this.page = page 
    this.baseMethod = new baseClass(page) ;  
}
//method 1  **************************************************************************************************************************************
async openTorqueConversionPage(){
    await this.page.goto(process.env.BASE_URL + '/support/torque-conversion');
}
  
//method 2  **************************************************************************************************************************************
async headerAndbreadcrumbVisibility(){
    await this.page.locator(torqueConversionObj.header).isVisible();

    const breadcrumb = this.page.locator(torqueConversionObj.breadcrumb);
     
    // BreadCrumb Visibility
    await expect(breadcrumb).toBeVisible();
}

//method 3 **************************************************************************************************************************************
async bannerAndConversionProcessInfoVisibility(){

    //Check if the Banner is Visible
    await expect(this.page.locator(torqueConversionObj.heroBannerLocator)).toBeVisible();

    //Check if the Description above Banner is Visible
    await expect(this.page.locator(torqueConversionObj.torqueConversionProcessLocator)).toBeVisible();

    //Check if Convert Now CTA is Visible and Clickable
    const convertNowCTA = await this.page.locator(torqueConversionObj.convertNowCTALocator);
    await convertNowCTA.click({trial: true});
}

//method 4 **************************************************************************************************************************************
async calculatorStepsSection(){

    //Check Title is Visible
    await expect(this.page.locator(torqueConversionObj.calculatorStepTitleLocator)).toHaveText(configElement.expectedCalculatorStepWorkSectionTitle);
    await this.baseMethod.WarrantyProcessSectionImageText(torqueConversionObj.calculatorStepImageLocator,configElement.expectedConversionStepsDisplayed,torqueConversionObj.calculatorStepSubtextLocator);
}

//method 5 **************************************************************************************************************************************
async torqueCalculation(EnterNumber,CurrentUnit){

    await expect(this.page.locator(torqueConversionObj.calculatorFormInputHeadingLocator)).toBeVisible();
    await this.page.locator(torqueConversionObj.calculatorFormInputLocator).fill(EnterNumber,{delay:100});
    await expect(this.page.locator(torqueConversionObj.calculatorFormMeasureHeadingLocator)).toBeVisible();
    await this.baseMethod.dropdownSelection(torqueConversionObj.calculatorFormMeasureDropdownLocator,CurrentUnit);
    await this.page.locator(torqueConversionObj.calculatorFormButtonConvertLocator).click();
    await this.page.waitForTimeout(2000)

    const table = await this.page.locator(torqueConversionObj.resultTableLocator)

    // Number of Rows and Column
    const columns = await this.page.locator(torqueConversionObj.tableColumnLocator)
    const columnCount = await columns.count()
    console.log("No. of columns : ", columnCount)
    expect (columnCount).toBe(2)

    const rows = await this.page.locator(torqueConversionObj.tableRowLocator)
    const rowCount = await rows.count()
    console.log("No. of rows : ", rowCount)
    expect (rowCount).toBe(10)

    // //Print all Details in Table
    for(let i=0;i < rowCount; i++){

        const row = rows.nth(i);
        const tdsValue = row.locator('td input')
        const tdsUnit = row.locator('td')

        const value = await tdsValue.inputValue()
         const unit = await tdsUnit.textContent()
         console.log(`Value: ${value}, Unit: ${unit}`)
        
        // for(let j=0; j< tdsUnit.count(); j++){
        //  const value = await tdsValue.nth(j).inputValue()
        //  const unit = await tdsUnit.nth(j).textContent()
        //  console.log(`Value: ${value}, Unit: ${unit}`)
           
        // }
    }

    // // Extract all rows from the table
    //    const rows = await this.page.$$eval('table tbody tr', rows => {
    //    return rows.map(row => {
    // // Extract text from each column (td) in the row
    //    return Array.from(row.querySelectorAll('td')).map(cell => cell.innerText);
    //     });
    //   });
     
    //   // Print the table values to the console
    //   rows.forEach((row, index) => {
    //     console.log(`Row ${index + 1}:`, row.join(' | '));
    //   });

}

}
