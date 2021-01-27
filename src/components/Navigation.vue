<template>
  <div class="content">
    
    <div class="top-bar">
      <div>
        <el-button
          @click="menuCollapse()"
          class="btn-collapse"
          :icon="iconCollapse"
        >
          <!-- <i class="el-icon-s-fold"></i> -->
        </el-button>
      </div>
      <div class="nav-header">
        <el-input
          class="nav-input col-sm-2"
          placeholder="Please input"
          clearable
        ></el-input>
        <div class="right-header">
          <!-- drop-down-list -->
          <el-dropdown class="dropdown-noti">
            <el-button class="dropdown-noti-button">
              <i class="el-icon-chat-round"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item>Action 4</el-dropdown-item>
              <el-dropdown-item>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- button for drawer -->
          <el-button
            class="button-drawer"
            @click="drawerCollapse()"
            icon="el-icon-s-tools"
          >
          </el-button>
        </div>
      </div>
    </div>
    <content-Layout></content-Layout>
    
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import ContentLayout from "./content.vue"


export default {
    components: {
    ContentLayout
  },
  name: "navbar",
  data() {
    return {
      icon: 'class="el-icon-s-fold',
    };
  },
  methods: {
    //map fuction in mutation of store to run in v-on: click
    ...mapMutations(["menuCollapse"]),
    ...mapMutations(["drawerCollapse"]),
  },
  computed: {
    //map data form store to the thing in component

    ...mapState({
      isCollapse: (state) => state.isCollapse,
    }),
    iconCollapse() {
      const icon = this.isCollapse ? "el-icon-s-fold": "el-icon-error";
      return icon;
    },
  },


};
</script>

<style>
.top-bar {
  display: flex;
  height: 70px;
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
  width: auto!important;
}
.nav-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.nav-input {
  width: 20rem;
  margin-left: 10px;
  margin-top: auto;
  margin-bottom: auto;
}
.right-header {
  /* float: right !important; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
}
.button-drawer {
  font-size: 1.5rem;
  border: none;
  background: none;
  margin-left: 2rem;
}

.dropdown-noti-button {
  border: none;
  background: none;
  font-size: 1.5rem;
}
</style>
