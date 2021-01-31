<template>
  <div :class="{ container: isCheckLayout }">
    <div class="fixed-top">
      <div class="row bg-secondary">
        <div class="col">
          <el-input
            class="nav-input ml-4 w-25 float-left"
            placeholder="Please input"
            v-model="input"
            clearable
          >
          </el-input>
        </div>
        <div class="col">
          <el-button
            class="button-drawer float-right mr-4 "
            @click="drawerCollapse()"
            icon="el-icon-s-tools"
          >
          </el-button>
        </div>
      </div>
    </div>
    <!-- <Drawerbar /> -->
    <div class="color-content">
      <content-layout></content-layout>
    </div>
  </div>
</template>

<script>
// import Drawerbar from "./drawer";
import { mapState, mapMutations } from "vuex";
import ContentLayout from "./content.vue";
export default {
  components: {
    ContentLayout,
    // Drawerbar,
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
  computed: {
    ...mapState({
      isCheckLayout: (state) => state.layouttype,
    }),
  },
};
</script>
<style>
.color-content {
  /* background-color: #ededeb; */
  margin-top: 40px;
}
</style>
