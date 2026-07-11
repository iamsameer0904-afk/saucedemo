# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SauceDemo.spec.ts >> @regression  purchase flow
- Location: tests\SauceDemo.spec.ts:33:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('[data-test="add-to-cart-Sauce-labs-onesie" ]')

```

# Test source

```ts
  1  | import {Locator, Page, expect} from '@playwright/test';
  2  | import { testconfig } from '../test.config';
  3  | 
  4  | 
  5  | export class InventoryPage {
  6  | 
  7  |     
  8  | 
  9  |     private readonly page: Page;
  10 | 
  11 |     //locators
  12 | 
  13 |     private readonly inventorycontainer: Locator;
  14 |     private readonly productSortContainer: Locator;
  15 |     private readonly shoppingCartLink: Locator;
  16 |     private readonly inventoryItems: Locator;
  17 |    
  18 | 
  19 | 
  20 |     constructor(page: Page) {
  21 | 
  22 |         this.page = page;
  23 |         this.inventorycontainer = this.page.locator('.inventory_container');
  24 |         this.productSortContainer = this.page.locator('.product_sort_container');
  25 |         this.shoppingCartLink = this.page.locator('.shopping_cart_link');
  26 |         this.inventoryItems = this.page.locator('.inventory_item');
  27 | 
  28 |     }
  29 | 
  30 | 
  31 |     async inventoryContainer()
  32 |     {
  33 |         await expect(this.inventorycontainer).toBeVisible();
  34 |         await expect(this.inventoryItems).toHaveCount(6);
  35 |         const inventoryItemTexts = await this.inventoryItems.allInnerTexts();
  36 |         return inventoryItemTexts;
  37 |         
  38 |     }   
  39 | 
  40 | 
  41 |     async sortProducts(sortOption: string)
  42 |     {
  43 |         await this.productSortContainer.selectOption(sortOption);
  44 |     }
  45 | 
  46 | 
  47 |     async addProductToCart1(productName1: string)
  48 |     {
> 49 |         await this.page.locator(`[data-test="add-to-cart-${productName1}" ]`).click();
     |                                                                               ^ Error: locator.click: Target page, context or browser has been closed
  50 | 
  51 |     }
  52 | 
  53 |         async addProductToCart2(productName2: string)
  54 |     {
  55 |         await this.page.locator(`[data-test="add-to-cart-${productName2}" ]`).click();
  56 | 
  57 |     }
  58 | 
  59 | 
  60 | 
  61 |     async goToShoppingCart()
  62 |     {
  63 |         await this.shoppingCartLink.click();
  64 |     }
  65 | 
  66 | }
```