import {expect, Locator, Page} from "@playwright/test";



export class CheckoutPage {

    private readonly page: Page;

    //locators  

    private readonly txtfirstName: Locator;
    private readonly txtlastName: Locator;
    private readonly txtpostalCode: Locator;
    private readonly continueButton: Locator;
    private readonly lblTotalPrice: Locator;
    private readonly finishButton: Locator;
    private readonly lblOrderConfirmation: Locator;
    private readonly lblOrderConfirmationText: Locator;
    private readonly btnBackToProducts: Locator;



    constructor(page: Page) {

        this.page = page;
        this.txtfirstName = this.page.locator('[data-test="firstName"]');
        this.txtlastName = this.page.locator('[data-test="lastName"]');
        this.txtpostalCode = this.page.locator('[data-test="postalCode"]');
        this.continueButton = this.page.locator('[data-test="continue"]');
        this.lblTotalPrice = this.page.locator('.summary_total_label');
        this.finishButton = this.page.locator('[data-test="finish"]');
        this.lblOrderConfirmation = this.page.locator('.complete-header');
        this.lblOrderConfirmationText = this.page.locator('.complete-text');
        this.btnBackToProducts = this.page.locator('[data-test="back-to-products"]');
    }


 async fillCustomerDetails(firstName: string, lastName: string, postalCode: string)
{
await this.txtfirstName.fill(firstName);
await this.txtlastName.fill(lastName);
await this.txtpostalCode.fill(postalCode);
}

async Continue()
{
    await this.continueButton.click();
}


async validateTotalPrice()
{
  await expect(this.lblTotalPrice).toBeVisible();
}


async Finish()
{
    await this.finishButton.click();
}


async validateOrderConfirmation()
{
    await expect(this.lblOrderConfirmation).toBeVisible();
    await expect(this.lblOrderConfirmationText).toBeVisible();
}


async BackToProducts()
{
    await this.btnBackToProducts.click();

}


}
