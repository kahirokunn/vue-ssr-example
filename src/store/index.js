import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export function createStore() {
	return new Vuex.Store({
		state: {
			count: 0
		},
		mutations: {
			set(state, value) {
				state.count = value;
			},
			inc(state) {
				state.count += 10;
			},
			dec(state) {
				state.count -= 10;
			}
		}
	})
}
