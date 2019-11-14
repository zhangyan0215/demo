<template>
	<div>
		<div class="show_img">
			<img src="../image/background.jpg"/>
		</div>
		<div  class="show_img">
			<img src="../image/background.jpg"/>
		</div>
		<div  class="show_img">
			<img src="../image/background.jpg"/>
		</div>
		<div  class="show_img">
			<img src="../image/background.jpg"/>
		</div>
		<div class="show_img">
			<img src="../image/background.jpg"/>
		</div>
		<div  class="show_img">
			<img src="../image/background.jpg"/>
		</div>
		<div  class="show_img">
			<img src="../image/background.jpg"/>
		</div>
		<div  class="show_img">
			<img src="../image/background.jpg"/>
		</div>
		<div class="show_img">
			<img src="../image/background.jpg"/>
		</div>
		<div  class="show_img">
			<img src="../image/background.jpg"/>
		</div>
		<div  class="show_img">
			<img src="../image/background.jpg"/>
		</div>
		<div  class="show_img">
			<img src="../image/background.jpg"/>
		</div>
		<div class="show_img">
			<img src="../image/background.jpg"/>
		</div>
		<div  class="show_img">
			<img src="../image/background.jpg"/>
		</div>
		<div  class="show_img">
			<img src="../image/background.jpg"/>
		</div>
		<div  class="show_img">
			<img src="../image/background.jpg"/>
		</div>	
	</div>
</template> 

<script>
	export default {
		data(){
			return {
				list:[] //查询出的数据
			};
		},
		created() {
			this.findLikeNameAndCity();
		},
		methods:{
			findLikeNameAndCity(){
				console.log('list..................' +this.$parent.productName + ";" +this.$parent.addName);
				let data = {"cityName":this.$parent.addName,"pname":this.$parent.productName};
				axios({
					method:'post',
					url:'http://192.168.9.174:8800/paipai/products/findLikeNameAndCity',
					data:qs.stringify(data),
				}).then((result) =>{
					this.list = result.data;
					console.log(this.list+"-----------list")
				})
			}
		}
		
	}
</script>

<style scoped="scoped">
	.show_img{
		position: relative;
		float: left;
		width: 250px;
		margin-left: 20px;
		margin-top: 20px;
	}
	img{
		width: 250px;
		height: auto;
		
	}
</style>
