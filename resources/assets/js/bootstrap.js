
import Vue from 'vue';

import VueRouter from 'vue-router';

import axios from 'axios';

import bootsrap from 'bootstrap';

import Form from './utilities/Form';



window.Vue = Vue;
window.axios = axios;

window.bootstrap = bootsrap;

window.Form = Form;

Vue.use(VueRouter);

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

