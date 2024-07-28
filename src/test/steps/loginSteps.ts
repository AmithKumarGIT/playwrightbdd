
import { Given, When, Then, setDefaultTimeout} from "@cucumber/cucumber";
import { expect }  from "@playwright/test";
import { test } from '@playwright/test';
import { pageFixture } from "../../hooks/pageFixture"
setDefaultTimeout(60 * 1000 * 2)

  Given('user is on login page', async function () {
    await pageFixture.page.goto(process.env.BASEURL);
    pageFixture.logger.info("navigated to Application")

  })
         
         Given('click on the login link', async function () {
            await pageFixture.page.locator("//a[@id = 'login2']").click();
            pageFixture.logger.info("Clicked on the login link")

         });


          Given('user enters the Username as {string}', async function (username) {
            await pageFixture.page.locator("//input[@id = 'loginusername']").fill(username);
            pageFixture.logger.info("Username entered")
          });


          Given('User enters the password as {string}', async function (password) {
            await pageFixture.page.locator("//input[@id = 'loginpassword']").fill(password);
            pageFixture.logger.info("Password entered")
          });


          When('Users clicks on the login button', async function () {
            await pageFixture.page.click("//button[normalize-space()='Log in']");
            pageFixture.logger.info("Clicked on the login button to enter application")
          });


          Then('Login should be successful', async function () {
            await pageFixture.page.waitForTimeout(10000);
            await pageFixture.page.locator("//input[@id = 'logout2']").isVisible();
            pageFixture.logger.info("Login is successful")

         });

        //  Given('click on the login link', async function () {

        //  });


        //  Given('user enters the Username as {string}', async function (string) {

        //  });


        //  Given('User enters the password as {string}', async function (string) {

        //  });

  
        //  When('Users clicks on the login button', async function () {

        //  });

        //  Then('Login should failed', async function () {

        //  });