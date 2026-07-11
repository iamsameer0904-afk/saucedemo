import {expect, test, Page} from "@playwright/test";
import { InventoryPage } from "../Pages/inventorypage";
import { LoginPage } from "../Pages/loginpage";
import { CartPage } from "../Pages/cartpage";
import { CheckoutPage } from "../Pages/checkoutPage";
import { LogoutPage } from "../Pages/logoutpage";
import { testconfig } from "../test.config";

let currentPage: Page;
let loginPage: LoginPage;
let inventoryPage: InventoryPage;

    

test.beforeEach(async ({ page }) => {

currentPage = page;
loginPage = new LoginPage(page);
inventoryPage = new InventoryPage(page);

await loginPage.openUrl();

})

test.afterEach(async ({page}) => {

    await page.close();

})



test('@Sanity @smoke login with valid credentials', async() =>
{

     await loginPage.login(testconfig.username, testconfig.password);

     await inventoryPage.inventoryContainer();
     await expect(currentPage).toHaveURL("https://www.saucedemo.com/inventory.html");

})



test('@Sanity @smoke login with Invalid credentials', async() =>
{

     await loginPage.login(testconfig.InvalidUsername, testconfig.InvalidPassword);

   await loginPage.LoginErrorMessage();

})