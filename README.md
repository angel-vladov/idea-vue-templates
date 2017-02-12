# idea-vue-templates
Vuejs 2 live templates for IntelliJ IDEA and Webstorm

### Installation
Download `settings.jar` and import it using **File->Import Settings**.

### Available templates
List with available templates abbreviations:

* `vuec` - Generates Vue component (_for .vue files_)
* `vued` - Vue directive
* `vuex` - Vue store module
* `vuexi` - Vue store index file

Components template is configured to work with SASS. Example Webpack configuration:

```
module.exports = {
	vue: {
		loaders: {
			js: 'buble-loader',
			scss: 'vue-style-loader!css-loader!sass-loader'
		}
	}
}
```