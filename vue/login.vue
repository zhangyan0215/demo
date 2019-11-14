<template>
	<div>
		<div id="lg">
			<img src="../image/login_bg.png"/>
		</div>
		<div id="login">
			<div>
				<div style="margin-left: 10px; float: left;">
					<h4><span>拍拍用户登录</span></h4>
				</div>
				<div style="margin-left: 170px; margin-right: 10px; height: 30px; border: #2F4F4F solid 1px;">
					<h6><span>您还不是我们会员？</span><a href="#"><span>立即注册</span></a></h6>
				</div>
			</div>
			<div>
				<hr color="#FF0000" size="4"/>
			</div>
			<div style="margin-left: 10px;">
				&nbsp;<span>用户名</span><input class="shurukuang" type="text" ref="user"   placeholder="请输入你的账号"  v-model="username"/><br /><br /><br />
				&nbsp;<span>密&nbsp;&nbsp;码</span>&nbsp;<input class="shurukuang" type="password"  placeholder="请输入你的密码" v-model="password" @keyup.enter="sub"/><br />
				<button class="btn btn-info button" type="button"  @click="login">登录</button>
			</div>
		</div>
	</div>
</template>

<script>
	import ajax from "ajax";
	export default{
		data(){
			return{
				username:"",
				password:"",
			}
			
		},
		methods:{
			login(){
				$.ajax({
					method:"get",
					url:"http://localhost/users/login",
					data:{"username":this.username,"password":this.password},
					success:(data)=>{
						if(data=="login"){
							layer.msg("账号密码有误！");
							this.username="";
							this.password="";
							this.$refs.user.focus();
						}else{
							this.$router.push("/index");
						} 
						console.log(data);
					}
				})
			},
			sub(){
				this.login();
			}
		}
	}
</script>

<style scoped="scoped"> 
	span {
		/* float: left;
		margin-top: 10px; */
		color: whitesmoke
	}
	#lg{
		/* background-color: aqua;
		height: 500px; */
		border: #2F4F4F solid 0px;
		margin-left: 110px;
		margin-top: 80px;
		width: 50%;
		float: left;
		position: relative;
	}
	#login{
		background-color:#2F4F4F;
		margin-top: 150px;
		width: 25%;
		height: 400px;
		border: #000000 solid 1px;
		float: left;
		position: relative;
	}
	.shurukuang,
	.yanzhengma {
		color: #000000;
		font-family: "微软雅黑";
		border-radius: 5px;
		width: 200px;
	}
	.button{
		margin-top: 50px;
		margin-left: 10px;
		width: 300px;
		height: 40px;
	}
	.input{
		width: 80px;
	}
</style>
