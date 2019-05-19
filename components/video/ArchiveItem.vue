<template>
	<div class="archive-video" :class="{loaded}">
		<nuxt-link :to="'/video/' + videoID" class="archive-video__link">
			<div class="archive-video__cover" :style="{ backgroundImage: `url('${thumbnail}')` }">
				<div class="archive-video__cover__text-wrapper">
					<h2 class="archive-video__cover__title">
						{{ video.snippet.title }}
					</h2>
					<div class="archive-video__cover__title__play-button">

					</div>
				</div>
			</div>
			<div class="archive-video__body">
				<h4 class="archive-video__body__date">
					Published on {{ publishedDate }}
				</h4>
				<p class="archive-video__body__description">
					{{ limitedDescription }}
				</p>
			</div>
		</nuxt-link>
	</div>
</template>

<script>
	import moment from 'moment'
	import YouTubeAPI from '~/assets/js/youtube-api'

	export default {
		props: ['video'],
		data() {
			return {
				'videoData': {},
				'publishedDate': '',
				'loaded': false
			}
		},
		mounted() {
			YouTubeAPI.get(`videos/?id=${this.videoID}`)
				.then(response => (this.videoData = response.data.items[0]))
				.then(() => (this.publishedDate = moment(this.videoData.snippet.publishedAt).format('LL')))
				.then(() => (this.loaded = true))
		},
		computed: {
			thumbnail() {
				return this.video.snippet.thumbnails.medium.url
			},
			videoID() {
				return this.video.snippet.resourceId.videoId
			},
			limitedDescription() {
				const limit = 214
				const description = this.video.snippet.description

				return description.substring(0, limit) + (limit < description.length ? '...' : '')
			}
		}
	}
</script>

<style scoped lang="scss">
	$component: 'archive-video';

	.#{$component} {

		opacity: 0;
		transform: translateY(rem(26));
		transition: $transition-slow;

		&.loaded {
			opacity: 1;
			transform: translateY(0);
		}

		&__link {
			text-decoration: none;
		}

		// archive video body

		&__cover {
			position: relative;
			padding-top: 56.14%;
			@include backgroundImageCover;
		}

		&__cover__text-wrapper {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			padding: rem(12) rem(14) rem(9) rem(12);
			background-color: rgba($colour-background-dark, .5);
		}

		&__cover__title {
			width: 66.31%;
		}

		// archive video body

		&__body {
			padding: rem(10) 0;
			min-height: rem(145);
		}

		&__body__date {
			margin-bottom: rem(10);
		}

		&__body__description {
			margin-bottom: rem(16);
		}
	}
</style>