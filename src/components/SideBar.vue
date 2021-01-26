<template>
<div class="sidebar">

  <div> 
    <el-menu

      default-active="2"
      class="el-menu-vertical-demo"
       background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
    >
      <el-menu-item index="0" class="m-0"> 
        <Logo-layout></Logo-layout>
       </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">Navigator One</span>
        </template>
        <el-menu-item-group>
          <span slot="title">Group One</span>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item> 
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">item four</span>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </div>
  </div>
</template>



<script>
// import LogoLayout from './logo'
// import { mapGetters } from 'vuex';
import { mapState} from 'vuex';
import logolayout from './logo.vue';

export default {
  components: {
    "Logo-layout": logolayout,
  },
  name: "SideBar",
  // data() {
  //   return {
  //     isCollapse: false,
  //   };
  // },
  methods: {
    // menuCollapse() {
    //     this.isCollapse = !this.isCollapse
    //     console.log(this.isCollapse);
        
    // }
  },
  computed: mapState({
    isCollapse: state => state.isCollapse
  })
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  /* min-height: 400px; */
  height: 100vh;
}

.el-menu--collapse {
  height: 100vh;
}
.sidebar{
  display: flex;
  flex-direction: column;
  height: 100vh;
}

</style>