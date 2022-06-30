# Device Preview
Device Preview Module 

## Install
To use Device Preview module, add package reference to Orchard Core host project.

#### Nuget Package

[Surevelox.OrchardCore.DevicePreview](https://www.nuget.org/packages/Surevelox.OrchardCore.DevicePreview)


#### Using .NET CLI

```dotnetcli
dotnet add package Surevelox.OrchardCore.Licensing --version 1.3.0
dotnet add package Surevelox.OrchardCore.DevicePreview --version 1.3.0
```
#### Using Package Reference in .csproj

```xml
<PackageReference Include="Surevelox.OrchardCore.Licensing" Version="1.3" />
<PackageReference Include="Surevelox.OrchardCore.DevicePreview" Version="1.3" />
```


## Features 

The Device Preview module has only one default feature. 

- Device Preview

### Device Preview
The default feature of Device Preview module. 

#### Manifest

|Property|Value|
|-|-|
|**Feature Name**|Device Preview|
|**Feature Id**|Surevelox.OrchardCore.DevicePreview|
|**Category**|Content Management|
|**Is Always Enabled**|No|
|**Default Tenant Only**|No|


#### Dependencies
|Depends on Feature| Feature ID |nuget package|
|-|-|-|
|[License Management](licensing)|Surevelox.OrchardCore.Licensing|[Surevelox.OrchardCore.Licensing](https://www.nuget.org/packages/Surevelox.OrchardCore.Licensing)|
|Contents|OrchardCore.Contents|[OrchardCore.Contents](https://www.nuget.org/packages/OrchardCore.Contents)|
|Preview|OrchardCore.ContentPreview|[OrchardCore.ContentPreview](https://www.nuget.org/packages/OrchardCore.ContentPreview)|
