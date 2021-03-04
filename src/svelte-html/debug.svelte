<script lang="typescript">
	import '../debug/debug.pcss';
	import Base from './debug/base.svelte';
	// add your file imports here V
	import Bobby from './bobby.svelte';
	import Menu from './menu.svelte';
	import Docs from './docs/docs.svelte';
	// add your file debug info here V
	let modules = [
		{
			name: Bobby,
			public: 'Bobby Animation Sequence',
			id: 'bobby-anim'
		},
		{
			name: Menu,
			public: 'Main Menu Options',
			id: 'menu-opts'
		},
		{
			name: Docs,
			public: 'Documentation',
			id: 'docs-base'
		},
	];
</script>
<Base fetchModules={modules} type='module'/>
