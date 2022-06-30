# Two Factor Authentication
Two Factor Authentication Module 

## Install
To use Two Factor Authentication module, add package reference to Orchard Core host project.

#### Nuget Package

[Surevelox.OrchardCore.TwoFactorAuth](https://www.nuget.org/packages/Surevelox.OrchardCore.TwoFactorAuth)


#### Using .NET CLI

```dotnetcli
dotnet add package Surevelox.OrchardCore.Licensing --version 1.3.0
dotnet add package Surevelox.OrchardCore.TwoFactorAuth --version 1.3.0
```
#### Using Package Reference in .csproj

```xml
<PackageReference Include="Surevelox.OrchardCore.Licensing" Version="1.3" />
<PackageReference Include="Surevelox.OrchardCore.TwoFactorAuth" Version="1.3" />
```


## Features 

The Two Factor Authentication module has only one default feature. 

- Two Factor Authentication

### Two Factor Authentication
The default feature of Two Factor Authentication module. 

#### Manifest

|Property|Value|
|-|-|
|**Feature Name**|Two Factor Authentication|
|**Feature Id**|Surevelox.OrchardCore.TwoFactorAuth|
|**Category**|Security|
|**Is Always Enabled**|No|
|**Default Tenant Only**|No|


#### Dependencies
|Depends on Feature| Feature ID |nuget package|
|-|-|-|
|[License Management](licensing)|Surevelox.OrchardCore.Licensing|[Surevelox.OrchardCore.Licensing](https://www.nuget.org/packages/Surevelox.OrchardCore.Licensing)|
|Users|OrchardCore.Users|[OrchardCore.Users](https://www.nuget.org/packages/OrchardCore.Users)|
