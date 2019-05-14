<template>
	<div class="index-page page">
		<video-archive :videos="videos"/>
	</div>
</template>

<script>
	import VideoArchive from '~/components/video/Archive.vue'
	import YouTubeAPI from '~/assets/js/youtube-api'

	export default {
		asyncData() {
			return YouTubeAPI.get('playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ')
				.then((response) => ({
					videos: response.data.items
				}))
		},
		components: {
			VideoArchive
		}
	}
</script>
