<template>
  <div class="vertical">
    <el-container :class="{ container: isCheckLayout }">
      <el-aside :width="withSideBar">
        <nav-SideBar></nav-SideBar>
      </el-aside>
      <el-container>
        <el-header>
          <navigation-Bar></navigation-Bar>
        </el-header>
        <el-main>
          <content-layout></content-layout>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavigationBar from "./Navigation";
import NavSideBar from "./SideBar";

import ContentLayout from "./content.vue";
import { mapState } from "vuex";
export default {
  name: "VerticalLayout",
  components: {
    NavigationBar,
    NavSideBar,

    ContentLayout,
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.isCollapse,
    }),

    ...mapState({
      isCheckLayout: (state) => state.layouttype,
    }),

    withSideBar() {
      const num = this.isCollapse ? 65 : 200;
      return num + "px";
    },
  },
};
</script>

<style>
/* .vertical{
     height: 100vh;
    }
.main-and-header{
    display: flex;
    flex-direction: column;
} */
</style>
