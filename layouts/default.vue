<template>
	<div>
		<site-header/>

		<nuxt/>

		<site-background/>
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

<style lang="scss">
	// This is here to make sure that the
	// global styles are included at this level
</style>
