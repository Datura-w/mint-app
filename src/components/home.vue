<template>
  <div class="home">

    <div class="page-wrap">  
      <div>  
        <mt-cell class="page-part" title="当前选中" :value="selected" />  
      </div>  
  
<!-- tabcontainer -->  
      <mt-tab-container class="page-tabbar-container" v-model="selected">
<!-- 首页部分内容   -->
      <div class="head">
        <mt-tab-container-item id="首页">  
           <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
              <template slot="title"><i class="fa fa-bars" aria-hidden="true"></i><p>走进有品位的你</p></template>
              <el-menu-item-group>
                <el-menu-item index="1-1">男生 MEN</el-menu-item>
                <el-menu-item index="1-2">女生 WOMEN</el-menu-item>
                <el-menu-item index="1-3">生活LIFESTYLE</el-menu-item>
              </el-menu-item-group>              
            </el-submenu>
            </el-menu>
            <div class="swipe_a1">
            <mt-swipe :show-indicators="false">
              <mt-swipe-item><img src="./../assets/lunbo1.jpg" width="100%" ></mt-swipe-item>
              <mt-swipe-item><img src="./../assets/lunbo2.jpg" width="100%" ></mt-swipe-item>
              <mt-swipe-item><img src="./../assets/lunbo3.jpg" width="100%" ></mt-swipe-item>
            </mt-swipe> 
            </div> 
            <div class="head_a2">
              <ul>
                <li class="a"><i class="fa fa-gift fa-lg" aria-hidden="true"></i><br /><p>今日新品</p></li>
                <li class="b"><i class="fa fa-female fa-lg" aria-hidden="true"></i><br /><p>人气单品</p></li>
                <li class="c"><i class="fa fa-rebel fa-lg" aria-hidden="true"></i><br /><p>品质生活</p></li>
                <li class="b"><i class="fa fa-university fa-lg" aria-hidden="true"></i><br /><p>都市MC</p></li>
              </ul>
            </div>
            <div class="head_a3">
<!-- 懒加载 -->
            </div>
        </mt-tab-container-item> 
      </div>

<!-- 分类部分内容         -->
        <mt-tab-container-item id="分类">  
          <div class="sort_a">
            <mt-navbar class="page-part" v-model="selected_1">  
              <mt-tab-item id="1">品类</mt-tab-item>  
              <mt-tab-item id="2">品牌</mt-tab-item>  
              <mt-tab-item id="3">动态</mt-tab-item>  
            </mt-navbar>                       
<!-- 品类 -->  
            <mt-tab-container v-model="selected_1">  
              <mt-tab-container-item id="1">  
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                  <el-submenu index="1">
                  <template slot="title"><img src="./../assets/sort_a1.jpg" width="100%" ><h3>女上装</h3></template>
                    <el-menu-item-group>
                      <el-menu-item index="1-1">男生 MEN</el-menu-item>
                      <el-menu-item index="1-2">女生 WOMEN</el-menu-item>
                      <el-menu-item index="1-3">生活LIFESTYLE</el-menu-item>
                    </el-menu-item-group>              
                  </el-submenu>
                  </el-menu> 

                  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                  <el-submenu index="1">
                  <template slot="title"><img src="./../assets/sort_a2.jpg" width="100%" ><span><h3>女下装</h3></span></template>
                    <el-menu-item-group>
                      <el-menu-item index="1-1">男生 MEN</el-menu-item>
                      <el-menu-item index="1-2">女生 WOMEN</el-menu-item>
                      <el-menu-item index="1-3">生活LIFESTYLE</el-menu-item>
                    </el-menu-item-group>              
                  </el-submenu>
                  </el-menu> 
                  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                  <el-submenu index="1">
                  <template slot="title"><img src="./../assets/sort_a3.jpg" width="100%" ><h3>鞋子</h3></template>
                    <el-menu-item-group>
                      <el-menu-item index="1-1">男生 MEN</el-menu-item>
                      <el-menu-item index="1-2">女生 WOMEN</el-menu-item>
                      <el-menu-item index="1-3">生活LIFESTYLE</el-menu-item>
                    </el-menu-item-group>              
                  </el-submenu>
                  </el-menu> 

                  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                  <el-submenu index="1">
                  <template slot="title"><img src="./../assets/sort_a4.jpg" width="100%" ><h3>包包</h3></template>
                    <el-menu-item-group>
                      <el-menu-item index="1-1">男生 MEN</el-menu-item>
                      <el-menu-item index="1-2">女生 WOMEN</el-menu-item>
                      <el-menu-item index="1-3">生活LIFESTYLE</el-menu-item>
                    </el-menu-item-group>              
                  </el-submenu>
                  </el-menu> 
              </mt-tab-container-item>
