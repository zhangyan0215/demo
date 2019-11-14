<template>
	<div>
		<!-- <router-view name='top'></router-view> -->
		<img src="../image/index.jpg" />
	</div>
</template>

<script>
	/* export default{
		beforeCreate() {
			axios.post("/users/isLogin")
			.then(response=>{
				console.log(response);
				if(!response.data.isLogin){
					/* this.$router.push("/login"); 
				}
			});
		}
	} */
</script>

<style scoped="">
	div{
		width:100%;
		height: inherit;
	}
	img{
		width:100%;
		height: 100%;
		position: absolute;
		  position:static;
	}
</style>
