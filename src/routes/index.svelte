<script>
	import '@splidejs/svelte-splide/css';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import Hero from '../components/homepage/Hero.svelte';
	import SliderCard from '../components/homepage/SliderCard.svelte';
	import Footer from '../components/Footer.svelte';

	let currentIndex = 0;
	const items = [
		{
			title: 'Auderd digital design language',
			subtitle: 'Auderd <br/>Brand website',
			image: '/images/work-1.jpg'
		},
		{
			title: 'Strike foundation manager',
			subtitle: 'Strike <br/>Brand website',
			image: '/images/work-2.jpg'
		},
		{
			title: '1973 - luxury urban resort',
			subtitle: '1973 <br/>Brand website',
			video: '/images/work-3.mp4'
		},
		{
			title: 'Avenu look book',
			subtitle: 'Avenu <br/>Brand website',
			image: '/images/work-4.jpg'
		},
		{
			title: 'Luxury lifestyle website',
			subtitle: 'Luxury <br/>Brand website',
			image: '/images/work-5.jpg'
		},
		{
			title: 'Revolutionary brand',
			subtitle: 'Snift <br/>Brand website',
			image: '/images/work-6.jpg'
		},
		{
			title: "They're not shoes, they're shoots",
			subtitle: 'Shoots <br/>Brand website',
			image: '/images/work-7.jpg'
		},
		{
			title: 'The leader barnd of fashion',
			subtitle: 'Fewb <br/>Brand website',
			image: '/images/work-8.jpg'
		},
		{
			title: '5 Plus, luxury lifestyle',
			subtitle: '5 Plus <br/>Brand website',
			image: '/images/work-9.jpg'
		},
		{
			title: 'Aisha digital design ',
			subtitle: 'Aisha <br/>Brand website',
			image: '/images/work-10.jpg'
		}
	];

	const colors = [
		'#eee',
		'#E4C7AE',
		'#BED1E0',
		'#F3C98D',
		'#F4F434',
		'#A0948D',
		'#8CB68E',
		'#95AA9B',
		'#D4A39A',
		'#88A39A',
		'#8DB5C1'
	];

	const options = {
		type: 'slide',
		arrows: false,
		wheel: true,
		releaseWheel: false,
		pagination: false,
		waitForTransition: true,
		perPage: 1,
		perMove: 1,
		padding: {
			right: '50rem'
		},
		breakpoints: {
			640: {
				padding: {
					right: '0rem'
				}
			},
			1500: {
				padding: {
					right: '25rem'
				}
			},
			1200: {
				padding: {
					right: '20rem'
				}
			},
			1000: {
				padding: {
					right: '0rem'
				}
			}
		}
	};

	const setColor = (i) => {
		currentIndex = i;
	};

	const onMoveSlide = (e) => {
		console.log(currentIndex);
	};
</script>

<main class="w-screen">
	<div class="w-screen relative overflow-x-auto">
		<Splide
			{options}
			on:move={(e) => {
				onMoveSlide(e);
			}}
		>
			<SplideSlide>
				<Hero />
			</SplideSlide>

			{#each items as item, i}
				<SplideSlide>
					<div
						on:mouseenter={() => {
							setColor(i);
						}}
						class="h-full transition duration-200 ease-in-out"
						style="background-color: {colors[currentIndex]}"
					>
						<SliderCard {item} index={i} />
					</div>
				</SplideSlide>
			{/each}

			<SplideSlide>
				<Footer />
			</SplideSlide>
		</Splide>
	</div>
</main>

<style>
	:global(.splide),
	:global(.splide__track),
	:global(.splide__slide) {
		@apply h-screen;
	}
</style>
