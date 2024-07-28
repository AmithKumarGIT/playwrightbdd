import { When, Then} from "@cucumber/cucumber"
       

         Then('User clicks on payment button', async function () {

            console.log("Hello! I clicked on the payment button");

         });

         Then('use choose the mode of payment', async function () {

            console.log("Hello! I choosed mode of payment");

         });

         When('User makes the payment', async function () {

            console.log("Hello! I made payment");

         });


         Then('order is submitted', async function () {

            console.log("Hello! order is submitted");

         });