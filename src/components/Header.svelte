<script>
	import { logicalPropertiesHorizontalSlide, horizontalSlide } from '../js/transition';
	import { createEventDispatcher } from 'svelte';
	import ExtendMenu from './ExtendMenu.svelte';

	const dispatch = createEventDispatcher();
	let showMenu = false;

	const socialMediaLinks = [
		{
			name: 'Facebook',
			url: '#!'
		},
		{
			name: 'Linkedin',
			url: '#!'
		},
		{
			name: 'Twitter',
			url: '#!'
		},
		{
			name: 'Intagram',
			url: '#!'
		}
	];

	const navItems = [
		{
			name: 'Home',
			url: '#!'
		},
		{
			name: 'About',
			url: '#!'
		},
		{
			name: 'Portfolio',
			url: '#!'
		},
		{
			name: 'Contact',
			url: '#!'
		},
		{
			name: 'Blog',
			url: '#!'
		}
	];

	const extendMenu = () => {
		showMenu = !showMenu;
		dispatch('toggle', showMenu);
	};
</script>

<header
	class="bg-gray-dark px-1 fixed top-0 left-0 bottom-0 h-screen flex justify-start items-stretch border-r border-gray-300 lg:bg-white hover:bg-gray-dark group "
>
	<div class="relative w-10 py-8 lg:w-[54px]">
		<a
			href="#!"
			class="text-xl font-bold text-white transform -rotate-90 inline-block fixed top-12 left-0 -translate-x-1.5 py-1 lg:-translate-x-0 lg:text-gray-dark group-hover:text-white transition-all duration-300 ease-in-out"
			>Plexar</a
		>

		<!-- munu icon -->
		<div
			class="fixed top-0 transform translate-x-3 translate-y-1/2 -mt-8 h-full flex justify-center space-x-1 lg:translate-x-5"
			on:click={extendMenu}
		>
			<span
				class="inline-block w-[2px] h-5 bg-white opacity-60 transition-all duration-300 ease-in-out transform lg:bg-gray-dark group-hover:bg-white {showMenu &&
					'rotate-45 translate-x-1.5 translate-y-1'}"
			/>
			<span
				class="inline-block w-[2px] h-5 bg-white transition-all duration-300 ease-in-out lg:bg-gray-dark group-hover:bg-white {showMenu
					? 'opacity-0'
					: 'opacity-60'}"
			/>
			<span
				class="inline-block w-[2px] h-5 bg-white opacity-60 transition-all duration-300 ease-in-out transform lg:bg-gray-dark group-hover:bg-white {showMenu &&
					'-rotate-45 -translate-x-1.5 translate-y-1'}"
			/>
		</div>
	</div>

	<!-- extend nav -->
	<!-- {#if showMenu}
		<div
			transition:horizontalSlide={{ axis: 'x', duration: 500 }}
			class=" w-screen lg:w-[80vw] xl:w-[70vw] px-10 py-8 border-l border-gray-light"
		>
			<ExtendMenu />
		</div>
	{/if} -->
</header>
