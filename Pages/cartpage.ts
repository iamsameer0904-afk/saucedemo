import { expect, Page, Locator } from "@playwright/test";

export class CartPage {

    private readonly page: Page;

    //locators

    private readonly cartList: Locator;
    private readonly checkOutButton: Locator

    constructor(page: Page) {

        this.page = page;
        this.cartList = this.page.locator('.cart_list');
        this.checkOutButton = this.page.locator('[data-test="checkout"]');

    }

    async cartListContainerValidation()
    {
        await expect(this.cartList).toBeVisible();
    }

    async removeProductFromCart(productName: string)
    {
        await this.page.locator(`[data-test="remove-${productName}"]`).click();
    }

    async goToCheckout()
    {
        await this.checkOutButton.click();
    }

}
