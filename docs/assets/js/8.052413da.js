(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{384:function(e,t,a){e.exports=a.p+"assets/img/license-evaluation.18274c67.gif"},463:function(e,t,a){e.exports=a.p+"assets/img/payment-enable.5ec00d11.gif"},464:function(e,t,a){e.exports=a.p+"assets/img/payment-success.53e80c16.gif"},987:function(e,t,a){"use strict";a.r(t);var n=a(66),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"_3-configure-payments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-configure-payments"}},[e._v("#")]),e._v(" 3. Configure Payments")]),e._v(" "),n("h2",{attrs:{id:"objective"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[e._v("#")]),e._v(" Objective")]),e._v(" "),n("p",[e._v("In this section we will be installing and configuring the "),n("a",{attrs:{href:"/modules/payment"}},[e._v("Payment Module")]),e._v(" and enable the "),n("code",[e._v("Payments")]),e._v(" feature.")]),e._v(" "),n("p",[e._v("Note, all of Surevelox OrchardCore Modules are dependent on "),n("a",{attrs:{href:"/modules/licensing"}},[e._v("Licensing")]),e._v(" module and requires that "),n("code",[e._v("License Management")]),e._v(" feature is enabled.  If you have not already configured Licensing, follow "),n("a",{attrs:{href:"licensing"}},[e._v("Add License Management")]),e._v(" section.")]),e._v(" "),n("p",[e._v("At the end of this section, you will be adding the "),n("code",[e._v("Payment")]),e._v(" module to your Orchard project and enabling the "),n("code",[e._v("Payments")]),e._v(" feature. Finally, you will be able to configure your "),n("a",{attrs:{href:"https://stripe.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stripe"),n("OutboundLink")],1),e._v(" settings for Test and Production.")]),e._v(" "),n("h2",{attrs:{id:"install-payment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install-payment"}},[e._v("#")]),e._v(" Install Payment")]),e._v(" "),n("p",[e._v("From "),n("code",[e._v("workspaceroot")]),e._v(" navigate to "),n("code",[e._v("cookbook.web")]),e._v('. Using the ".net cli", add nuget package reference for Payment module.')]),e._v(" "),n("p",[e._v("Run following command to add latest version of the Payment Module.")]),e._v(" "),n("div",{staticClass:"language-dotnetcli line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cd cookbook.web\ndotnet add package Surevelox.OrchardCore.Payment\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("This will add the package reference to "),n("code",[e._v("cookbook.web.csproj")])]),e._v(" "),n("h2",{attrs:{id:"enable-payments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enable-payments"}},[e._v("#")]),e._v(" Enable Payments")]),e._v(" "),n("p",[e._v("Run the "),n("code",[e._v("cookbook.web")]),e._v(" application. While Logged in as administrator, go to the admin dashboard. Using the navigate menu go to "),n("code",[e._v("Configuration > Features")]),e._v('. In the search box, type "payment". Next to the '),n("code",[e._v("Payments")]),e._v(" feature, click on Enable button to enable the feature.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(463),alt:"Enable Payments"}})]),e._v(" "),n("p",[e._v("Once enabled, you will see new menu named "),n("code",[e._v("Finances")]),e._v(". It will also add evaluation license in "),n("code",[e._v("License Manager")]),e._v(" for the "),n("code",[e._v("Payments")]),e._v(" feature. Verify that evaluation license is added and it is validated and not expired.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(384),alt:"Evaluation License key"}})]),e._v(" "),n("p",[e._v("To configure "),n("code",[e._v("Stripe")]),e._v(" integration, from the menu navigate to "),n("code",[e._v("Finances > Payment Providers > Stripe")]),e._v(". Here, provide your Stripe keys.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(464),alt:"Payments"}})]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("To get keys from "),n("a",{attrs:{href:"https://stripe.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stripe"),n("OutboundLink")],1),e._v(", Login into stripe dashboard and enable test mode.")]),e._v(" "),n("ul",[n("li",[e._v("Go to "),n("code",[e._v("Developers > API Key")]),e._v(" and take Token for "),n("code",[e._v("Publishable key")]),e._v(" and "),n("code",[e._v("Secret key")]),e._v(".")]),e._v(" "),n("li",[e._v("Go to "),n("code",[e._v("Developers > Webhooks")]),e._v(" and Click button "),n("code",[e._v("Test in Local Environment")]),e._v(" and follow instruction to get Webhooks' "),n("code",[e._v("endpointSecret")]),e._v(".")])])]),e._v(" "),n("p",[e._v("Congratulations! You have completed Configuring Payments.")]),e._v(" "),n("p",[e._v("What's Next")]),e._v(" "),n("ul",[n("li",[e._v("Go to next section "),n("a",{attrs:{href:"plan-recipes"}},[e._v("Design Plan and Recipes")]),e._v(". OR")]),e._v(" "),n("li",[e._v("Read more about "),n("a",{attrs:{href:"/modules/payment"}},[e._v("Payment")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);