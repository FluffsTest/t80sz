import 'svelte'
import Bobby from './svelte-html/bobby.svelte'
import Menu from './svelte-html/menu.svelte'

new Bobby({
    target: document.body
})
new Menu({
    target: document.body
})
