<template>
	<div>
		<div id="on_top">
			<ul class="title_left">
				<li>
					<router-link to="/index">商城首页</router-link>
				</li>
				<li>&nbsp;|&nbsp;</li>
				<li>
					<a href='#'>网站后台</a>
				</li>
				<li>&nbsp;|&nbsp;</li>
				<li>
					<!-- <a href='#'>问题反馈</a> -->
					<a @click.prevent="f1">问题反馈</a>
				</li> 
			</ul>
			
			<!--登录模块-->
			<ul class="title_right">
				<li>
					<router-link to='/login'>登录</router-link>
				</li>
				<li>&nbsp;|&nbsp;</li>
				<li>
					<router-link to='/register'>注册</router-link>
				</li>
			</ul>
		</div>
		<div id='zong'>
			<router-view></router-view>
		</div>
		<!-- <div id="bottom">
			<br> 
			<div class="warning">
				违法和不良信息举报电话：110，本网站所列数据，除特殊说明，所有数据均出自蜗牛拍拍项目组测试
			</div>
		</div> -->
	</div>
</template>

<script>
	export default{
		methods:{
			f1(){
				//询问框
				layer.confirm('项目开发时间紧急，如有不完善的地方，敬请谅解', {
				  btn: ['取消','确定'] //按钮
				});
			}
		}
	}
</script>

<style scoped="scoped">
	#bottom{
		/* margin-top: 480px; */
		background-color: aliceblue;
		height: 80px;
		width: 100%;
		text-align: center;
		position: fixed;
		bottom: 0;
	}
	#on_top{
		background-color: darkslategrey;
		height: 40px;
		width: 100%;
	}
	.title_left{
		list-style: none;
		margin-left: 10%;
		line-height: 40px;
		text-align: center;
	}
	.title_right{
		list-style: none;
		margin-left: 80%;
		line-height: 40px;
		text-align: center;
	}
	li{
		float: left;
		color: aliceblue;
	}
	a{
		color: #C0C0C0;
		text-decoration: none;
		font-size: 13px;
	}
	a:hover{
		color:white;
	}
</style>
