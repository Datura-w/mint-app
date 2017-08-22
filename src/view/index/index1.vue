<template>
  <div class="index1">
    <div class="page-wrap">  
      <div>  
        <mt-cell class="page-part" title="当前选中" :value="selected" />  
      </div>  
      <mt-tab-container class="page-tabbar-container" v-model="selected">
<!-- 首页部分内容   -->
      <div class="head">
        <mt-tab-container-item id="首页">  
        <Home></Home>
        </mt-tab-container-item> 
      </div>
<!-- 分类部分内容         -->
        <mt-tab-container-item id="分类">  
        <Sort></Sort> 
        </mt-tab-container-item> 
<!-- 购物袋部分内容  -->
        <mt-tab-container-item id="购物袋">  
          <Shop></Shop>  
        </mt-tab-container-item> 
<!-- 我的部分内容  -->
        <mt-tab-container-item id="我的">  
          <Myself></Myself>
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
import Home from '@/view/home/home1'
import Sort from '@/view/sort/sort1'
import Shop from '@/view/shop-car/shop-car1'
import Myself from '@/view/myself/myself1'

export default {
  components:{Home,Sort,Shop,Myself},
  data () {
    return {
      selected: '购物袋',
      value: '',  
    }
  }
}
</script>

<style>
.tab_a .mint-tabbar{
  height: 56px;
  position: fixed;
  z-index: 2;
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
</style>
