<template>

    <div class="top-bar">
      <div class="row">
        <div class="col"> 
          <el-button
          @click="menuCollapse()"
          class="btn-collapse"
          :icon="iconCollapse"
        >
        </el-button></div>
        <div class="col">
           <el-input
          class="nav-input"
          placeholder="Please input"
          clearable
        ></el-input>
        </div>
        <div class="col">
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
        </div>
      </div>
      <div>
       
      </div>
      <div class="nav-header">
       
        <div class="right-header">
          <!-- drop-down-list -->
          
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

</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {  
  components: {},
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
      const icon = this.isCollapse ? "el-icon-s-fold" : "el-icon-error";
      return icon;
    },
  },
};
</script>

