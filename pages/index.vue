<template>
	<div class="index-page page">
		<video-archive :videos="videos"/>
	</div>
</template>

<script>
	import VideoArchive from '~/components/video/Archive.vue'
	import YouTubeAPI from '~/assets/js/youtube-api'

	export default {
		async asyncData() {
			const playlistID = 'PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ'
			const response = await YouTubeAPI.get(
				`playlistItems?part=snippet&maxResults=10&playlistId=${playlistID}`
			)
			return {
				videos: response.data.items,
				playlistID: playlistID
			}
		},
		components: {
			VideoArchive
		}
	}
</script>
