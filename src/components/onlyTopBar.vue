<template>
  <el-container class="container-topbar">
    <el-header class="only-top-bar">
      <div class="upper-nav">
        <el-row :gutter="20" class="m-0">
          <el-col :span="6"
            ><div class="grid-content bg-purple">
              <el-input
                class="nav-input"
                placeholder="Please input"
                v-model="input"
                clearable
              >
              </el-input></div
          ></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple">
              <el-button
                class="button-drawer"
                @click="drawerCollapse()"
                icon="el-icon-s-tools"
              >
              </el-button></div
          ></el-col>
        </el-row>
      </div>  
      <Drawerbar />
    </el-header>
    <el-main class="content-main">
      <content-layout></content-layout>
    </el-main>
  </el-container>
</template>

<script>
import Drawerbar from "./drawer";
import { mapMutations } from "vuex";
import ContentLayout from "./content.vue";
export default {
  components: {
    ContentLayout,
    Drawerbar,
  },
  name: "OnlyTopBar",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    ...mapMutations(["drawerCollapse"]),
  },
  //   import component
  computed: {},
};
</script>

