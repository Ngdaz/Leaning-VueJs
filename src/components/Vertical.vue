<template>
  <div class="vertical">

    <el-container>
      <el-aside >
        <nav-SideBar></nav-SideBar>
      </el-aside>
      <el-container class="main-and-header">
        <el-header>
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
export default {
  name: "VerticalLayout",
  components: {
    NavigationBar,
    NavSideBar,
    Drawerbar,
    ContentLayout,
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
