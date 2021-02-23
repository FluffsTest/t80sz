<script lang="typescript">
	let fetchModules = [
		{
			name: Bobby,
			public: "Bobby Animation Sequence",
			id: "bobby-animation"
		},
		{
			name: Menu,
			public: "Website Main Menu",
			id: "menu"
		}
	]
	import '../debug/debug.pcss';
	import Bobby from './bobby.svelte';
	import Menu from './menu.svelte';
	function changeModule(module) {
		activeModule = module; 
	}
	let activeModule = 'default';
</script>
<div id="headline">
	<header id="title">
		<p class="title-para">Welcome to the</p>
		<h1 class="title-h1">Debug Menu</h1>	
	</header>
	<nav id="module-list">
		{#each fetchModules as mdl}
			<div id="mdl" class="{mdl.id}" on:click="{() => changeModule(mdl.name)}"> 
				<p>{mdl.public}</p>
			</div>
		{/each}
	</nav>
</div>
<div id="playarea">
	{#if activeModule == 'default'}
		<h1 class="debug-bg">Debug Menu</h1>
	{:else}
		<svelte:component this='{activeModule}' />
	{/if}
</div>
