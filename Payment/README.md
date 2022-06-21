# Payment - Surevelox.OrchardCore.Payment

The Payment module for [Orchard Core CMS](https://github.com/OrchardCMS/OrchardCore).

## Key Features

Features

- Stripe as Payment Provider
- Charge the credit card
- Refund the charge
- Sync transaction using web hooks

## Install

Add `Surevelox.OrchardCore.Payment` to your Orchard Core Web project

```bash

dotnet add package Surevelox.OrchardCore.Payment

```
## Enable Feature using recipe

Include in Setup Recipe to enable the feature by default.


```json
"steps": [
    {
      "name": "feature",
      "enable": [
        "Surevelox.OrchardCore.Payment"
      ]
    }
 ]
```


### Setup Payment

![Payment](https://raw.githubusercontent.com/surevelox/OrchardCore.Modules/master/Payment/images/screen-1.gif)

### Documentation

Read the [documentation here](https://surevelox.github.io/OrchardCore.Modules/)

## Feedback
See the [open issues](https://github.com/surevelox/OrchardCore.Modules/issues) for a list of proposed features and known issues.


## Like?  Support Us.

Like the the module? Support us by sponsoring  [Surevelox @ Github](https://github.com/sponsors/surevelox).  