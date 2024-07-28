import {Given, When, Then } from "@cucumber/cucumber"
import { pageFixture} from "../../hooks/pageFixture"

Then('User lands on home', async function () {

    console.log("Hello ! i am on home page");
    await pageFixture.page.goto("https://www.w3schools.com1/");

  });

  Then('use see the home page icon', async function () {
      
    console.log("Hello! I can home page icon");

  });



  When('User clicks the logout button', async function () {

    console.log("Hello! I have clicked logged out button");

  });


  Then('user is logged out of application', async function () {

    console.log("Hello! I have logged out of application");

  });
