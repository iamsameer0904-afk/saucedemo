import 'dotenv/config'
export class TestConfig
 {
   
   Url = process.env.BASE_URL ?? 'https://www.saucedemo.com/';



      //Url = process.env.BASE_URL ?? '';
   
   // Url = "https://www.saucedemo.com/";



    //valid credentials

   //username = 'standard_user';
   username = process.env.STANDARD_USERNAME ?? '';

   
   //password = 'secret_sauce';
   password  = process.env.PASSWORD ?? '';

//InvalidUsername = 'standard_use1r';
   InvalidUsername = process.env.INVALID_USERNAME ?? '';

  // InvalidPassword = 'secret_sauc1e';
   InvalidPassword = process.env.INVALID_PASSWORD ?? '';





}



export const testconfig = new TestConfig()






