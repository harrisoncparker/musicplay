<template>
	<div class="single-video-page page">
		<div class="single-video-page__container container" :class="{loaded}">

			<div class="single-video-page__video-column">
				<youtube class="single-video-page__video"
						 :player-vars="playerVars"
						 :video-id="id"
						 :resize="true"
						 :fitParent="true"
						 @ready="videoLoaded()"
						 ref="video">
				</youtube>
			</div>

			<div class="single-video-page__text-column">
				<h2 class="single-video-page__title">
					{{ snippet.title }}
				</h2>
				<h4 class="single-video-page__date">
					Published on {{ publishedDate }}
				</h4>
				<p class="single-video-page__description" v-html="description"></p>
				<nuxt-link to="/" class="single-video-page__back-link">
					Back to list
				</nuxt-link>
			</div>

		</div>
	</div>
</template>

<script>
	import moment from 'moment'
	import anchorme from 'anchorme'
	import YouTubeAPI from '~/assets/js/youtube-api'

	export default {
		async asyncData({params}) {
			const response = await YouTubeAPI.get(`videos/?id=${params.id}`)
			return {
				...response.data.items[0],
				loaded: false,
				playerVars: {autoplay: 1},
			}
		},
		computed: {
			async player() {
				return await this.$refs.video.player
			},
			publishedDate() {
				return moment(this.snippet.publishedAt).format('LL')
			},
			description() {

				let description = this.snippet.description.replace(/\n/g, '<br/><br/>')

				return anchorme(description, {
					attributes: [{name: "target", value: "_blank"}]
				})
			}
		},
		methods: {
			videoLoaded() {
				this.loaded = true
			}
		}
	}
</script>

<style scoped lang="scss">
	$component: 'single-video-page';

	$bp-1: 970px;

	.#{$component} {

		&__container {
			display: flex;
			flex-wrap: wrap;

			@include loadedAnimation;
		}

		// Video

		&__video-column {
			width: 66.66666%;

			@media (max-width: $bp-1) {
				width: 100%;
			}
		}

		// Text

		&__text-column {
			flex: 33.33333%;
			padding-left: rem(26);
			padding-bottom: rem(36);

			@media (max-width: $bp-1) {
				width: 100%;
				padding-top: rem(22);
				padding-left: rem(0);
			}
		}

		&__title {
			margin-bottom: rem(9);
		}

		&__date {
			margin-bottom: rem(7);
		}

		&__description {
			margin-bottom: rem(25);
		}

		&__back-link {
			position: relative;
			font-family: $body-font-family;
			font-size: $font-size-medium;
			text-decoration: none;
			color: $colour-primary;
			padding-left: rem(23.5);
			transition: $transition-fast;

			&::before {
				transition: $transition-fast;
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				width: rem(11);
				height: rem(14);
				border-right: rem(11) solid $colour-primary;
				border-top: rem(7) solid transparent;
				border-bottom: rem(7) solid transparent;
				transform: translateY(-50%);
			}

			&:hover {
				&::before {
					transform: translateY(-50%) translateX(rem(-6));
				}
			}
		}
	}

</style>