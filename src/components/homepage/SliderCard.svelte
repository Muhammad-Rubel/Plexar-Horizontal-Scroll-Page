<script>
	export let item = {};
	export let index = null;
</script>

<section class=" h-full flex justify-center items-center w-full">
	<!-- image -->
	<div class="relative w-[77%]">
		{#if item.image}
			<img src={item.image} alt="" class="" />
		{/if}

		{#if item.video}
			<!-- svelte-ignore a11y-media-has-caption -->
			<video controls class="">
				<source src={item.video} type="video/mp4" />
			</video>
		{/if}

		<span
			class="absolute top-0 left-2 text-6xl text-white font-semibold transform -translate-y-[50%]"
		>
			{#if index < 8}
				<span>0</span>{/if}{index + 1}</span
		>

		<div class="mt-4">
			<h2 class="text-xl md:text-2xl">{item.title}</h2>
		</div>

		<h3
			class="hidden md:block text-sm leading-none absolute top-2 text-right -right-20 transform -rotate-90 "
		>
			{@html item.subtitle}
		</h3>
	</div>
</section>
