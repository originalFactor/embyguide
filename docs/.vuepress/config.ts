import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  base: '/',
  title: 'Emby通用教程',
  description: 'Emby快速使用',
  lang: 'zh-CN',
  bundler: viteBundler({
    // vite bundler options here
  }),
  theme: defaultTheme({
    // default theme options here
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '介绍',
        link: '/guide/',
      },
      {
        text: '安装',
        link: '/guide/install/',
      },
      {
        text: '使用',
        link: '/guide/use/',
      },
      {
        text: '代理',
        link: '/guide/proxy/',
      },
    ],
  }),
});
