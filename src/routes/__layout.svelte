<script>
	import '../css/app.css';

	import ExtendMenu from '../components/ExtendMenu.svelte';
	import Header from '../components/Header.svelte';

	let showMenu = false;

	const toggleMenu = ({ detail }) => {
		showMenu = detail;
		console.log(showMenu);
	};
</script>

<div class="h-screen overflow-hidden relative">
	<div class="z-50 relative">
		<Header on:toggle={toggleMenu} />
	</div>

	<div
		class="bg-gray-dark ml-10 h-full w-screen lg:w-[80vw] xl:w-[70vw] px-10 py-8 border-l border-gray-light transition duration-300 ease-in-out transform relative z-0 {showMenu
			? 'translate-x-0'
			: '-translate-x-full'}"
	>
		<ExtendMenu />
	</div>
	<slot />
</div>
