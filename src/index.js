import 'svelte'
import Bobby from './svelte-html/bobby.svelte'
import Menu from './svelte-html/menu.svelte'

let site = new Bobby({
    target: document.body
})
site += new Menu({
    target: document.body
})
export default site
