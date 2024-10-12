module.exports = {
    base: '/',
    lang: 'zh-CN',
    title: 'maxd 帮助文档',
    description: 'maxd 的服务使用帮助文档',
    themeConfig:{
		nav: [
    { text: "首页", link: "/"},
    { text: '配置指南',
        items: [
          // 内网穿透
          { 
            text: '内网穿透', 
            items: [
              { text: 'frp客户端', link: '/app/frp.md' },
              { text: 'nps客户端', link: '/app/nps.md' }
            ] 
          },
          // 异地组网
          { 
            text: '异地组网', 
            items: [
              { text: 'derp中继', link: '/app/derp.md' },
            ] 
          },
          // 远程控制
          { 
            text: '远程控制', 
            items: [
              { text: 'rustdesk', link: '/app/rustdesk.md' },
            ] 
          },
        ]
      },
    { text: '常见问题',
        items: [
          { 
            text: '算法', 
            items: [
              { text: '冒泡', link: '/language/chinese' },
              { text: '快速', link: '/language/japanese' }
            ] 
          },
          { 
            text: '设计模式', 
            items: [
              { text: '工厂', link: '/language/chinese' },
              { text: '单例', link: '/language/chinese'},
            ] 
          },
        ]
      },
    { text: "其他文档", link: "/other/" },
    { text: "我的Github", link: "https://github.com/raydoom" }
			
		],
		sidebar: {

		},

		docsRepo: 'raydoom/doc.maxd.cloud',
		docsBranch: 'master',

		editLinkText: '在 GitHub 上编辑此页',
		lastUpdatedText: '更新时间',
		contributorsText: '贡献者',

		tip: '提示',
		warning: '注意',
		danger: '警告',

		notFound: [
			'页面不存在',
		],
		backToHome: '返回首页',

		openInNewWindow: '在新窗口打开',
		toggleColorMode: '切换夜间模式',
		toggleSidebar: '开关侧边栏',
	},
}
