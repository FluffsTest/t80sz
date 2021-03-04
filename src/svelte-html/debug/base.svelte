<script>
	function changeModule(module) {
		activeModule = module; 
	}
	export let fetchModules;
	export let type;
	let activeModule = 'default';
</script>
{#if type == 'module'}
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
{:else}
<div id="docs-headline">
	<nav id="docs-list">
		{#each fetchModules as mdl}
			<div id="mdl" class="{mdl.id}" on:click="{() => changeModule(mdl.name)}"> 
				<p>{mdl.public}</p>
			</div>
		{/each}
	</nav>
</div>
{/if}
{#if type == 'module'}
<div id="playarea">
	{#if activeModule == 'default'}
		<h1 class="debug-bg">Debug Menu</h1>
	{:else}
		<div id="module">
			<svelte:component this='{activeModule}' />
		</div>
	{/if}
</div>
{:else}
<div id="docs-playarea">
	{#if activeModule == 'default'}
		<h1 class="debug-bg">Documentation</h1>
	{:else}
		<div id="docs">
			<svelte:component this='{activeModule}' />
		</div>
	{/if}
</div>
{/if}
