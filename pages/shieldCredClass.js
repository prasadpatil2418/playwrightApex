import { expect, page,browser } from "@playwright/test";
require('dotenv').config(); 

exports.shieldCredClass = class shieldCredClass{
    constructor(page){
    this.page = page
}

    static async setupContext(browser) {
        let context;
        if (process.env.BASE_URL.includes('dev') || process.env.BASE_URL.includes('stg')) {
            context = await browser.newContext({
                httpCredentials: {
                    username: process.env.SHIELD_USERNAME || 'default-username',
                    password: process.env.SHIELD_PASSWORD || 'default-password'
                }
            });
        } else {
            context = await browser.newContext();
        }
        return context;
    }
}
