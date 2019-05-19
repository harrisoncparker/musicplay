import pkg from './package'

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
	router: {
		base: '/musicplay/'
	}
} : {}

export default {
	mode: 'universal',

	/*
	** Headers of the page
	*/
	head: {
		title: pkg.name,
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: pkg.description}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
		]
	},

	/*
	** Customize the progress-bar color
	*/
	loading: {color: '#000'},

	/*
	** Set router base for github pages
	*/
	...routerBase,

	/*
	** Plugins
	*/
	plugins: [
		'~/plugins/vue-youtube'
	],

	/*
	** Nuxt style resources
	*/
	styleResources: {
		scss: './assets/scss/app.scss'
	},

	/*
	** Nuxt.js modules
	*/
	modules: [
		'@nuxtjs/pwa',
		'@nuxtjs/style-resources',
		'nuxt-svg'
	],

	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {
		}
	}
}
