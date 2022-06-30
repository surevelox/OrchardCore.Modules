# Getting Started

Getting started with Surevelox OrchardCore Modules is easy. All modules published on nuget are fully functional and free to evaluate in non-commercial environment. However these packages are protected by evaluation license. The trial is valid for 30 days. 

To install a module you need to 

- Create new OrchardCore Host project or use existing. 
- Add Nuget package reference of module you want to use.
- Add Nuget package reference of dependent modules.
- Enable features via recipe or Feature management UI. 

## Create

If you already have Orchard Core host project, proceed to `Install` otherwise create OrchardCore CMS host project using Orchard Core templates a following

```dotnetcli
dotnet new occms
```

To learn more about [Orchard Core code generation templates](https://docs.orchardcore.net/en/latest/docs/getting-started/templates/)  read the docs. 

## Install

To install and consume any of the Surevelox Orchard module is to add nuget reference to Orchard Core host project.

### Using .NET CLI

```dotnetcli
dotnet add package [Module] --version [version]
```
Replace the [Module] with nuget package. For example to install `DevicePreview` module run following command

```dotnetcli
dotnet add package Surevelox.OrchardCore.Licensing --version 1.3
```

### Using Package Reference in .csproj

```xml
<PackageReference Include="[Module]" Version="[version]" />
```

Replace the `[Module]` and `[version]` with nuget package and version of module you are installing. 
For example to install `DevicePreview` 


```xml
<PackageReference Include="Surevelox.OrchardCore.DevicePreview" Version="1.3" />
```

## Enable 

### Using Feature Management UI

To enable the features, login as administrator. In Admin dashboard, from left navigation menu, select `Configuration > Features` and navigate to feature management UI. Search for the feature by name( e.g. Device Preview ) you want to enable and click Enable button.

### Using Recipe Step

Add `feature` recipe step with features you want to enable, e.g. to enable `DevicePreview` feature in recipe use following.

```json
{
    "name" : "feature",
    "enable": [
        "Surevelox.OrchardCore.DevicePreview"
    ]
}
```

To learn more about [Orchard Core Recipes](https://docs.orchardcore.net/en/latest/docs/reference/modules/Recipes/) read the docs. 

