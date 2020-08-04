<template>
  <div id="app">
    <el-container v-if="$route.meta.keepalive">
      <el-header class="header">
        <keep-alive>
          <v_Header></v_Header>
        </keep-alive>
      </el-header>

          <el-main>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </el-main>
          <el-footer style=" padding-left: 0px;padding-right: 0px;">
            <v_footer></v_footer>
          </el-footer>
        </el-container>

    <router-view v-if="!$route.meta.keepalive"></router-view>
  </div>
</template>

<script>
import LeftMenu from "./components/LeftMenu"
import Header from "./components/Header"
import  Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    'v_Header': Header,
    'v_leftmenu': LeftMenu,
    'v_footer': Footer
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #02080e;
  }
  .header{
    line-height: 80px;
    background-color: white;
    color: white;
    padding-left: 0px;
  }




</style>
