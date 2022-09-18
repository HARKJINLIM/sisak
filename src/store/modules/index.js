import camelCase from "lodash/camelCase";

//Read codes from store folders
const requireModule = require.context('.', false, /\.js$/);
const modules = {};

//export user.js included data module. Index.js for upper index.js
requireModule.keys().forEach(filename => {
    if(filename !== './index.js') {
		const moduleName = camelCase(filename.replace(/(\.\/|\.js)/g, ''));
		modules[moduleName] = {namespaced: true, ...requireModule(filename)}
	} 
});

export default modules;