<template>
     <!-- 使用路由返回上一级 -->
    <div class="login">
      <mt-header title="登录">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button slot="right">忘记密码</mt-button>
      </mt-header>
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
.login header{
  height: 46px;
  color: #333;
  background-color: #eef1f6;
}


</style>
