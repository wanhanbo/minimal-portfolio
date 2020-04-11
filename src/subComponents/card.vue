<template>
    <div>
        <article class="card">
            <div class="thumb" :style="{backgroundImage: 'url('+getImage(cardDetails.thumb)+')'}"></div>
            <div class="infos">
                <h2 class="title">{{cardDetails.title}}</h2>
                <h3 class="tech">{{getOutcome(cardDetails.outcome)}}</h3>
                <p class="txt">{{cardDetails.about}}</p>
                <h3 class="details"><a :href="cardDetails.source" target="blank">Source</a></h3>
            </div>
        </article>
    </div>
</template>
<script>
export default {
	name: 'Card',
	props: {
		cardDetails: Object
	},
	methods: {
		getImage (path) {
			return require('../assets/images/'+path);
		},
		getOutcome (outcome) {
			return outcome.toString();
		} 
	}
}
</script>
<style lang="scss" scoped>
$host:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/';


$big-stone:#152536;
$white:#fff;
$smalt-blue:#4e958b;
$maroon-flush:#C32361;
$black:#000;
$lite-grey:rgba($black, .2);
$lite-big-stone:rgba($big-stone, .7);

$card-width:80%;
$card-height: 52vh;
$card-mobile-height:52vh;

$thumb-height:250px;

$border-radius:1px;
$box-shadow:0 1px 4px rgba($black, .3);
$transition: cubic-bezier(.17,.67,.5,1.03);
$timing-1:.4s .15s;
$timing-2:.5s .25s;


@mixin pos($pos, $left:null, $top:null, $right:null, $bottom:null) {
	position:$pos;
	left:$left;
	@if $top { top: $top; }
	@if $left { left: $left; }
	@if $right { right: $right; }
	@if $bottom { bottom: $bottom; }
}

@mixin size($width, $height) {
	width:$width;
	height:$height;
}

* {
	box-sizing:border-box;
}

body {
	padding:0;
	margin:0;
}
a {
	text-decoration: none;
}

.card {
	margin: 4%;
	@include size($card-width, $card-height);
	@media only screen and (max-device-width: 1199px){
		@include size($card-width, $card-mobile-height);
		margin: 12%;
	}
	border-radius:$border-radius;
	box-shadow:$box-shadow;
	overflow:hidden;
	.thumb {
		@include size(auto, $thumb-height);
		background-size:cover;
		border-radius:$border-radius;
	}
	.infos {
		@include size(auto, $card-height);
		@media only screen and (max-device-width: 1199px){
			@include size(auto, $card-mobile-height);
		}
		position:relative;
		padding:14px 24px;
		background:$white;
		transition:$timing-1 $transition;
		.title {
			position:relative;
			margin: 10px 0;
			letter-spacing: 3px;
			color:$big-stone;
			font-size: 1rem;
			text-transform: uppercase;
			text-shadow: 0 0 0px lighten($big-stone, 20);
		}
		.tech {
			margin-bottom: 10px;
			text-transform: uppercase;
			font-size: .85rem;
			color:$lite-big-stone;
            display:inline-block;
			margin-bottom: 24px;
			padding-bottom:24px;
			@media only screen and (max-device-width: 1199px){
				font-size: 10px;
				margin-bottom: 4px;
				padding-bottom: 8px;
			}
			border-bottom:1px solid $lite-grey;
			transition:$timing-2 $transition;
		}
		.txt {
			line-height: 2;
			font-size: .95rem;
			color:$lite-big-stone;
			opacity:0;
            transition:$timing-2 $transition;
            text-align: left;
		}
		.details {
			@include pos(absolute, $left:0, $bottom:0);
			margin: 10px 0;
			padding:20px 24px;
			letter-spacing: 1px;
			font-size: .9rem;
			text-transform: uppercase;
			cursor:pointer;
			opacity:0;
			transition:$timing-2 $transition;
		}
	}
	&:hover .infos {
		transform:translateY(-$thumb-height);
		.txt, .details {
            opacity:1;
		}
	}
}
</style>