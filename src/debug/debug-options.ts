export async function fetchModules(mode) {
	const req = await fetch('./modules.json');
	const data = await req.json();
	const mod = data.modules;
	let modules = [];
	switch(mode) {
		case "import":
			mod.forEach(el => {
				modules[modules.length] = {
					name: el.name,
					divId: el.id,
					publicName: el.public
				}
			});
			break;
		case "html":
			mod.forEach(el => {
				modules[modules.length] = {
					name: el.name,
					divId: el.id,
					publicName: el.public
				}
			});
			break;
	}
	return modules;
}
export default fetchModules;
