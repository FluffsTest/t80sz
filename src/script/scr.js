import 'svelte'
import Bobby from '../svelte-html/bobby.svelte'
import Debug from '../svelte-html/menu.svelte'
let site = new Bobby({
	target: document.body
})
site += new Debug({
	target: document.body
})
export default site
