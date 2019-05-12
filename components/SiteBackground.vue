<template>
	<div class="site-background">
		<div class="site-background__angle">

		</div>
	</div>
</template>

<style scoped lang="scss">
	$component: 'site-background';

	.#{$component} {
		@include fixedCover;
		z-index: -100;
		background-color: $colour-background-dark;

		&__angle {
			position: absolute;
			top: 70%;
			transform: skewY(-8deg);
			height: 100vh;
			width: 100%;
			background-color: $colour-background-light;
		}
	}
</style>