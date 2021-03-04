<script lang="typescript">
	import '../../debug/debug.pcss';
	import Base from '../debug/base.svelte';
	// add your doc imports here V
	import DocsTest from './XX-loremipsum.svx';
	// add your file doc info here V
	let modules = [
		{
			name: DocsTest,
			public: 'Documentation Sample',
			id: 'docs-base'
		},
	];
</script>
<Base fetchModules={modules} type='docs'/>
