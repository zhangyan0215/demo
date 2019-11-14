import $ from 'jquery';
import 'bootstrap3/dist/css/bootstrap.css';
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import layer from "layui-layer";
import axios from "axios";
import ajax from "ajax";
import qs from 'qs';						//用户解决axios发送post请求，后台接受不到参数的问题

window.$ = $;
window.$ = jQuery;
window.Vue = Vue;
window.axios = axios;
window.qs = qs;

//使用路由
Vue.use(VueRouter);

//导入渲染组件
import router from '../vue/router.js';
//导入主组件
import ontop from '../vue/ontop.vue';
		
// 让axios的所有请求，都携带cookie
axios.defaults.withCredentials=true;

axios.defaults.baseURL = "http://localhost/";

//注册vue 
var app = new Vue({ 
	el:'#app',
	//进行渲染
	render:function(c){
		return c(ontop);
	},
	router
})  