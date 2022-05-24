<script>
	import '@splidejs/svelte-splide/css';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import Hero from '../components/homepage/Hero.svelte';

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

	const options = {
		type: 'slide',
		arrows: false,
		wheel: true,
		pagination: false,
		perPage: 1,
		perMove: 1
	};
</script>

<main class="">
	<Splide {options}>
		<SplideSlide>
			<Hero />
		</SplideSlide>

		{#each items as item, i}
			<SplideSlide>
				<div>
					<!-- image -->
					<div>
						{#if item.image}
							<img src={item.image} alt="" class="" />
						{/if}

						{#if item.video}
							<!-- svelte-ignore a11y-media-has-caption -->
							<video width="320" height="240" controls>
								<source src={item.video} type="video/mp4" />
							</video>
						{/if}

						<span>
							{#if i < 8}
								<span>0</span>{/if}{i + 1}</span
						>
					</div>

					<div>
						<h2>{item.title}</h2>
					</div>

					<h3>{@html item.subtitle}</h3>
				</div>
			</SplideSlide>
		{/each}
	</Splide>
</main>
