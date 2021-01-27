<template>
  <div class="only-top-bar">
    <div class="upper-nav">
      <el-row :gutter="20">
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
    <div>
      <div class="boostrap-navbar">
        <b-nav>
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item>Another Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
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

<style>
.only-top-bar {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.upper-nav {
  /* display: flex; */
  /* justify-content: space-between; */
  /* width: 100%; */
  align-items: center;
  background-color: #545c64;
}
/* .boostrap-navbar {
  width: auto;
} */
.button-drawer {
  /* font-size: 1.5rem;
  border: none; */
  background: white;
  /* margin-right: 2rem; */
}
/* .right-header {

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
} */

.el-row {
  /* margin-bottom: 20px; */
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {

  background-color: #f9fafc;
}
</style>
