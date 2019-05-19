<template>
	<section class="site-header bg-primary">
		<div class="container">
			<nuxt-link to="/" class="site-header__logo">
			</nuxt-link>
		</div>
	</section>
</template>

<style scoped lang="scss">
	$component: 'site-header';

	// breakpoints
	// I've started using component scoped breakpoints intentionally
	// as i think a breakpoint should be defined by where an elements
	// stops displaying correctly instead of arbitrary screen sizes
	$bp-1: 380px;

	.#{$component} {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: rem(40);
		background-image: url(appSVG('header_bg'));
		z-index: 100;

		&__logo {
			display: block;
			position: absolute;
			top: 14px;
			width: rem(259);
			height: rem(48);

			background-image: url(appPNG('MusicPlay_logo'));
			@include backgroundImageContain;
			background-position: top center;

			transition: $transition-fast;

			&:hover {
				transform: scale(1.03);
			}

			@media (max-width: $bp-1) {
				top: 20px;
				width: rem(189);
				height: rem(32);
			}
		}
	}

</style>
