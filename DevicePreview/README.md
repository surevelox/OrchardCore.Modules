# Device Preview - Surevelox.OrchardCore.DevicePreview

Device Preview module for [Orchard Core CMS](https://github.com/OrchardCMS/OrchardCore). This module adds an ability to see live preview for different devices while editing content item.

## Key Features

Supported Device Sizes:
- Mobile: 375 X 667
- Tablet: 768 X 1024
- Laptop: 1280 X 800
- Desktop: 1920 X 1200

Supported orientation:
- Landscape
- Portrait

Supported ASP,NET Core Frameworks
- NET 8.0

## What's New 
- Supports OrchardCore CMS >= 1.8.0 with .NET 8
 
> If your Orchard Core deployment is running on Orchard Core CMS <= 1.7 then use previous version.


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

![Device Preview](https://raw.githubusercontent.com/surevelox/OrchardCore.Modules/master/DevicePreview/images/screen-1.gif)

### Documentation

Read the [documentation here](https://surevelox.github.io/OrchardCore.Modules/)

## Feedback
See the [open issues](https://github.com/surevelox/OrchardCore.Modules/issues) for a list of proposed features and known issues.


## Like?  Support Us.

Like the Device Preview module? Support us by sponsoring  [Surevelox @ Github](https://github.com/sponsors/surevelox).  