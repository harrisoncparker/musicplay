<template>
	<div style="color: white;" class="video-archive container">

		<div class="video-archive__wrapper">
			<div class="video-archive__video" v-for="video in videos">
				<video-archive-item :video="video"/>
			</div>
		</div>

	</div>
</template>

<script>
	import VideoArchiveItem from '~/components/video/ArchiveItem'

	export default {
		props: ['videos'],
		components: {
			VideoArchiveItem
		}
	}
</script>

<style scoped lang="scss">
	$component: 'video-archive';

	$bp-1: 970px;
	$bp-2: 630px;

	$half-gutter: 27 / 2;

	.#{$component} {

		&__wrapper {
			display: flex;
			flex-wrap: wrap;

			margin: 0 rem(-$half-gutter);
		}

		&__video {
			width: 33.3333%;
			padding: 0 rem($half-gutter);

			@media (max-width: $bp-1) {
				width: 50%;
			}

			@media (max-width: $bp-2) {
				width: 100%;
			}
		}
	}

</style>