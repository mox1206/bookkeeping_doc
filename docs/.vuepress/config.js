module.exports = {
  dest: "./public",
  themeConfig: {
    navbar: true,
    sidebar: [
      {
        title: 'Bookkeeping',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          "/",
          'problem',
          'update',
          'home',
          {
            title: "记账界面",
            path: "/record",
            initialOpenGroupIndex: 0, // 可选的, 默认值是 0
            sidebarDepth: 1,    // 可选的, 默认值是 1
            collapsable: true, // 可选的, 默认值是 true,
            children: [
              "/record/",
              "/record/transfer",
              "/record/reimburse",
              "/record/settings",
            ]
          },
          "type_mgr",
          {
            title: "资产管理",
            path: "/assets",
            initialOpenGroupIndex: 0, // 可选的, 默认值是 0
            sidebarDepth: 1,    // 可选的, 默认值是 1
            collapsable: true, // 可选的, 默认值是 true,
            children: [
              "/assets/"
            ]
          },
          "user_agreement",
          "privacy_policy",
        ]
      }
    ]
	}
}