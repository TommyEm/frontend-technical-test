const StyleDictionary = require('style-dictionary');

const myStyleDictionary = StyleDictionary.extend({
	"source": ["tokens/**/*.json"],
	"platforms": {
		"css": {
			"transformGroup": "css",
			"buildPath": "build/css/",
			"files": [
				{
				"format": "css/variables",
				"destination": "variables.module.css"
				}
			]
		},
		"js": {
			"transformGroup": "js",
			"buildPath": "build/ts/",
			"files": [{
				"destination": "index.js",
				"format": "javascript/module"
			}]
		},
		"ts": {
			"transformGroup": "js",
			"buildPath": "build/ts/",
			"files": [{
				"destination": "index.d.ts",
				"format": "typescript/module-declarations"
			}]
		}
	}
});

myStyleDictionary.buildAllPlatforms();