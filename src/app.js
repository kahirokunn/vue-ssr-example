import Vue from 'vue'
import { createRouter } from "./router";
import { createStore } from "./store/index";
import { sync } from "vuex-router-sync";

export function createApp() {

	const router = createRouter();
	const store = createStore();

	sync(store, router);

	const app = new Vue({

		router,
		store,
		render: h => h('router-view')

	});
	return { app, router, store }
}
