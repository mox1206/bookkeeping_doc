/*
 * @Author: moxiang
 * @Date: 2023-01-11 16:58:58
 * @LastEditors: moxiang
 */
import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: "微微记账",
  dest: "./public",
  description: "微微记账应用文档",
  theme: defaultTheme({
    docsDir: "docs",
    repo: "mox1206/bookkeeping_doc",
    lastUpdatedText: '上次更新',
    editLinkText: "在Github上编辑",
    logo: "/assets/img/icon.png",
    contributors: false,
    sidebar: [
      "/",
      "/problem",
      "/update",
      "/home",
      {
        text: "记账界面",
        link: "/record",
        collapsible: true,
        children: [
          "/record",
          "/record/transfer",
          "/record/reimburse",
          "/record/settings",
        ]
      },
      "/type_mgr",
      {
        text: "资产管理",
        link: "/assets",
        collapsible: true,
        children: [
          "/assets"
        ]
      },
      "/mult_book",
      "/user_agreement",
      "/privacy_policy"
    ]
  })
})