<script>
	import fetchModules from '../debug/debug-options.ts';		
	import Bobby from './bobby.svelte';
	import Menu from './menu.svelte';
	function changeModule(module) {
		activeModule = module; 
	}
	const moduleList = fetchModules('html');
	console.log(fetchModules('html'));
	const activeModule = 'default';
</script>
<div id="headline">
	<header id="title">
		<p class="title-para">Welcome to the</p>
		<h1 class="title-h1">Debug Menu</h1>	
	</header>
	<nav id="options">
		{#await moduleList}
		<p>pls wait</p>
		{:then}
			{#each moduleList as module}
			<div class='module' on:click="{changeModule(module.name)}" id='{module.id}'>
				<p>{module.public}</p>
			</div>
			{/each}
		{/await}
	</nav>
	<div id="playarea">
		{#if activeModule == 'default'}
			<h1 class="debug-bg">Debug Menu</h1>
		{:else}
			<svelte:component this={activeModule} />
		{/if}
	</div>
</div>
