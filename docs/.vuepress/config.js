module.exports = {
  title: '古德',
  description: 'gd-ldj',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', {
      rel: 'icon',
      href: './logo.jpg'
    }], // 增加一个自定义的 favicon(网页标签的图标)
    ['meta', { name: 'keywords', content: 'gd-laj,古德,前端' }],
  ],
  base: '/docs/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  serviceWorker: true,
  ga: '', // 配置 google 分析统计
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [ // 导航栏配置
      {
        text: '技术博客',
        link: '/blog/'
      }, 
      {
        text: '来自优秀',
        link: '/copy/'
      }, 
      {
        text: '生活杂记',
        link: '/life/'
      }, 
      {
        text: '主页',
        link: 'http://www.gd-ldj.com'
      }, 
      {
        text: 'GitHub',
        items: [
          {
            text: 'GitHub-Page',
            link: 'https://gd-ldj.github.io'
          },{
            text: 'GitHub',
            link: 'https://github.com/gd-ldj'
          },
          {
            text: 'note',
            link: 'https://github.com/gd-ldj/Study-note'
          },
          
        ]
      }
    ],
    sidebar: {
      // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
      '/blog/': [
        '/blog/', 
        '/blog/h5ym/', 
        '/blog/chromesearch/',
        '/blog/qdgspg/',
      ],
      '/copy/': [
        '/copy/',
        '/copy/zq/', 
        '/copy/tyyh/',
        '/copy/kyfw/',
      ],
      // docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
      '/life/': [
        '/life/',
        '/life/knlh/', 
      ]
    }
  }
};