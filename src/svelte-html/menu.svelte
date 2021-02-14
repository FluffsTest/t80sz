<script>
    import '../css/fonts.pcss';
    import '../css/menu.pcss';
	const items = ["info", "server", "archive", "varchive", "source"];
    function homepage(name) {
        return `#${name}`
    }
</script>
<div id="menu-base">
    <nav id="options">
		{#each items as i}
		<a href="#{i}">
			<p class="icon icon-{i}"></p>
		</a>
		{/each}
    </nav>
</div>
