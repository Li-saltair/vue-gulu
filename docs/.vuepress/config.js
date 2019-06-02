module.exports = {
    base:'/vue-gulu/',
    title:'UI',
    description:'世界顶级的和',
    themeConfig: {
        sidebar: [
          '/install/',
          '/get-started/',
          {
            title: '布局',   // 必要的
            path: '/basic/',      // 可选的, 应该是一个绝对路径
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/basic/layout',
                '/basic/grid',
            ]
          },
          {
            title: '通用',   // 必要的
            path: '/common/',      // 可选的, 应该是一个绝对路径
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/common/button',
                '/common/btn-group',
                '/common/input',
            ]
          },
          {
            title: '简单组件',   // 必要的
            path: '/components/',      // 可选的, 应该是一个绝对路径
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                // '/components/button',
                // '/components/btn-group',
                // '/components/input',
                //'/components/toast',
                '/components/popover',
                '/components/sticky',
                '/components/tabs',
                '/components/collapse',
                '/components/carousel',
            ]
          },
        ]
      }
  }