module.exports = {
    title:'UI',
    description:'世界顶级的和',
    themeConfig: {
        sidebar: [
          '/install/',
          '/get-started/',
          {
            title: '组件',   // 必要的
            path: '/components/',      // 可选的, 应该是一个绝对路径
            //collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/components/button'
            ]
          },
        ]
      }
  }