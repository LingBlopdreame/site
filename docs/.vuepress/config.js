module.exports = {
	base: '/site/',
	title: 'LingBlopdreame',
	description: 'LingBlopdreame De Playgroud, Enjoy Your Life',
	author: 'LingBlopdreame',
	head: [
		['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
		['link', { rel: 'icon', href: '/assets/img/logo.png'}]
	],
	theme: 'reco',
	themeConfig: {
		type: 'blog',
		authorAvatar: '/assets/img/logo.jpg',
		noFoundPageByTencent: false,
		subSidebar: 'auto',
		blogConfig: {
			category: {
			  	location: 2,     // 在导航栏菜单中所占的位置，默认2
			  	text: 'Category' // 默认文案 “分类”
			},
			tag: {
			  	location: 3,     // 在导航栏菜单中所占的位置，默认3
			  	text: 'Tag'      // 默认文案 “标签”
			},
			socialLinks: [     // 信息栏展示社交信息
			  	{ icon: 'reco-github', link: 'https://github.com/LingBlopdreame' },
			  	{ icon: 'reco-mayun', link: 'https://gitee.com/LingBlopdreame' },
				{ icon: 'reco-blog', link: '/' },
				{ icon: 'reco-mail', text: '782954119@qq.com'}
			]
		},
		nav: [
			{
				text: 'Home',
				link: '/',
				icon: 'reco-home',
			},
			{ 
				text: 'TimeLine', 
				link: '/timeline/', 
				icon: 'reco-date' },
			{
				text: 'BiliBili',
				link: 'https://www.bilibili.com',
				icon: 'reco-bilibili'
			}, 
			{
				text: 'Gitee',
				link: 'https://www.gitee.com/LingBlopdreame',
				icon: 'reco-mayun'
			},
			{
				text: 'GitHub',
				link: 'https://www.github.com/LingBlopdreame',
				icon: 'reco-github'
			}, 
		],
		friendLink: [
			{
				title: 'vuepress-theme-reco',
				desc: 'A simple and beautiful vuepress Blog & Doc theme.',
				logo: "https://v2.vuepress.vuejs.org/icon_vuepress_reco.png",
				link: 'https://vuepress.vuejs.org/'
			},
		]
 	},
	markdown: {
		lineNumbers: true,
	},
	plugins: [
		[
			"@vuepress-reco/vuepress-plugin-kan-ban-niang",
			{
				theme: ['haru1', 'haru2', 'koharu', 'shizuku', 'z16'],
				clean: true,
			}
		],
		// [
			// 	'copyright',
			// 	{
				// 		minLength: 100, // 如果长度超过 100 个字符
				// 	},
				// ],
		[ 
			'@xiaopanda/vuepress-plugin-code-copy',
			{
				buttonAlign: 'bottom',
			}
		],
		[ 'flowchart' ],
		[ '@vuepress-reco/vuepress-plugin-pagation' ],
		[ 'vuepress-plugin-nprogress' ],
		[ 'vuepress-plugin-latex' ],
	],
}