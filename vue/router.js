import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//引用自定义模板vue
import ontop from '../vue/ontop.vue';				//最顶部的样式
import top from '../vue/top.vue';					//导航栏区
import bottom from '../vue/bottom.vue';				//底部网站描述区


import product from '../vue/product.vue'				//middle中显示的产品


import end from '../vue/end.vue'						//top点击在middle中显示的页面
import hot_product from '../vue/hot_product.vue'
import my_collection from '../vue/my_collection.vue'
import global_shoot from '../vue/global_shoot.vue'
import time_shooting from '../vue/time_shooting.vue'
import preview from '../vue/preview.vue'
import help from '../vue/help.vue'
import index from '../vue/index.vue'
import login from '../vue/login.vue'
import register from '../vue/register.vue'
import list from '../vue/list.vue'

var router = new VueRouter({
	  routes:[
			{path:'/',redirect:'/index'},	//访问当前路径，重定向到'index'，二级路径下查找index组件
			{path:'/login',component:login},
			{path:'/register',component:register},
			{path:'top',component:top,
				children:[
					{path:'/hot_product',component:hot_product},			//热卖商品组件
					{path:'/my_collection',component:my_collection},		//我的收藏组件
					{path:'/global_shoot',component:global_shoot},			//全球拍组件
					{path:'/time_shooting',component:time_shooting},		//显示拍组件
					{path:'/preview',component:preview},					//预展组件
					{path:'/help',component:help},							//帮助组件
					{path:'/index',component:index}	,						//首页组件
					{path:'/end',component:end},
					{path:'/list',component:list},
				]
			}
	] 
	
});

//将路由暴露出去，以便其他组件进行引用
export default router ;