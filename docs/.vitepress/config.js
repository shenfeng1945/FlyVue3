module.exports = {
  title: "FlyUI",
  description: "一个好用的UI框架",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Github", link: "https://github.com/shenfeng1945/FlyVue3" },
    ],
    sidebar: {
      '/': getGuideSidebar()
    }
  },
};

function getGuideSidebar() {
  return [
    {
      text: "开发指南",
      children: [
          {text: '安装', link: '/guide/install'},
          {text: '快速上手', link: '/guide/get-started'},
      ]
    },
    {
        text: '组件',
        children: [
            {text: 'Switch 开关', link: '/components/switch'}
        ]
    }
  ];
}
