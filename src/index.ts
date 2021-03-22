import 'svelte'
import Bobby from './svelte-html/bobby.svelte'
import Menu from './svelte-html/menu.svelte'
const mainMenu = document.createElement('div');
mainMenu.id = 'main-menu';
document.body.appendChild(mainMenu);
mainMenu.style.cssText = 'opacity: 0; transition: ease-in-out 200ms;'
async function loadElements() {
	new Bobby({
    	target: mainMenu
	})
	new Menu({
    	target: mainMenu
	})
}
loadElements()
.then(() => { 
	setTimeout(() => { mainMenu.style.cssText = 'opacity: 1; transition: ease-in-out 200ms;' }, 1000);
});