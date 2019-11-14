<template>
	<div id="register">
		<form class="smart-green">
			<h1>拍拍会员注册
				<span>请填写你的信息.</span>
			</h1>
			<label>
				<div>
				<span>
					<font color="wheat" size="4">注册身份 :</font>
					<font color="wheat">卖家</font><input value="4" type="radio" v-model="rid" class="error" />
					<font color="wheat">买家</font><input value="3" type="radio" v-model="rid" class="error" />
				</span><br />
				
			</div>
				<div class="error-msg"></div>
			</label>
			<label>
				<span>用户名 :</span>
				<input id="name" type="text" v-model="username" class="error" placeholder="请输入您的姓名" />
			</label>

			<label>
				<span>密码 :</span>
				<input id="password" type="text" v-model="password" class="error" placeholder="请输入您的密码" />
				<div class="error-msg"></div>
			</label>

			<label>
				<span>&nbsp;</span>
				<!-- <label class=""> --><button type="button" class="btn btn-info button" @click="save">注册</button><!-- </label> -->
			</label>
		</form>
</div>
</template>

<script>
	export default {
		data(){
			return{
				rid:"",
				username:"",
				password:"",
			}
		},
		methods:{
			save(){
				if(this.rid==''){
					layer.msg("请填写注册身份!");
				}else{ 
					axios.post("/users/"+this.rid,{
						username:this.username,
						password:this.password,
					})
					.then((response)=>{
						layer.msg("注册成功！！");
						this.username=this.rid=this.password="";
					})
				 } 
				
			}
		}
	}
</script>

<style scoped="scoped">
	#register{
		margin-top: 120px;
		/* border: #000000 solid 1px; */
	}
	.smart-green {
		margin-left: auto;
		margin-right: auto;
		max-width: 500px;
		background: #2F4F4F;
		padding: 30px 30px 20px 30px;
		font: 12px Arial, Helvetica, sans-serif;
		color: #666;
		border-radius: 5px;
		-webkit-border-radius: 5px;
		-moz-border-radius: 5px;
	}

	.smart-green h1 {
		font: 24px "Trebuchet MS", Arial, Helvetica, sans-serif;
		padding: 20px 0px 20px 40px;
		display: block;
		margin: -30px -30px 10px -30px;
		color: #FFF;
		background: #2F4F4F;
		text-shadow: 1px 1px 1px #949494;
		border-radius: 5px 5px 0px 0px;
		-webkit-border-radius: 5px 5px 0px 0px;
		-moz-border-radius: 5px 5px 0px 0px;
		border-bottom: 1px solid #89AF4C;
	}

	.smart-green h1>span {
		display: block;
		font-size: 11px;
		color: #FFF;
	}

	.smart-green label {
		display: block;
		margin: 0px 0px 5px;
	}

	.smart-green label>span {
		float: left;
		margin-top: 10px;
		color: whitesmoke
	}

	.smart-green input[type="text"],
	.smart-green input[type="email"],
	.smart-green textarea,
	.smart-green select {
		color: #555;
		height: 30px;
		line-height: 15px;
		width: 100%;
		padding: 0px 0px 0px 10px;
		margin-top: 2px;
		border: 1px solid #E5E5E5;
		background: #FBFBFB;
		outline: 0;
		-webkit-box-shadow: inset 1px 1px 2px rgba(238, 238, 238, 0.2);
		box-shadow: inset 1px 1px 2px rgba(238, 238, 238, 0.2);
		font: normal 14px/14px Arial, Helvetica, sans-serif;
	}

	.smart-green textarea {
		height: 100px;
		padding-top: 10px;
	}


	.smart-green .button {
		background-color: #9DC45F;
		border-radius: 5px;
		-webkit-border-radius: 5px;
		-moz-border-border-radius: 5px;
		border: none;
		padding: 10px 25px 10px 25px;
		color: #FFF;
		text-shadow: 1px 1px 1px #949494;
	}

	.smart-green .button:hover {
		background-color: #80A24A;
	}

 	.error-msg {
		color: red;
		margin-top: 10px;
	} 

	.success-msg {
		color: #80A24A;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	
	.button{
		margin-top: 50px;
		margin-left: 10px;
		width: 400px;
		height: 40px;
	}
</style>
