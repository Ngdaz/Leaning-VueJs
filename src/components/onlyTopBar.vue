<template>
  <div class="only-top-bar">
    <div class="boostrap-navbar">
      <b-nav>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </div>
        <div class="right-header">
        <el-button
            class="button-drawer"
            @click="drawerCollapse()"
            icon="el-icon-s-tools"
        >
      </el-button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "OnlyTopBar",
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["drawerCollapse"]),
  },
  //   import component
  computed: {

  }

};
</script>

<style>
.only-top-bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.boostrap-navbar {
  width: auto;
}
.button-drawer {
  font-size: 1.5rem;
  border: none;
  background: none;
  margin-left: 2rem;
}
.right-header {
  /* float: right !important; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
}
</style>
