# 3. Configure Payments

## Objective

In this section we will be installing and configuring the [Payment Module](/modules/payment) and enable the `Payments` feature.  

Note that All Surevelox OrchardCore Modules are dependent on [Licensing](/modules/licensing) module and requires that `License Management` feature is enabled.  If you have not already configured Licensing, follow [Add License Management](licensing) section.

At the end of this section you will have `Payment` module installed and have `Payments` feature enabled and you can configure your [Stripe](https://stripe.com) settings for Test and Production.

## Install Payment

From `workspaceroot` navigate to `cookbook.web` and using .net cli install nuget package reference for payment module.

Run following command to install latest version of Payment Module.

```dotnetcli
cd cookbook.web
dotnet add package Surevelox.OrchardCore.Payment
```
This will add the package reference to `cookbook.web.csproj`


## Enable Payments

Run the `cookbook.web` application, Login into admin dashboard and open `Configuration -> Features`. Search for "payment" and Enable the `Payments` feature.

![Enable Payments](./images/payment-enable.gif)

Once enabled, you will see new menu `Finances`. It will also add evaluation license in `License Manager` for the `Payments` feature. Verify that evaluation license is added and it's validated  not expired.

![Evaluation License key](./images/license-evaluation.gif)

Click and it expand open `Stripe` menu. Click on `Stripe` to open stripe configuration and save your Keys for `Test` 

![Payments](./images/payment-success.gif)

::: tip
To get keys from [Stripe](https://stripe.com), Login into stripe dashboard and enable test mode. 
- Go to `Developers > API Key` and take Token for `Publishable key` and `Secret key`.
- Go to `Developers > Webhooks` and Click button `Test in Local Environment` and follow instruction to get Webhooks' `endpointSecret`.
:::
 


Congratulations! You have completed Configuring Payments. 

What's Next
 
- Go to next section [Design Plan and Recipes](plan-recipes). OR
- Read more about [Payment](/modules/payment)
