import { Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";


export default class RegisterPage{
      private base: PlaywrightWrapper;
      constructor(private page: Page){ 
        this.base = new PlaywrightWrapper(page)
      }

}