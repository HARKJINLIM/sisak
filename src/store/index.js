import Vue from 'vue'
import Vuex from 'vuex'
//calling modules from../store/module
//When you make an additional module, need to create in ../module/user.js
import modules from "./modules";

Vue.use(Vuex)

export function createStore() {
	const store = new Vuex.Store({
		state: {
			config: {
				title: "DEMULATOR",
				footer: "DEMULATOR all rights reserved",
				menu: [
					{
						title: "Home",
						icon: "mdi-home",
						to: '/',
						grant: 0,
						newTab: false,
						subItems: [
							{
								title: "Menu1",
								icon: "mdi-home",
								to: '/menu1',
								grant: 0,
								newTab: false,
								subItems: [
									{
										title: "Menu1-1",
										icon: "mdi-home",
										to: '/menu1-1',
										grant: 0,
										newTab: false,
										subItems: []
									},
									{
										title: "Menu1-2",
										icon: "mdi-home",
										to: '/menu1-1',
										grant: 0,
										newTab: false,
										subItems: []
									},
								]
							},
							{
								title: "Menu2",
								icon: "mdi-home",
								to: '/menu2',
								grant: 0,
								newTab: false,
								subItems: []
							},
						]
					},
					{
						title: "About",
						icon: "mdi-help",
						to: '/about',
						grant: 0,
						newTab: false,
						subItems: []
					},
					{
						title: "Test",
						icon: "mdi-home",
						to: '/test',
						grant: 0,
						newTab: false,
						subItems: []
					},
				]
			}
		},
		mutations: {
		},
		actions: {
		},
		modules,
	});
	return store;
}