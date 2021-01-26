<template>
  <div class="only-top-bar">
    <div class="upper-nav">
      <el-input
        class="nav-input"
        placeholder="Please input"
        v-model="input"
        clearable
      >
      </el-input>
      <div class="right-header">
        <el-button
          class="button-drawer"
          @click="drawerCollapse()"
          icon="el-icon-s-tools"
        >
        </el-button>
      </div>
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
  display: flex;
  justify-content: space-between;
  width: auto;
  background-color: #545c64;
}
.boostrap-navbar {
  width: auto;
}
.button-drawer {
  font-size: 1.5rem;
  border: none;
  background: white;
  margin-left: 2rem;
}
.right-header {
  /* float: right !important; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
}
.nav-input {
  width: 20rem;
  margin-left: 10px;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
