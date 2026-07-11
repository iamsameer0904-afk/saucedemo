import {Locator, expect, Page} from "@playwright/test";

export class LogoutPage {

    private readonly page: Page;

    //locators  

    private readonly btnMenu: Locator;
    private readonly btnLogout: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnMenu = this.page.locator('#react-burger-menu-btn');
        this.btnLogout = this.page.locator('#logout_sidebar_link')

    }


    async openMenu()
    {
        await this.btnMenu.click();
    }

    async logout()
    {
       
        await this.btnLogout.click();
    }

}