import {Page, expect, Locator} from '@playwright/test';
import { testconfig } from '../test.config';

export class LoginPage {

    private readonly page: Page;

    //locators

    private readonly txtUsername: Locator;
    private readonly txtPassword: Locator;
    private readonly btnLogin: Locator;
    private readonly lblErrorMessage: Locator;
    private readonly lblProductName: Locator;

    constructor(page: Page) {

        this.page = page;
        this.txtUsername = this.page.locator('[data-test="username"]');
        this.txtPassword = this.page.locator('[data-test="password"]');
        this.btnLogin = this.page.locator('[data-test="login-button"]');
        this.lblErrorMessage = this.page.locator('[data-test="error"]');
        this.lblProductName = this.page.locator('[data-test="product-title"]');


    }


    async openUrl()
    {
  //await this.page.goto(testconfig.Url);
  await this.page.goto('/');
    }


    async login(username: string, password: string) 
    {
        await this.txtUsername.fill(username);
        await this.txtPassword.fill(password);
        await this.btnLogin.click();
    }

    async logggedInUser()
    {
        
        await expect(this.lblProductName).toBeVisible();

    }



    async LoginErrorMessage()
    {
        await expect(this.lblErrorMessage).toBeVisible();
    }



}


