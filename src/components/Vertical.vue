<template>
  <div class="vertical">

    <el-container>
      <el-aside  :width="withSideBar">
        <nav-SideBar></nav-SideBar>
      </el-aside>
      <el-container>
        <el-header class="bg-secondary">
            <navigation-Bar></navigation-Bar>
        </el-header>
        <el-main>
          <content-layout></content-layout>
        </el-main>
        <Drawerbar />
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavigationBar from "./Navigation";
import NavSideBar from "./SideBar";
import Drawerbar from "./drawer";
import ContentLayout from "./content.vue";
import { mapState } from 'vuex';
export default {
  name: "VerticalLayout",
  components: {
    NavigationBar,
    NavSideBar,
    Drawerbar,
    ContentLayout,
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.isCollapse
    }),

    withSideBar() {
      const num = this.isCollapse ? 65 : 200
      return num + "px"
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
