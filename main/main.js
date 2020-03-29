// ^import_source
import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import App from './App';
import routes from 'main/route/index';
import stores from 'main/store/index';
import axios from 'main/common/ajax/config';
import utils from '../utils';
import Lang from 'lang';
import 'normalize.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// $import_source

Vue.config.productionTip = false;
// ^use_source
Vue.use(Lang);
Vue.use(utils);
Vue.use(Router);
const router =  new Router({
	routes: routes
});
Vue.use(Vuex);
const store = new Vuex.Store({
	modules: stores
});
Vue.use(ElementUI);
// $use_source

axios.get('main/static/config/global.json').then((res) => {
	Vue.prototype.g_Config = res.data;
	axios.setConfig(Vue.prototype.g_Config);
	new Vue({
		el: '#app',
		router,
		store,
		template: '<App/>',
		components: {App}
	});
}).catch((err) => {
	window.alert(err);
});

