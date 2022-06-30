# Payment
Payment Module 

## Install
To use Payment module, add package reference to Orchard Core host project.

#### Nuget Package

[Surevelox.OrchardCore.Payment](https://www.nuget.org/packages/Surevelox.OrchardCore.Payment)


#### Using .NET CLI

```dotnetcli
dotnet add package Surevelox.OrchardCore.Licensing --version 1.3.0
dotnet add package Surevelox.OrchardCore.Payment --version 1.3.0
```
#### Using Package Reference in .csproj

```xml
<PackageReference Include="Surevelox.OrchardCore.Licensing" Version="1.3" />
<PackageReference Include="Surevelox.OrchardCore.Payment" Version="1.3" />
```


## Features 

The Payment module has only one default feature. 

- Payments

### Payments
The default feature of Payment module. 

#### Manifest

|Property|Value|
|-|-|
|**Feature Name**|Payments|
|**Feature Id**|Surevelox.OrchardCore.Payment|
|**Category**|Commerce|
|**Is Always Enabled**|No|
|**Default Tenant Only**|No|


#### Dependencies
|Depends on Feature| Feature ID |nuget package|
|-|-|-|
|[License Management](licensing)|Surevelox.OrchardCore.Licensing|[Surevelox.OrchardCore.Licensing](https://www.nuget.org/packages/Surevelox.OrchardCore.Licensing)|