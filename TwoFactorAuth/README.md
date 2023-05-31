# Two Factor Authentication - Surevelox.OrchardCore.TwoFactorAuth

Two factor authentication module for [Orchard Core CMS](https://github.com/OrchardCMS/OrchardCore). With two factor authentication (also known as 2-Step Verification ) add an extra layer of security to your orchard core and protect user accounts in event when password is compromised.

## Key Features

Supports
- Google Authenticator App
- Microsoft Authenticator App
- Login using recovery codes incase you don't have access to authenticator app


Supported ASP,NET Core Frameworks
- NET 7.0
- NET 6.0

## What's New 
- Supports OrchardCore CMS >= 1.6.0 with .NET 7 and .NET 6
- Supports OrchardCore CMS >= 1.3.0 and <= 1.5.0 with .NET 6


> If your Orchard Core deployment is running on Orchard Core CMS <= 1.2.2 then use version 1.2


## Install

Add `Surevelox.OrchardCore.TwoFactorAuth` to your Orchard Core CMS Web project



```bash

dotnet add package Surevelox.OrchardCore.TwoFactorAuth

```


## Enable Feature using recipe

Include in Setup Recipe to enable the feature by default.


```json
"steps": [
    {
      "name": "feature",
      "enable": [
        "Surevelox.OrchardCore.TwoFactorAuth"
      ]
    }
 ]
```

Or use Menu `Admin - Configuration - Features` in Admin UI and search for `Two Factor Authentication` and click `Enable`.

![Two Factor Authentication](https://raw.githubusercontent.com/surevelox/OrchardCore.Modules/master/TwoFactorAuth/images/screen-001.gif)

### Documentation

Read the [documentation here](https://surevelox.github.io/OrchardCore.Modules/)

## Feedback
See the [open issues](https://github.com/surevelox/OrchardCore.Modules/issues) for a list of proposed features and known issues.


## Like?  Support Us.

Like the Two Factor Authentication module? Support us by sponsoring  [Surevelox @ Github](https://github.com/sponsors/surevelox).  
