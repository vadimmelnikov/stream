import examplecomponent from './components/ExampleComponent'
import inputcustom from './components/input'
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('coupon', {
	props: ['value'],
	template: `
		<input type="text" :value="value" @input="updateCode($event.target.value)" ref="input">
	`,
	data(){
		return{
			invalids: ['ALLFREE', 'ALLNOTFREE']
		}
	},
	methods:{
		updateCode(value){

			if (this.invalids.includes(value)){
				alert("this copoun doesn't work");
				this.$refs.input.value = value ='';

			}

			this.$emit('input', value);

		}
	}
});
new Vue({
	el: '#inputCustom',
	data: {
		coupon: 'FREEBIES'
	}
});


let store = {
	user:{
		name: 'Vadim'
	}
};

new Vue({
    el: '#one',
    data: {
    	foo: 'bar',
    	shared: store
	}
});

new Vue ({
    el: '#two',
    data: {
    	foo: 'other',
    	shared: store
	}
});
