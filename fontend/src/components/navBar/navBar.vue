
<template>
  <div class="navBar">
    <el-menu class="el-menu-vertical-demo" :default-active="defaultActive" :collapse="isCollapse" background-color="#002140" text-color="#fff" active-text-color="#409EFF" router unique-opened>
      <div class="logoContainer" v-show="!isCollapse">
        <img class="logo" src="~@/assets/images/logo.svg" alt="" height="40" width="40" />
        <div class="title">{{title}}</div>
      </div>
      <div class="miniLogoContainer" v-show="isCollapse"><img class="miniLogo" src="~@/assets/images/logo.svg" alt="" height="40" width="40" /></div>
    
      <template v-for="(item,index) in $router.options.routes[1].children">
        <el-submenu :index="item.path" v-if="item.children&&item.children.length>0" :key="index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </template>
          <el-menu-item v-for="(child,idx) in item.children" :index="child.path" :key='idx'>{{child.name}}</el-menu-item>
        </el-submenu>
        <el-menu-item :index="item.path" v-if="!item.children" :key="index">
          <i :class="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
// #545c64
export default {
  data(){
    return {
      title: '后台管理系统',
    }
  },
  computed: {
    defaultActive() {
      let path;
      if (this.$route.path.lastIndexOf('/') !== 0) {
        path = this.$route.path.substring(0, this.$route.path.lastIndexOf('/'));
      } else {
        path = this.$route.path;
      }
      return path;
    },
    ...mapGetters(['isCollapse'])
  }
};
</script>
<style lang="stylus" scoped>
.logoContainer{
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #011930;
  .logo{
    flex: 1;
  }
  .title{
    flex: 3;
    display: inline-block;
    color: #ffffff;
  }
}
.miniLogoContainer{
  width: 64px;
  height: 100px;
  background-color: #011930;
  text-align: center;
  .miniLogo{
    margin-top: 50px;
    transform: translateY(-50%);
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu-vertical-demo {
  height: 100%;
}
</style>
