import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore() {
	const store = new Vuex.Store({
		state: {
			config : {
				title : "DEMULATOR",
				footer : "DEMULATION all rights reserved"
			}
		},
		mutations: {
		},
		actions: {
		},
		modules: {
		}
	});
	return store;
}