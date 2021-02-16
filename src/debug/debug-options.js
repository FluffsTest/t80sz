export function fetchModules(mode) {
	fetch('./modules.json') 
	.then(resp => resp.json)
	.then(data => () {
		const modules = [];
		switch(mode) {
			case "import":
				data.modules.forEach(el => {
				modules[modules.length] = {
						name: el.name,
						filePath: el.path
					},
				});
				break;
			case "html":
				data.forEach(el => {
					modules[modules.length] = {
						name: el.name,
						divId: el.id,
						publicName: el.public	
					}
				});
				break;
			})
		.catch((error) => {
			console.error('oops: ', error);
		});
		return modules;
	}
}
