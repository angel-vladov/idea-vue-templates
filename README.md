# idea-vue-templates
Vuejs 2 live templates for IntelliJ IDEA and Webstorm. All the templates assume you're using a transplier for ECMAScript 2015.

### Installation
Download `settings.jar` and import it using **File->Import Settings**.

### Available templates
List with available templates abbreviations:

* `vuec` - Generates Vue component (_for .vue files_)
* `vued` - Vue directive
* `vuex` - Vue store module
* `vuexi` - Vue store index file

#### More

* It's highly recommended to install [Vue.js](https://plugins.jetbrains.com/idea/plugin/8057-vue-js) IDEA plugin.
* Components template is configured to work with SASS. Example Webpack configuration for SASS and Laravel (_place this in webpack.config.js at root_):

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