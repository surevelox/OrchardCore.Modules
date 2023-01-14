(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{379:function(e,t,n){e.exports=n.p+"assets/img/license-evaluation.18274c67.gif"},469:function(e,t,n){e.exports=n.p+"assets/img/tenant-pages-flow.cb637420.png"},470:function(e,t,n){e.exports=n.p+"assets/img/tenant-registration-enable.8cbfa9dd.gif"},471:function(e,t,n){e.exports=n.p+"assets/img/tenant-registration-blank.8f492329.png"},472:function(e,t,n){e.exports=n.p+"assets/img/tenant-registration-recipes.042915b7.png"},473:function(e,t,n){e.exports=n.p+"assets/img/tenant-registration-pages.0a0a5dcf.gif"},474:function(e,t,n){e.exports=n.p+"assets/img/tenant-signup.b93d8102.gif"},996:function(e,t,n){"use strict";n.r(t);var a=n(66),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_6-design-tenant-registration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-design-tenant-registration"}},[e._v("#")]),e._v(" 6. Design Tenant Registration")]),e._v(" "),a("h2",{attrs:{id:"objective"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[e._v("#")]),e._v(" Objective")]),e._v(" "),a("p",[e._v("In this section we will be installing and configuring the "),a("a",{attrs:{href:"/modules/hosting"}},[e._v("Hosting Module")]),e._v(" and enable the "),a("code",[e._v("Tenant Registration")]),e._v(" feature.")]),e._v(" "),a("p",[e._v("At the end of this section,  you will be adding the "),a("code",[e._v("Hosting")]),e._v(" module to your Orchard project and enabling the "),a("code",[e._v("Tenant Registration")]),e._v(" feature. Finally, a website users will be able to select the plan and sign-up for a website by providing their basic information like email and contact details in series of step pages. At the end of the sign-up process user gain access to the app.")]),e._v(" "),a("p",[a("img",{attrs:{src:n(469),alt:"Evaluation License key"}})]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Prerequisite")]),e._v(" "),a("p",[e._v("Note, all of Surevelox OrchardCore Modules are dependent on "),a("a",{attrs:{href:"/modules/licensing"}},[e._v("Licensing")]),e._v(" module and requires that "),a("code",[e._v("License Management")]),e._v(" feature is enabled.  If you have not already configured Licensing, follow "),a("a",{attrs:{href:"licensing"}},[e._v("Add License Management")]),e._v(" section.")])]),e._v(" "),a("h2",{attrs:{id:"install-hosting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-hosting"}},[e._v("#")]),e._v(" Install Hosting")]),e._v(" "),a("p",[e._v("From "),a("code",[e._v("workspaceroot")]),e._v(" navigate to "),a("code",[e._v("cookbook.web")]),e._v('. Using the ".net cli", add nuget package reference for Hosting module.')]),e._v(" "),a("p",[e._v("Run following command to add latest version of the Hosting Module.")]),e._v(" "),a("div",{staticClass:"language-dotnetcli line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd cookbook.web\ndotnet add package Surevelox.OrchardCore.Hosting\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("This will add the package reference to "),a("code",[e._v("cookbook.web.csproj")])]),e._v(" "),a("h2",{attrs:{id:"enable-tenant-registration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-tenant-registration"}},[e._v("#")]),e._v(" Enable Tenant Registration")]),e._v(" "),a("p",[e._v("Run the "),a("code",[e._v("cookbook.web")]),e._v(" application. While Logged in as administrator, go to the admin dashboard. Using the navigate menu go to "),a("code",[e._v("Configuration > Features")]),e._v('. In the search box, type "tenant registration". Next to the '),a("code",[e._v("Tenant Registration")]),e._v(" feature, click on Enable button to enable the feature.")]),e._v(" "),a("p",[a("img",{attrs:{src:n(470),alt:"Enable Tenant Registration"}})]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Evaluation License")]),e._v(" "),a("p",[e._v("It will also add evaluation license in "),a("code",[e._v("License Manager")]),e._v(" for the "),a("code",[e._v("Tenant Registration")]),e._v(" feature. Verify that evaluation license is added and it is validated and not expired.")])]),e._v(" "),a("p",[a("img",{attrs:{src:n(379),alt:"Evaluation License key"}})]),e._v(" "),a("p",[e._v("Once enabled, you will see new menu named "),a("code",[e._v("Multi Tenancy")]),e._v('. It will add out-of-the-box Tenant Registration Pages with one step "Finish". It will also add '),a("code",[e._v("Quick Start Recipes")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:n(471),alt:"Tenant Registration Blank"}})]),e._v(" "),a("p",[e._v("To configure "),a("code",[e._v("Registration Pages")]),e._v(", from the menu navigate to "),a("code",[e._v("Multi Tenancy > Settings > Registration Pages")]),e._v(". Here, the pages and registration flow can be customized.")]),e._v(" "),a("p",[e._v("Lets checkout tenant registration pages available out-of-box. To add out-of-the-box tenant registration flow from recipe, navigate to "),a("code",[e._v("Configuration > Recipes")]),e._v(". On the "),a("code",[e._v("Recipes")]),e._v(" page, under "),a("code",[e._v("Hosting")]),e._v(" heading, select and run recipe "),a("code",[e._v("Quick Start: Tenant Registration Pages (No payments)")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:n(472),alt:"Tenant Registration Recipe"}})]),e._v(" "),a("p",[e._v("The successful execution of the recipe will create registration pages as below screenshot.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Missing Core widgets?")]),e._v(" "),a("p",[e._v("If your "),a("code",[e._v("Default")]),e._v(" tenant is setup using SaaS recipe or any other setup recipe that dot not have core widgets content types like HTML, Liquid. Then you can create them by running recipe "),a("code",[e._v("Core Widgets")]),e._v(".")])]),e._v(" "),a("p",[a("img",{attrs:{src:n(473),alt:"Tenant Registration Pages"}})]),e._v(" "),a("p",[e._v("There are total four steps created by recipe"),a("code",[e._v("Quick Start: Tenant Registration Pages (No payments)")]),e._v(". Each step provides customizable flow widgets. The registration steps can be customized by adding/removing widgets and/or adding/removing steps.")]),e._v(" "),a("ul",[a("li",[e._v("Account\n"),a("ul",[a("li",[e._v("Captures site details and admin credentials, admin's email and RecipeName from query string.")])])]),e._v(" "),a("li",[e._v("Verify\n"),a("ul",[a("li",[e._v("Verifies the email address provided in Account Step.("),a("strong",[e._v("Note")]),e._v(": This steps sends verification code via Email and requires that you have email settings are configured properly.)")])])]),e._v(" "),a("li",[e._v("Personal\n"),a("ul",[a("li",[e._v("Captures personal details like First Name, Last Name, Contact Details.")])])]),e._v(" "),a("li",[e._v("Finish (Review)\n"),a("ul",[a("li",[e._v("Review and Finish")])])])]),e._v(" "),a("p",[e._v("More steps can be added by clicking (+) Icon or steps can be deleted to customize sign up flow.")]),e._v(" "),a("p",[e._v("Now, let's verify verify How end-user will sign-up by selecting a plan, follow sign-up process and provision their tenant.")]),e._v(" "),a("p",[e._v("While application is running, navigate to "),a("code",[e._v("Pricing")]),e._v(" page, select the plan and follow signup process.")]),e._v(" "),a("p",[a("img",{attrs:{src:n(474),alt:"Tenant Sign-up"}})]),e._v(" "),a("p",[e._v("Congratulations! You have added tenant sign-up process in your website and tenant provisioning according to selected plan,")]),e._v(" "),a("p",[e._v("What's Next")]),e._v(" "),a("p",[e._v("Go to next section "),a("RouterLink",{attrs:{to:"/guide/cookbook/tenant-billing.html"}},[e._v("Design Tenant Billing")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=i.exports}}]);