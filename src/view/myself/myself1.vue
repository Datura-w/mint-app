<template>
  <div class="my">
  	<mt-header title="我的">
	 <!--  <router-link to="/" slot="left">
	    <mt-button icon="back">back</mt-button>
	  </router-link>
	  <mt-button icon="more" slot="right"></mt-button> -->
	</mt-header>
	<div class="my_a"><img src="./../../assets/my_a.jpg"></div>
  
  <div class="my_b">
  	<el-row>
	  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
	  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
  </div>
  </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my header{
  height: 46px;
  color: #333;
  background-color: #eef1f6;
}
.my_a{
  width: 100%;
  height: 115px;
}
.my_a img{
  width: 60px;
  border-radius: 30px;
  margin: 27px 0;
}

</style>
