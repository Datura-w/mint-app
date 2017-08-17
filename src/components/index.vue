<template>
  <div class="index">
    <p>HMABC新品特惠</p>
    <div class="change-btn">
      <mt-button size="normal">男生 MEN</mt-button><br />
      <mt-button size="normal">女生 WOMEN</mt-button>
    </div>
    <span>满400减100元</span>
  </div>
</template>

<script>
//全局引入Toast
import { Toast } from 'mint-ui';

export default {
  name: 'hello',
  data () {
    return {
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}*/
.index{
  background: url("./../assets/home.jpg") no-repeat;
  background-size:100% 667px;
 /* height: 667px;*/
}
.index p{
  margin: 0px;
  padding-top: 6px;
}
.change-btn{
  padding-top: 50%;
  padding-bottom: 34%;
}
.change-btn .mint-button--normal{
  margin-bottom: 60px;
}
.index span{  
  font-size: 28px;
}


</style>
