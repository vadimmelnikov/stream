import VueRouter from 'vue-router';


let routes = [
	{
		path: '/',

		component: require('./view/home')
	},
	{
		path: '/about',
		component: require('./view/About')
	},
	{
		path: '/contact',
		component: require('./view/Contact')
	}
];


export default new VueRouter ({
	routes,

	linkActiveClass: 'active'
});