<!-- 品牌   -->
            <div class="sort_brand">
              <mt-tab-container-item id="2">  
                <mt-index-list>
                  <mt-index-section index="A">
                    <mt-cell title="adidas"></mt-cell>
                  </mt-index-section>
                  <mt-index-section index="c">
                    <mt-cell title="comback"></mt-cell>
                    <mt-cell title="converse 匡威"></mt-cell>
                  </mt-index-section>
                  <mt-index-section index="F">
                  </mt-index-section>
                  <mt-index-section index="G">
                  </mt-index-section>
                   <mt-index-section index="M">
                    <mt-cell title="MANGO 芒果"></mt-cell>
                    <mt-cell title="Meejoan"></mt-cell>
                  </mt-index-section>
                  <mt-index-section index="W">
                    <mt-cell title="WILDFOX 野狐"></mt-cell>
                  </mt-index-section>
                </mt-index-list> 
              </mt-tab-container-item>
            </div> 
<!-- 动态 -->
              <mt-tab-container-item id="3">  
                <mt-cell v-for="n in 6" :title="'选项 ' + n" />  
              </mt-tab-container-item>  
            </mt-tab-container>  
        </div>  
        </mt-tab-container-item> 

<!-- 购物袋部分内容  -->
        <mt-tab-container-item id="购物袋">  
          <mt-cell v-for="n in 7" :title="'发现 ' + n" />  
        </mt-tab-container-item> 

<!-- 我的部分内容  -->
        <mt-tab-container-item id="我的">  
          <div class="page-part">  
           <!-- cell -->  
            <mt-cell v-for="n in 12" :title="'我的 ' + n" />  
          </div>  
          <!-- <router-link to="/">  
            button
            <mt-button type="danger" size="large">退出</mt-button>  
          </router-link>   -->
        </mt-tab-container-item>  
      </mt-tab-container>  
    </div>  


    <div class="tab_a">
      <mt-tabbar v-model="selected">
        <mt-tab-item id="首页">
          <i class="fa fa-home" aria-hidden="true"></i><br />
          <p>首页</p>
        </mt-tab-item>
        <mt-tab-item id="分类">
          <i class="fa fa-th-large" aria-hidden="true"></i><br />
          <p>分类</p>
        </mt-tab-item>
        <mt-tab-item id="购物袋">
           <i class="fa fa-shopping-bag" aria-hidden="true"></i><br />
          <p>购物袋</p>
        </mt-tab-item>
        <mt-tab-item id="我的">
          <i class="fa fa-user" aria-hidden="true"></i><br />
          <p>我的</p>
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      selected: '分类',
      selected_1: '1'
    }
  },
  methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
  }
 // method:{
 //    selected: function (val, oldVal) {
 //        // 这里就可以通过 val 的值变更来确定
 //        console.log(val)
 //    }
 //  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.tab_a .mint-tabbar{
  height: 56px;
  position: fixed;
}
.tab_a .mint-tab-item {
  margin-top: 3px;
}
.tab_a .mint-tabbar > .mint-tab-item.is-selected {
  background-color: #eaeaea;
  color: #333;
}
.tab_a .mint-tab-item i{
  font-size: 16px;
}
.head{
  width: 100%;
}
.head .fa-bars{
  float: left;
  padding-top: 20px;
}
.head.el-submenu p{
  padding-left: 5px;
  padding-top: 0;
}
.swipe_a1{
  width: 100%;
  height: 200px;
}
.head_a2 ul>li{
  width: 50%;
  list-style: none;;
  float: left;
  line-height: 23px;
  margin: 20px 0;
}
.head_a2 ul{
  margin: 0;
  padding: 0;
}
.head_a2 p{
  font-size: 13px;
}
.sort_a .el-menu-item,.sort_a .el-submenu__title {
  padding-left: 0 !important;
  padding: 0 0;
  height: 128px;
}
.sort_a .el-menu-item-group .el-menu-item{
  height: 56px;
}
.sort_a .el-menu-item-group__title{
  padding-top: 0;
}
.sort_a h3{
  position: absolute;
  z-index: 2;
  top: 23px;
  left: 31px;
  text-align: left;
}
.sort_a span h3{
  top: 23px;
  right: 62px;
  text-align: right;
}
.sort_brand{
  width: 100%;
}
.sort_brand .mint-indexsection-index{
  padding: 10px 0;
  text-align: left;

}
.sort_brand .mint-cell-title {
  text-align: left;
}
</style>
