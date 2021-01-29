<template>
  <!-- <div class="top-bar"> -->
  <div class="row mt-2">
    <div class="col-9">
      <div class="row mt-1">
        <div class="col-1">
          <el-button
            @click="menuCollapse()"
            class="btn-collapse float-left"
            :icon="iconCollapse"
          >
          </el-button>
        </div>
        <div class="col-11">
          <el-input
            class="nav-input w-25 float-left"
            placeholder="Please input"
            clearable
          ></el-input>
        </div>
      </div>
      <!-- drop-down-list -->
    </div>
    <div class="col-3"> 
      <!-- button for drawer -->
      <div class="row mt-1">
        <!--  -->
        <div class="col">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </div>
        <!--  -->
        <div class="col">
          <el-button
            class="button-drawer"
            @click="drawerCollapse()"
            icon="el-icon-s-tools"
          >
          </el-button>
        </div>
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
