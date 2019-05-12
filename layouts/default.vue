<template>
	<div>
		<site-header/>
		<site-background/>
		<nuxt/>
	</div>
</template>

<script>
	import SiteHeader from '~/components/SiteHeader.vue'
	import SiteBackground from '~/components/SiteBackground.vue'

	export default {
		components: {
			SiteHeader,
			SiteBackground
		}
	}
</script>
