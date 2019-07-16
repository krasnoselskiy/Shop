import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material'

import { routes } from './routes';
import store from './stores/store';

import VueFirestore from 'vue-firestore'
import { firebaseListener } from './config/firebaseConfig';

import 'vue-material/dist/vue-material.min.css'
import './assets/styles/app.scss'

import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(VueFirestore);


firebaseListener(authStatusChange);


const router = new VueRouter({
	mode: 'history',
	routes
});

// router.beforeEach((to, from, next) => {
//     if (to.onlyGuest && store.getters.isLoggedIn) {
//         next('/');
//     } else {
//         next();
//     }
// });


new Vue({
  el: '#app',
  router,
  store,
	render: h => h(App)
})

function authStatusChange(loggedIn, user) {
	if (store) {
		store.commit('AUTH_STATUS_CHANGE');
		if (user) {
			store.dispatch('getShoppingCart', {uid: user.uid, currentCart: store.getters.cartItemList});
		}
	}
}
