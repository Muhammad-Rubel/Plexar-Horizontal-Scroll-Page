<script>
	import '../css/app.css';

	import ExtendMenu from '../components/ExtendMenu.svelte';
	import Header from '../components/Header.svelte';

	let showMenu = false;

	const toggleMenu = ({ detail }) => {
		showMenu = detail;
	};
</script>

<div class="relative overflow-x-hidden">
	<div>
		<div class="z-50 relative">
			<Header on:toggle={toggleMenu} />
		</div>

		<!-- extend nav -->
		<div
			class="fixed top-0 left-0 h-screen transition duration-300 ease-in-out transform  z-0 bg-gray-dark {showMenu
				? 'translate-x-0'
				: '-translate-x-[100%] '}"
		>
			<div
				class="bg-gray-dark ml-10 h-screen w-screen lg:w-[80vw] xl:w-[70vw] px-10 py-8 border-l border-gray-light "
			>
				<ExtendMenu />
			</div>
		</div>
	</div>

	<div
		class="h-screen w-full pl-10 lg:pl-[54px] transition duration-300 ease-in-out transform z-0 {showMenu
			? 'translate-x-[100%] lg:translate-x-[80%] xl:translate-x-[70%]'
			: 'translate-x-0 '}"
	>
		<slot />
		<div class="lg:hidden h-screen w-full bg-slate-600">test</div>
	</div>

	<!-- <div
		class="h-[200vh] flex transition duration-300 ease-in-out transform relative z-0 {showMenu
			? 'translate-x-0'
			: '-translate-x-[100%] lg:-translate-x-[80%] xl:-translate-x-[70%]'}"
	>
		<div
			class="bg-gray-dark ml-10 h-screen w-screen lg:w-[80vw] xl:w-[70vw] px-10 py-8 border-l border-gray-light "
		>
			<ExtendMenu />
		</div>

		<slot />
		<div class="h-screen w-full bg-slate-600">test</div>
	</div> -->
</div>
