<template>
	<div id="top">
		<div id="top1">
			<!--设置logo-->
			<div class="image">
				<router-link to='/index'>
					<img src="../image/logo.jpg" width="100px" height="100px" />
				</router-link>
			</div>

			<!--设置导航-->
			<div>
				<ul class="daohang">
					<li>
						<a>
							<router-link to='/hot_product'>热门拍卖</router-link>
						</a>
					</li>
					<li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
					<li>
						<a>
							<router-link to='/my_collection'>我的收藏</router-link>
						</a>
					</li>
					<li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
					<li>
						<a>
							<router-link to='/global_shoot'>全球拍</router-link>
						</a>
					</li>
					<li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
					<li>
						<a>
							<router-link to='/time_shooting'>限时拍</router-link>
						</a>
					</li>
					<li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
					<li>
						<a>
							<router-link to='/preview'>预展</router-link>
						</a>
					</li>
					<li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
					<li>
						<a>
							<router-link to='/end'>一降到底</router-link>
						</a>
					</li>
					<li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
					<li>
						<a>
							<router-link to='/help'>帮助</router-link>
						</a>
					</li>
				</ul>
			</div>

			<!--商品搜索div-->
			<div class='query'>
				<form>
					<input type="text" name='address' style="border-right-style: none;" placeholder='区域' v-model="addName">		<!--根据区域查询-->
					<input type="text" name='product_name' style="border-left-style: none;" placeholder='拍品名称' v-model="productName">		<!--根据商品名查询-->
					<input id='button' type="button" value="搜索" @click="query()"/>
				</form>
			</div>
		</div>
		<div id="show">
			<router-view ref='xx'></router-view>
		</div>
		<div id="bottom">
			<br> 
			<div class="warning">
				违法和不良信息举报电话：110，本网站所列数据，除特殊说明，所有数据均出自蜗牛拍拍项目组测试
			</div>
		</div>
	</div>
</template>

<script>
	//相当于var veu = new Vue({})
	export default {
		data () {
			return {
				//定义参数，
				addName:'',				//区域地址名
				productName:'',			//拍品名称
			}
		},
		methods:{
			//查询方法
			query(){
				//获取访问路径
				var path = this.$route.path;
				console.log('.....................................' + path)
				if(path != '/list'){
					//重定向到list组件中
					this.$router.push('/list');
				}else{
					this.$refs.xx.findLikeNameAndCity();
				}
			}
		}
	}
	 
</script>

<style scoped="scoped">
	#bottom{
		/* margin-top: 480px; */
		background-color: aliceblue;
		line-height: 25px;
		width: 100%;
		bottom:0;
		left: 0;
		text-align: center;
		position: fixed;
		
	}
	#top {
		height: 100px;
		width: 100%;
		margin-top: 30px;
		position: absolute;
		position:static;
	}
	
	#top1{
		margin-top: 100px;
		margin: 0 auto;
		width: 1100px;
		height: 100px;
		position: absolute;
		position:static;
	}
	
	#show{
		/* margin-top: 400px; */
		width: 1100px;
		/* height: 500px; */
		margin:0 0 150px 242px;
		position:absolute;
		text-align:center;
	}

	.image {
		float: left;
	}

	.daohang {
		margin-left: 50px;
		float: left;
	}

	ul {
		text-align: center;
		height: 100%;
		height: 70px;
	}

	li {
		list-style: none;
		float: left;
		text-align: center;
		margin-top: 40px;
	}

	a {
		text-decoration: none;
		font-size: 20px;
		color: black;
	}

	a:hover {
		color: red;
	}

	.query {
		margin-left: 70px;
		margin-top: 35px;
		float: left;
	}

	input {
		height: 45px;
		width: 80px;
		float: left;
		border-bottom-style: none;
	}
</style>
