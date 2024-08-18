import { Page } from "@playwright/test";
import { link, linkSync } from "fs";

export default class PlaywrightWrapper{
    constructor(private page: Page){}

    async goto(url: string) {
        await this.page.goto(url,{
           waitUntil: "domcontentloaded"
        });
    }
async WaitAndClick (Locator: string){
    const element = this.page.locator(Locator);
    await element.waitFor({

        state: "visible"
    });
    await element.click();
}
    async navigateTo(Link: string){
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click(Link)
        ])
    }
}