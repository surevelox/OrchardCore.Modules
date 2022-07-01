# 2. Add License Management

## Objective

In this section we will be installing the [Licensing Module](/modules/licensing) and enable the `License Management` feature.
Note, all of Surevelox OrchardCore Modules are dependent on `Licensing` and requires that `License Management` feature is enabled.

At the end of this section, you will be adding the `Licensing` module to your Orchard project and enabling the `License Management` feature.

## Install Licensing

From `workspaceroot` navigate to `cookbook.web`. Using the ".net cli", add nuget package reference for Licensing module.

Run following command to add latest version of the Licensing Module.

```dotnetcli
cd cookbook.web
dotnet add package Surevelox.OrchardCore.Licensing
```
This will add the package reference to `cookbook.web.csproj`


## Enable License Management

Run the `cookbook.web` application. While Logged in as administrator, go to the admin dashboard. Using the navigate menu go to `Configuration > Features`. In the search box, type "licensing". Next to the `License Management` feature, click on Enable button to enable the feature.

![Enable  License Management](./images/licensing-enable.gif)

Once enabled, you will see new menu `Configuration >  License Manager`. Click on it to verify that it's installed successfully.

![ License Management ](./images/licensing-success.gif)

Congratulations! You have completed Adding License Management. 

What's Next
 
- Go to next section [Configure Payment](Payment). OR
- Read more about [Licensing](/modules/licensing)




