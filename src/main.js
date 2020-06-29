import Vue from 'vue';
import App from './App.vue';
import {
	MdField,
	MdButton,
	MdContent,
	MdTabs,
	MdList,
	MdCard,
	MdCheckbox
} from 'vue-material/dist/components';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(VueMaterial);
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdField);
Vue.use(MdList);
Vue.use(MdCard);
Vue.use(MdCheckbox);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App)
}).$mount('#app');
