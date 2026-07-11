//import {test} from '@playwright/test';
import {test, expect} from '../utils/fixtures/pageFixtures';
/* import { LoginPage } from '../Pages/loginpage';
import { CartPage } from '../Pages/cartpage';   
import { InventoryPage } from '../Pages/inventorypage';
import { CheckoutPage } from '../Pages/checkoutPage'; 
import { LogoutPage } from '../Pages/logoutpage'; */
import {testconfig} from '../test.config';
import { DataProvider } from '../utils/dataProvider';


type PurchaseDetails = {


    sortValue: string;
primaryProductId: string
secondaryProductId : string
removeProductId : string

customer:
{
    firstName: string,
    lastName: string,
    postalCode: string
}
};



  
const purchaseFlow = DataProvider.getTestDatafromJson<PurchaseDetails>('testData/purchaseflow.json')


test('@regression  purchase flow', async({page, loginPage, inventoryPage, cartPage, checkoutPage, logoutPage}) => {

/* 
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const logoutPage = new LogoutPage(page); */

    await loginPage.openUrl();
    await loginPage.login(testconfig.username, testconfig.password);
    await inventoryPage.inventoryContainer()
    await inventoryPage.sortProducts(purchaseFlow.sortValue);
    await inventoryPage.addProductToCart1(purchaseFlow.primaryProductId);
    await inventoryPage.addProductToCart2(purchaseFlow.secondaryProductId);
    await inventoryPage.goToShoppingCart();
    await cartPage.cartListContainerValidation();
    await cartPage.removeProductFromCart(purchaseFlow.removeProductId);
    await cartPage.goToCheckout();
    
    await checkoutPage.fillCustomerDetails(purchaseFlow.customer.firstName, purchaseFlow.customer.lastName, purchaseFlow.customer.postalCode);
    await checkoutPage.Continue();
    await checkoutPage.validateTotalPrice();
    await checkoutPage.Finish();
    await checkoutPage.validateOrderConfirmation();
    await checkoutPage.BackToProducts();

    await logoutPage.openMenu();
    await logoutPage.logout();







})



