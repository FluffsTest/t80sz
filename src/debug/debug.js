import 'svelte';
import DebugMenu from '../svelte-html/debug.svelte';

let dbg = new DebugMenu({
	target = document.body
});

export default dbg;
