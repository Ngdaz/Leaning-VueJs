<template>
  <div class="content">
    <div class="top-bar">
      <div>
        <el-button @click="menuCollapse()" class="btn-collapse">
          <i class="el-icon-s-fold"></i>
        </el-button>
      </div>
      <div class="nav-header">
        <el-input  class="nav-input" placeholder="Please input"  clearable>
        </el-input>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          
        >
          <el-menu-item index="1">Processing Center</el-menu-item>
          <el-submenu index="2">
            <template slot="title">Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>Info</el-menu-item>
          <el-menu-item index="4"
            ><a href="https://www.ele.me" target="_blank"
              >Orders</a
            ></el-menu-item
          >
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "navbar",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    menuCollapse() {
      this.$store.commit("menuCollapse");
    },
  },
  computed: mapState(["isCollapse"]),
};
</script>

<style>
.top-bar {
  display: flex;
  height: 70px;
  width: ;
  margin: 0 auto;
}
.btn-collapse {
  border: none;
  background: none;
  font-size: 2rem;
  height: 70px;
}
.content {
  /* width: calc(100vw - 200px); */
  width: 100%;
}
.nav-header{
  display: flex;
  justify-content: space-between;
  width: 100%;
  
}
.nav-input{
  width: 20rem;
  margin-left: 10px;
  margin-top: auto;
  margin-bottom: auto   ;
}
.el-menu-demo{
  float: right !important;;
}
</style>
