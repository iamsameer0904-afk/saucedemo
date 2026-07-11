import {test, expect, Page} from "@playwright/test";
import { LoginPage } from "../Pages/loginpage";
import { CartPage } from "../Pages/cartpage";
import {InventoryPage} from "../Pages/inventorypage";
import { CheckoutPage } from "../Pages/checkoutPage";
import { LogoutPage } from "../Pages/logoutpage";
import { testconfig } from "../test.config";


type CartProduct = {

    productId: string;
       productName: string;

}


type CartProductList = {

    products: CartProduct[];    

}



