# Device Preview - Surevelox.OrchardCore.DevicePreview

>**What's New in 1.0.0**<br/> 
>Supports OrchardCore CMS >= 1.0.0<br/>
>Added Support for OrchardCore Admin Dark mode.<br>


## Install

Add `Surevelox.OrchardCore.DevicePreview` to your OrchardCore Web project



```bash

dotnet add package Surevelox.OrchardCore.DevicePreview

```


## Enable Feature 

Include in your Recipe to enable the feature by default


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


<img src="images/screen-1.gif" width="100%">

## Like?  Support Us.

Like the Device Preview module? Support us by sponsoring  [Surevelox @ Github](https://github.com/sponsors/surevelox).  