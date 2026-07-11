import {Locator, Page, expect} from '@playwright/test';
import { testconfig } from '../test.config';


export class InventoryPage {

    

    private readonly page: Page;

    //locators

    private readonly inventorycontainer: Locator;
    private readonly productSortContainer: Locator;
    private readonly shoppingCartLink: Locator;
    private readonly inventoryItems: Locator;
   


    constructor(page: Page) {

        this.page = page;
        this.inventorycontainer = this.page.locator('.inventory_container');
        this.productSortContainer = this.page.locator('.product_sort_container');
        this.shoppingCartLink = this.page.locator('.shopping_cart_link');
        this.inventoryItems = this.page.locator('.inventory_item');

    }


    async inventoryContainer()
    {
        await expect(this.inventorycontainer).toBeVisible();
        await expect(this.inventoryItems).toHaveCount(6);
        const inventoryItemTexts = await this.inventoryItems.allInnerTexts();
        return inventoryItemTexts;
        
    }   


    async sortProducts(sortOption: string)
    {
        await this.productSortContainer.selectOption(sortOption);
    }


    async addProductToCart1(productName1: string)
    {
        await this.page.locator(`[data-test="add-to-cart-${productName1}" ]`).click();

    }

        async addProductToCart2(productName2: string)
    {
        await this.page.locator(`[data-test="add-to-cart-${productName2}" ]`).click();

    }



    async goToShoppingCart()
    {
        await this.shoppingCartLink.click();
    }

}