<script lang="typescript">
	import '../../debug/debug.pcss';
	import Base from '../debug/base.svelte';
	// add your doc imports here V
	import AboutUs from './AboutUs.svx';
	// add your file doc info here V
	import AboutTeam from './AboutTeam.svx'
	let modules = [
		{
			name: AboutUs,
			public: 'about us',
			id: 'docs-about'
		},
		{
			name: AboutTeam,
			public: 'about team',
			id: 'docs-team'
		},
	];
</script>
<Base fetchModules={modules} type='docs'/>
