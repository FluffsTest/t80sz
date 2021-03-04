<script>
	export let gradient;
	export let text;
	const gradientSets = ['90deg, rgba(11,241,49,1) 0%, rgba(32,179,123,1) 100%', '90deg,  rgba(68,69,255,1) 0%, rgba(51,121,193,1) 100%', '90deg, rgba(255,229,0,1) 0%, rgba(249,190,17,1) 100%', '90deg, rgba(242,139,39,1) 0%, rgba(249,190,17,1) 100%', '90deg, rgba(196,41,169,1) 0%, rgba(141,53,206,1) 100%'] // green, blue, yellow, orange, purple	
</script>
<style>
	#grad-header {
		font-size: 2em;
		color: transparent;
		background-clip: text !important;
		filter: drop-shadow(0px 2px 5px rgba(0,0,0,.5));
		display: inline;
	}
</style>
{#if gradient == 'green'}
	<h1 id='grad-header' style='background: linear-gradient({gradientSets[0]}'>{text}</h1>
{:else if gradient == 'blue'}
	<h1 id='grad-header' style='background: linear-gradient({gradientSets[1]}'>{text}</h1>
{:else if gradient == 'purple'}
	<h1 id='grad-header' style='background: linear-gradient({gradientSets[4]}'>{text}</h1>
{:else if gradient == 'orange'}
	<h1 id='grad-header' style='background: linear-gradient({gradientSets[3]}'>{text}</h1>
{:else if gradient == 'yellow'}
	<h1 id='grad-header' style='background: linear-gradient({gradientSets[2]}'>{text}</h1>
{/if}
