/*
fixtures

Defauly playwright fixtures can be found here: https://playwright.dev/docs/test-fixtures

Page  - (separate tab/page) Isolated page for this test run.
context - (incognito mode) Isolated context for this test run. The page fixture belongs to this context as well.
browser -   Browsers are shared across tests to optimize resource
browserName - The name of the browser being used for this test run. (chromium, firefox, webkit)

*/


import {test as base} from '@playwright/test';
import { LoginPage } from '../../Pages/loginpage';
import { InventoryPage } from '../../Pages/inventorypage';
import { CartPage } from '../../Pages/cartpage';
import { CheckoutPage } from '../../Pages/checkoutPage';
import { LogoutPage } from '../../Pages/logoutpage';


type Pages = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    logoutPage: LogoutPage;
};


export const test =base.extend<Pages>({

    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    inventoryPage: async ({page}, use) => { 
        await use(new InventoryPage(page));
    },
    cartPage: async ({page}, use) => {
        await use(new CartPage(page));
    } ,
    checkoutPage: async ({page}, use) => {
        await use(new CheckoutPage(page));
    },
    logoutPage: async ({page}, use) => {
        await use(new LogoutPage(page));
    }

});

export {expect} from '@playwright/test';

