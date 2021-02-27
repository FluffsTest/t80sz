import 'svelte'
import Bobby from './svelte-html/bobby.svelte'
import Menu from './svelte-html/menu.svelte'
document.body.style.cssText = 'opacity: 0; transition: ease-in-out 200ms;'
async function loadElements() {
	new Bobby({
    	target: document.body
	})
	new Menu({
    	target: document.body
	})
}
loadElements()
.then(() => { 
	setTimeout(() => { document.body.style.cssText = 'opacity: 1; transition: ease-in-out 200ms;' }, 1000);
});
