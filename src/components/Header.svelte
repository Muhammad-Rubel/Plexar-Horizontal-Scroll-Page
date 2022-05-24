<script>
	import { slide } from 'svelte/transition';

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
	};
</script>

<header class="bg-gray-dark fixed top-0 left-0 h-screen px-1 flex justify-start items-stretch">
	<div class="relative w-8 border-r border-gray-light py-8">
		<a
			href="#!"
			class="text-xl font-bold text-white transform -rotate-90 inline-block fixed top-12 left-0 -translate-x-3 py-1"
			>Plexar</a
		>

		<!-- munu icon -->
		<div
			class="fixed top-0 transform translate-x-2 translate-y-1/2 -mt-8 h-full flex justify-center space-x-1"
			on:click={extendMenu}
		>
			<span
				class="inline-block w-[2px] h-5 bg-white opacity-60 transition-all duration-300 ease-in-out transform {showMenu &&
					'rotate-45 translate-x-1.5 translate-y-1'}"
			/>
			<span
				class="inline-block w-[2px] h-5 bg-white transition-all duration-300 ease-in-out {showMenu
					? 'opacity-0'
					: 'opacity-60'}"
			/>
			<span
				class="inline-block w-[2px] h-5 bg-white opacity-60 transition-all duration-300 ease-in-out transform {showMenu &&
					'-rotate-45 -translate-x-1.5 translate-y-1'}"
			/>
		</div>
	</div>

	<!-- extend nav -->
	<!-- {#if showMenu} -->
	<div class="px-10 py-8">
		<!-- top section -->
		<div>
			<!-- social Media -->
			<div class="flex flex-col justify-start">
				{#each socialMediaLinks as item}
					<a href={item.url} class="text-gray-light text-sm">{item.name}</a>
				{/each}
			</div>

			<!-- addresses -->
			<div>
				<address>
					6913 King Green Ste.<br />
					2689 Los Angeles<br />
					CA 80016
				</address>

				<div>
					<a href="mailto:plexar@info.com">plexar@info.com</a>
					<a href="tel:+36 4587 9012">+36 4587 9012</a>
				</div>
			</div>
		</div>
	</div>
	<!-- {/if} -->
</header>
