# Introduction

Surevelox OrchardCore Modules is a collection of Premium modules for [Orchard Core](https://orchardcore.net/). Each module is distributed as [nuget package](https://www.nuget.org/packages?q=surevelox). To use these modules 
1. Add package reference to your Orchard Core ASP.NET application 
2. Enable the features either using recipe or using Feature management UI.

To learn more about Orchard Core using nuget packages, you can read more on [orchard core documentation](https://docs.orchardcore.net/en/latest/docs/getting-started/)


## Module

Modules are independently developed extension. A module is not a functional component on its own. It is composed of one or more functional component that extends the core features and functionality of Orchard Core. Orchard Core Modules bundled and distributed as nuget package. They can be easily added or removed via package reference the host project. 
 

## Feature

Features are functional component of a Module. A module can have one or more features. If a module doesn't have any explicit features defined, it will have an implicit feature as module name. These feature can be enabled or disabled independently. Additionally, a feature can have dependency on other features. Enabling feature will also enable dependent features.

## Theme

Theme is like module, however, views on theme has higher priority then views in a module. Theme can be designated either site theme (front-end) or admin theme. Unlike features, only one theme can be active at a time (a theme for front-end and another for admin).
