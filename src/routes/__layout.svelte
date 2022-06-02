<script>
	import '../css/app.css';

	import ExtendMenu from '../components/ExtendMenu.svelte';
	import Header from '../components/Header.svelte';

	let showMenu = false;

	const toggleMenu = ({ detail }) => {
		showMenu = detail;
	};
</script>

<div class="h-screen overflow-hidden relative">
	<div class="z-50 relative">
		<Header on:toggle={toggleMenu} />
	</div>

	<div
		class="h-full flex transition duration-300 ease-in-out transform relative z-0 {showMenu
			? 'translate-x-0'
			: '-translate-x-[100%] lg:-translate-x-[80%] xl:-translate-x-[70%]'}"
	>
		<div
			class="bg-gray-dark ml-10 h-full w-screen lg:w-[80vw] xl:w-[70vw] px-10 py-8 border-l border-gray-light "
		>
			<ExtendMenu />
		</div>

		<slot />
	</div>
</div>
