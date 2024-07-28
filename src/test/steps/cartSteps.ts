 
   import {When, Then} from "@cucumber/cucumber"    
import { expect } from "@playwright/test";

         Then('User chosse product to be added to cart', async function () {

            console.log("Hello! I am selecting product");
            
;
         });

         Then('use click on add to cart button', async function () {

            console.log("Hello! I have clicked the add to cart button");
;
         });

         When('User clicks on the checkout button', async function () {

            console.log("Hello! I have clicked the checkout button");
;
         });

         Then('user should be directed to summary of product page', async function (){

            console.log("Hello! I am on summary page");
;
         });
