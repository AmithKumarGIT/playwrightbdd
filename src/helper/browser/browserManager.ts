import {LaunchOptions, chromium,firefox,webkit } from "playwright-core";

const options: LaunchOptions = {
    headless: true,
}

export const invokeBrowser = () => {
     const browserType = process.env.BROWSER;
    //const browserType = "chrome";
    switch(browserType){
        case "chrome":
           return chromium.launch(options);
        case "firefox":
            firefox.launch(options);
            break;
        case "webkit":
                webkit.launch(options);
            break;
        default:
            throw new Error("Please set the proper browser");

    }

}