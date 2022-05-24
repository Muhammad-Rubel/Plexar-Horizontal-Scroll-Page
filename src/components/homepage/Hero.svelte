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
</script>

<section class="h-full w-screen">
	<div
		class="w-screen lg:w-[80vw] xl:w-[70vw] 2xl:w-[40vw] px-4 py-8 lg:px-10 h-full flex flex-col justify-between relative"
	>
		<!-- top section -->
		<div class="flex justify-start items-start space-x-20">
			<div class="text-gray-light text-sm">
				<a href="mailto:plexar@info.com">plexar@info.com</a><br />
				<a href="tel:+36 4587 9012">+36 4587 9012</a>
			</div>

			<!-- social Media -->
			<div class="flex flex-col justify-start">
				{#each socialMediaLinks as item}
					<a href={item.url} class="text-gray-light text-sm">{item.name}</a>
				{/each}
			</div>
		</div>

		<!-- Nav Items -->
		<div
			class="mt-6 md:mt-20 lg:mt-32 xl:mt-24 flex flex-col justify-start space-y-1 md:space-y-4 xl:space-y-1"
		>
			<h1 class="text-xl md:text-3xl lg:text-5xl xl:text-4xl leading-loose">
				We are a <br />digital agency <br />specialize in <br />branding.
			</h1>
		</div>

		<!-- copy right -->
		<div class="max-w-[16rem]">
			<span class="text-sm text-gray-light">
				Plexar is a digital studio based in Los Angeles. We help design and build successful brands
				and digital products.
			</span>
		</div>

		<!-- scroll -->
		<div class="absolute top-[50%] right-0 flex flex-col justify-start space-y-3">
			<span class="text-sm text-gray-light">Scroll</span>
			<span class="inline-block w-32 h-[1px] bg-black transform translate-x-4" />
		</div>
	</div>
</section>
