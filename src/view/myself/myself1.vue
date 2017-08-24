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
	  <el-col :span="8">
	    <div class="grid-content bg-purple"><i class="fa fa-heart-o" aria-hidden="true"></i><p>我的关注</p></div>
	  </el-col>
	  <el-col :span="8">
	    <div class="grid-content bg-purple-light"><i class="fa fa-star-o" aria-hidden="true"></i><p>我的收藏</p></div>
	  </el-col>
	  <el-col :span="8">
	    <div class="grid-content bg-purple"><i class="fa fa-map-marker" aria-hidden="true"></i><p>我的足迹</p></div>
	  </el-col>
	</el-row>
  </div>
  <div class="my_c">
	<el-row :gutter="24">
	  <el-col :span="12"><div class="grid-content bg-purple"><div class="my_l">我的订单</div></div></el-col>
	  <el-col :span="12"><div class="grid-content bg-purple"><div class="my_r"><p>查看更多订单</p></div></div></el-col>
	</el-row>
  </div>
  <div class="my_d">
   	<ul>
   		<li><i class="fa fa-credit-card" aria-hidden="true"></i></li>
   		<li><i class="fa fa-calendar-o" aria-hidden="true"></i></li>
   		<li><i class="fa fa-truck" aria-hidden="true"></i></li>
   		<li><i class="fa fa-pencil-square-o" aria-hidden="true"></i></i></li>
   		<li><i class="fa fa-jpy" aria-hidden="true"></i></li>
   	</ul> 
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
.my_b{
  border-bottom:12px solid #eef1f6;
}
.my_b .el-row {
  &:last-child {
    margin-bottom: 0;
  }
}
.my_b .grid-content {
  min-height: 50px;
}
.my_ b .row-bg {
  padding: 10px 0;
}
.my_b p,.my_c p{
  font-size:13px;
  color: #909497;
  margin: 0;
}
.my_b .fa-heart-o,.my_b .fa-star-o,.my_b .fa-map-marker{
  color: #909497;
}
.my_c.el-row {
  &:last-child {
    margin-bottom: 0;
  }
}
.my_c .grid-content {
  min-height: 30px;
}
.my_c{
  border-bottom:1px solid #eef1f6;
}
.my_c div{
  padding-top: 2px;
}
.my_c .my_l{
  text-align: left;
  padding-left: 15px;
  color: #333;
  font-size: 15px;
}
.my_c .my_r{
  text-align: right;
  padding-right: 15px;
}
.my_d ul{
  width: 100%;
  padding:0;
}
.my_d ul>li{
  width: 20%;
  float: left;
}
</style>
