import { Before, After, BeforeAll, AfterAll, BeforeStep, AfterStep, Status} from "@cucumber/cucumber"
import { chromium,Browser,Page, BrowserContext} from "@playwright/test"
import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browser/browserManager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import { optinons } from "../utils/logger";
import { dir } from "console";
const fs = require("fs-extra");


// const path = require('path');
// const fs = require('fs');

let browser: Browser;
let context: BrowserContext;
const screenshotDir = process.cwd();
// console.log(`Current Working Directory: ${screenshotDir}`);

BeforeAll(async function (){
    getEnv();
    browser = await invokeBrowser();
});

Before(async function ({ pickle}) {
    const scenarioName = pickle.name + pickle.id;
    context = await browser.newContext({
    recordVideo:{
        dir: "test-results/videos",
    },
});
    const page = await context.newPage();
    pageFixture.page =page;
    pageFixture.logger = createLogger(optinons(scenarioName))

});

// AfterStep(async function({pickle,result}){
//     if(result?.status == Status.PASSED){
//     const screenshotsPath = path.join(screenshotDir, 'screenshots');
//     const forwardSlashPath = screenshotsPath.replace(/\\/g, '/');
//     // console.log(`Screenshots Directory: ${forwardSlashPath}`);
//        if (!fs.existsSync(screenshotsPath)) {
//          fs.mkdirSync(screenshotsPath, { recursive: true });
//              }
//const screenshotPath = path.join(forwardSlashPath, 'example.png');
    //const screenshotforwardPath = screenshotsPath.replace(/\\/g, '/');
    // console.log(`Screenshot Path: ${screenshotforwardPath}`);

// Take a screenshot
//      await pageFixture.page.screenshot({ path: `${screenshotforwardPath}/${pickle.name}.png`, type: 'png' });
//      const img = await pageFixture.page.screenshot({path:`./test-result/screenshots/${pickle.name}.png`,type: "png"})
//      await this.attach(img, "image/png");

// }
//        const img = await pageFixture.page.screenshot({path:`./test-result/screenshots/${pickle.name}.png`,type: "png"})
//         await this.attach(img, "image/png");
// });

After(async function ({pickle,result}) { 
    let videoPath: string;
    let img: Buffer;
    if(result?.status == Status.FAILED){
         const img = await pageFixture.page.screenshot({path:`./test-result/screenshots/${pickle.name}.png`,type: "png"})
         //await this.attach(img, "image/png");
         videoPath = await pageFixture.page.video().path();
     }
    await pageFixture.page.close();
    await context.close();
    if(result?.status == Status.FAILED){
    await this.attach(
        img, "image/png"
    );
    await this.attach(
        fs.readFileSync(videoPath),
        'video/webm'
    );
}
});

AfterAll(async function() {
    await browser.close();
    //pageFixture.logger.close();
});
    