# Two Factor Authentication - Surevelox.OrchardCore.TwoFactorAuth

Two factor authentication module for Orchard Core CMS. With two factor authentication (also known as 2-Step Verification ) add an extra layer of security to your orchard core and protect user accounts in event when password is compromised.

Supports
- Google Authenticator App
- Microsoft Authenticator App
- Supports login with recovery codes


Supported ASP,NET Core Frameworks
- NET 6.0
- NET 5.0
- NET Core 3.1


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

Or use Menu `Admin - Configuration - Features` in Admin UI and search for `Two Factor Auth` and click `Enable`.

<img src="https://raw.githubusercontent.com/surevelox/OrchardCore.Modules/master/TwoFactorAuth/images/screen-001.gif" width="100%">

## Like?  Support Us.

Like the Two Factor Auth module? Support us by sponsoring  [Surevelox @ Github](https://github.com/sponsors/surevelox).  