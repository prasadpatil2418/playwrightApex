import { expect, page } from "@playwright/test";
import * as configElement from "../config.js"
import * as bbetPgObject from "../pageobjects/boltBiterExtractionToolPageObject.js"
import { baseClass } from "./baseClass.js";
//require('dotenv').config();

exports.BoltBiterExtractionToolPage = class BoltBiterExtractionToolPage {
    constructor(page) {
        this.page = page
        this.baseMethod = new baseClass(page)
    }
    //method 1  **************************************************************************************************************************************
    async openPageOnBrowsers() {
        await this.page.goto(process.env.BASE_URL +'/featured-tools/bolt-biter-extraction-tools')
    }
    //method 2  **************************************************************************************************************************************
    async heroBannerElements() {
        await this.baseMethod.testImageTitleSubTitleClickOnShopNow(bbetPgObject.bannerImageLocator,
            bbetPgObject.bannerTitleLocator, configElement.expectedBannerTitleBBET,
            bbetPgObject.bannerSubtitleLocator, configElement.expectedBannerSubtitleBBET,
            bbetPgObject.shopNowButtonLocator, configElement.expectedUrlBBET)
    }
    //method 3
    async boltBiterFeaturesSection() {
        //validate Heading and subtext
        await expect(this.page.locator(bbetPgObject.boltBiterFeaturesTitleLocator)).toHaveText(configElement.expectedboltBiterFeaturesTitle)
        await expect(this.page.locator(bbetPgObject.boltBiterFeaturesTextLocator)).toContainText(configElement.expectedboltBiterFeaturesText)
    }
    //method 4
    async boltBiterFeaturesSectionCard() {
        await this.baseMethod.featureSectionImageTitleText(bbetPgObject.boltBiterFeaturesSectionTextLocator, configElement.expectedboltBiterFeaturesCard,
            bbetPgObject.boltBiterFeaturesImageLocator, bbetPgObject.boltBiterFeaturesSectionTitleLocator, bbetPgObject.boltBiterFeaturesSectionTextLocator)
    }
    //method 5
    async boltBiterBrochureSection() {
        await this.baseMethod.testImageTitleSubTitle(bbetPgObject.boltBiterBrochureImageLocator,
            bbetPgObject.boltBiterBrochureTitleLocator, configElement.expectedboltBiterBrochureTitle,
            bbetPgObject.boltBiterBrochureTextLocator, configElement.expectedboltBiterBrochureText)
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.page.locator(bbetPgObject.boltBiterBrochureDownloadButtonLocator).click()
        ])
        await expect(newPage).toHaveURL(configElement.expectedboltBiterUrl)
    }
    //method 6
    async boltBiterCardSection() {
        await this.baseMethod.cardSectionImageTitleSubtitleLink(bbetPgObject.boltBiterCardLocator, configElement.expectedboltBiterCardDisplayed,
            bbetPgObject.boltBiterCardImageLocator, bbetPgObject.boltBiterCardTitleLocator,bbetPgObject.boltBiterCardTextLocator, bbetPgObject.boltBiterCardButtonLocator, configElement.expectedBoltBiterCardUrl)
    }
    //method 7
    async videoPlayerFunctionalityCheckBoltBiter() {
        const iframe = this.page.frame({ url: 'https://www.youtube.com/embed/4U3R6xwTVVE?rel=0&autoplay=0&enablejsapi=1&modestbranding=1' })
        const playButton = iframe.locator('//button[@title=\'Play (k)\']')
        await expect(playButton).toBeVisible()
        await playButton.click();
        await this.page.waitForTimeout(2000);
        const pauseButton = iframe.locator("button[aria-label='Pause keyboard shortcut k']");
        await expect(pauseButton).toBeVisible();
        await pauseButton.click();
        const muteButton = iframe.locator("button[aria-label='Mute keyboard shortcut m']");
        //const muteButton =  iframe.locator("button[title='Mute (m)']");
        await expect(muteButton).toBeVisible();
        await muteButton.click();
        await this.page.waitForTimeout(2000);
        const unmuteButton = iframe.locator("button[aria-label='Unmute keyboard shortcut m']");
        //const unmuteButton =  iframe.locator("button[title='Unmute (m)']");
        await expect(unmuteButton).toBeVisible();
        await unmuteButton.click();
        const FullScreenButton = iframe.locator("button[aria-label='Full screen keyboard shortcut f']")
        //const FullScreenButton = iframe.locator("button[title='Full screen (f)']")
        await expect(FullScreenButton).toBeVisible();
        await FullScreenButton.click();
        await this.page.waitForTimeout(2000);
        const exitFullScreenButton = iframe.locator("button[aria-label='Exit full screen keyboard shortcut f']")
        //const exitFullScreenButton = iframe.locator("button[title='Exit full screen (f)']")
        await expect(exitFullScreenButton).toBeVisible();
        await exitFullScreenButton.click();
        await page.pause();
    }
}
