---
moduleVersion : '1.4.0'
---
# Hosting
Hosting module 

## Install
To use Hosting module, add package reference to Orchard Core host project.

#### Nuget Package

[Surevelox.OrchardCore.Hosting](https://www.nuget.org/packages/Surevelox.OrchardCore.Hosting)


#### Using .NET CLI

```dotnetcli
dotnet add package Surevelox.OrchardCore.Licensing --version 1.3.0
dotnet add package Surevelox.OrchardCore.Payment --version 1.3.0
dotnet add package Surevelox.OrchardCore.Hosting --version 1.3.0
```
#### Using Package Reference in .csproj

```xml
<PackageReference Include="Surevelox.OrchardCore.Licensing" Version="1.3" />
<PackageReference Include="Surevelox.OrchardCore.Payment" Version="1.3" />
<PackageReference Include="Surevelox.OrchardCore.Hosting" Version="1.3" />
```


## Features 

The hosting module provides following features 

- Hosting
- Tenant Registration
- Tenant Billing

### Hosting 
The default feature of Hosting module. The default feature is only available in default tenant (host tenant). Once enabled hosting module can not be disabled.

#### Manifest

|Property|Value|
|-|-|
|**Feature Id**|Hosting|
|**Feature Id**|Surevelox.OrchardCore.Hosting|
|**Category**|Infrastructure|
|**Is Always Enabled**|Yes|
|**Default Tenant Only**|Yes|


#### Dependencies
|Depends on Feature| Feature ID |nuget package|
|-|-|-|
|[License Management](licensing)|Surevelox.OrchardCore.Licensing|[Surevelox.OrchardCore.Licensing](https://www.nuget.org/packages/Surevelox.OrchardCore.Licensing)|


### Tenant Registration

Tenant Registration feature is useful feature for hosting service providers. This module is only available to default tenant (host tenant). It provides ability to build and design registration pages and allows website user's to self register as tenant.  

#### Manifest

|Property|Value|
|-|-|
|**Name**|Tenant Registration|
|**Feature Id**|Surevelox.OrchardCore.Hosting.TenantRegistration|
|**Category**|Multi Tenancy|
|**Is Always Enabled**|No|
|**Default Tenant Only**|Yes|


#### Dependencies
|Depends on Feature| Feature ID |nuget package|
|-|-|-|
|Hosting|Surevelox.OrchardCore.Hosting|[Surevelox.OrchardCore.Hosting](#nuget-package)|
|Tenants|OrchardCore.Tenants| [OrchardCore.Tenants](https://www.nuget.org/packages/OrchardCore.Tenants) |
|Email|OrchardCore.Email| [OrchardCore.Email](https://www.nuget.org/packages/OrchardCore.Email) |
|Forms|OrchardCore.Forms| [OrchardCore.Forms](https://www.nuget.org/packages/OrchardCore.Forms) |
|Flows|OrchardCore.Flows| [OrchardCore.Flows](https://www.nuget.org/packages/OrchardCore.Flows) |


### Tenant Billing

#### Manifest

|Property|Value|
|-|-|
|**Name**|Tenant Billing|
|**Feature Id**|Surevelox.OrchardCore.Hosting.TenantRegistration.Payment|
|**Category**|Multi Tenancy|
|**Is Always Enabled**|No|
|**Default Tenant Only**|Yes|


#### Dependencies

|Depends on Feature| Feature ID |nuget package|
|----|---|-|
|[Tenant Registration](#tenant-registration)|Surevelox.OrchardCore.Hosting.TenantRegistration| [Surevelox.OrchardCore.Hosting](#nuget-package) |
|[Payment](payment)|Surevelox.OrchardCore.Payment | [Surevelox.OrchardCore.Payment](https://www.nuget.org/packages/Surevelox.OrchardCore.Payment)|

