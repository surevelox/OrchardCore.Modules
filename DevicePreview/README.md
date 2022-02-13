# Device Preview - Surevelox.OrchardCore.DevicePreview

Device Preview module for Orchard Core CMS. This module adds an ability to see live preview for different devices while editing content item.

Supported ASP,NET Core Frameworks
- NET 6.0
- NET 5.0
- NET Core 3.1

Supported Device Sizes:
- Mobile: 375 X 667
- Tablet: 768 X 1024
- Laptop: 1280 X 800
- Desktop: 1920 X 1200

Supported orientation:
- Landscape
- Portrait

## What's New 
- Supports OrchardCore CMS >= 1.2.0
- Added support for .NET 6
- and Bug fixes


## Install

Add `Surevelox.OrchardCore.DevicePreview` to your Orchard Core CMS Web project



```bash

dotnet add package Surevelox.OrchardCore.DevicePreview

```


## Enable Feature using recipe

Include in Setup Recipe to enable the feature by default.


```json
"steps": [
    {
      "name": "feature",
      "enable": [
        "Surevelox.OrchardCore.DevicePreview"
      ]
    }
 ]
```

Or use Menu `Admin - Configuration - Features` in Admin UI and search for `Device Preview` and click `Enable`.

<img src="https://raw.githubusercontent.com/surevelox/OrchardCore.Modules/master/DevicePreview/images/screen-1.gif" width="100%">

## Like?  Support Us.

Like the Device Preview module? Support us by sponsoring  [Surevelox @ Github](https://github.com/sponsors/surevelox).  