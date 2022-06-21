# Licensing - Surevelox.OrchardCore.Licensing

The Licensing module for [Orchard Core CMS](https://github.com/OrchardCMS/OrchardCore).

**For Orchard Core module consumers**

Manage all your module/feature license keys for module orchard core module that you purchased from orchard core module vendor.

**For Module vendors**

Build your module with license and let your customer use this module to manage their licenses for your module.

## Key Features

Features

- Manage License keys using Admin Panel
- Provides API to module vendor to implement license in their own module.

## Install

Add `Surevelox.OrchardCore.Licensing` to your Orchard Core Web project

```bash

dotnet add package Surevelox.OrchardCore.Licensing

```

## Enable Feature using recipe

Include in Setup Recipe to enable the feature by default.


```json
"steps": [
    {
      "name": "feature",
      "enable": [
        "Surevelox.OrchardCore.Licensing"
      ]
    }
 ]
```


### License management

![License management](https://raw.githubusercontent.com/surevelox/OrchardCore.Modules/master/Licensing/images/screen-1.gif)

### Add Licensing support in your module

#### 1. Implement `ILicenseHandler` 
Implement `CanHandle` and `Handle` method, this method is called when user adds license key in Admin UI.

```cs
    internal class LicenseHandler : ILicenseHandler
    {
         public bool CanHandle(string licenseKey)
        {
            return true;
        }
        public void Handle(LicenseValidationContext context,
            out LicenseStatus? status, out string id, out DateTime? issuedUtc, out DateTime? expiresUtc,
            out Dictionary<string, object> policies)
        {
            var key = context.LicenseKey;

            // Add your own logic to see if the license key is belong to your module
            // For example using microsoft standard licensing
            LicenseManager.CurrentContext = context;
            var license = LicenseManager.Validate(typeof(MyLicensedClass));
            var canhandle = (license != null);
            if (canhandle)
            {
                // get the license and polices from encrypted license file 
                status = LicenseStatus.Valid;
                // Read from your license
                issuedUtc = license.IssuedOn;
                // Read from your license 
                expiredUtc = license.ExpiresOn;
                // add your feature list 
                features = policies["features"];
                id = "lic/my-product/" + license.Id;
            }
            else
            {
                // If key is unknown to this validator 
                id = null;
                status = null;
                createdUtc = null;
                expiredUtc = null;
                features = new string[] { };
            }
        }
    
    }
```

#### 2. Register `ILicenseHandler` in startup 

```cs
     services.AddOrchardCms()
                .ConfigureServices( svc=>
                {
                    svc.AddScoped<ILicenseHandler, LicenseHandler>();
                });
```
### Documentation

Read the [documentation here](https://surevelox.github.io/OrchardCore.Modules/)

## Feedback
See the [open issues](https://github.com/surevelox/OrchardCore.Modules/issues) for a list of proposed features and known issues.


## Like?  Support Us.

Like the the module? Support us by sponsoring  [Surevelox @ Github](https://github.com/sponsors/surevelox).  