<script>
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

<div class="w-screen lg:w-[80vw] xl:w-[70vw] px-10 py-8 h-full flex flex-col justify-between">
	<!-- top section -->
	<div class="flex justify-between items-start space-x-36">
		<!-- social Media -->
		<div class="flex flex-col justify-start">
			{#each socialMediaLinks as item}
				<a href={item.url} class="text-gray-light text-sm">{item.name}</a>
			{/each}
		</div>

		<!-- addresses -->
		<div class="text-gray-light text-sm hidden md:flex justify-between items-start space-x-8 pr-10">
			<address>
				6913 King Green Ste.<br />
				2689 Los Angeles<br />
				CA 80016
			</address>

			<div>
				<a href="mailto:plexar@info.com">plexar@info.com</a><br />
				<a href="tel:+36 4587 9012">+36 4587 9012</a>
			</div>
		</div>
	</div>

	<!-- Nav Items -->
	<nav
		class="mt-10 md:mt-32 xl:mt-20 flex flex-col justify-start space-y-1 md:space-y-4 xl:space-y-1"
	>
		{#each navItems as item}
			<a href={item.url} class="text-2xl text-white font-medium md:text-4xl">{item.name}</a>
		{/each}
	</nav>

	<!-- copy right -->
	<div>
		<span class="text-sm text-gray-light">@2019 Plexar. All rights reserved.</span>
	</div>
</div>
