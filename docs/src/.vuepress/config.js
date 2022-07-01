const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Surevelox OrchardCore Modules",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  dest: "../.wwwroot",

  base: "/OrchardCore.Modules/",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "surevelox/OrchardCore.Modules",
    docsDir: 'docs/src',
    editLinks: true,
    editLinkText: 'Edit in GitHub',
    lastUpdated: false,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Modules",
        link: "/modules/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: ["", "requirement", "getting-started"],
        },
        {
          title: "Cookbook",
          collapsable: false,
          children: [
            "cookbook/", // '1. Setting up Development'],
            "cookbook/licensing", // '2. Add License Management'],
            "cookbook/payment", // 3. Configure Payment'],
            "cookbook/plan-recipes", // '4. Design Plan &  Recipes'],
            "cookbook/tenant-registration", // '5. Design Tenant Registration'],
            "cookbook/tenant-billing", // '6. Use Tenant Billing']
          ],
        },
      ],
      "/modules/": [
        {
          title: "Modules",
          collapsable: false,
          sidebarDepth: 3,
          children: [
            ["", "Introduction"],
            ["device-preview", "Device Preview"],
            "hosting",
            "licensing",
            ["payment", "Payment"],
            ["2fa", "Two factor Auth"],
          ],
        },
        // {
        //   title: 'Reference',
        //   collapsable: false,
        //   children: [
        //     ['reference/', 'Reference'],
        //     ['reference/stepper', 'Stepper'],
        //   ]
        // },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
