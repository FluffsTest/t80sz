<script>
    import '../css/fonts.pcss';
    import '../css/menu.pcss';
    function homepage(name) {
        return `${document.location.origin}/home#${name}`
	}
</script>
<div id="menu-base">
    <div id="options">
        <a href={homepage("info")}>
			<p class="icon icon-info"></p>
		</a>
        <a href={homepage("server")}>
			<p class="icon icon-server"></p>
		</a>
        <a href={homepage("archive")}>
			<p class="icon icon-archive"></p>
		</a>
        <a href={homepage("varchive")}>
			<p class="icon icon-varchive"></p>
		</a>
        <a href={homepage("source")}>
			<p class="icon icon-source"></p>
		</a>
    </div>
</div>
