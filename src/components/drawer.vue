<template>
  <div>
    <el-drawer
      class="drawer-content"
      :before-close="drawerCollapse"
      title="Setting"
      :visible="checkStatus"
      :with-header="false"
      size="17%"
    >
      <div>
        <h3>Setting</h3>
      </div>
      <div class="option">
        <h5>Layout</h5>
        <buttonChangeLayout></buttonChangeLayout>
      </div>

      <div class="option">
        <h5>Width</h5>
        <widthOption></widthOption>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
// import component
import buttonChangeLayout from "../components/layout-option";
import widthOption from "../components/width-option";


export default {
  // name: "drawer",
  data() {
    return {
      drawer: false,
    };
  },

  methods: mapMutations(["drawerCollapse"]),
  computed: {
    ...mapState({
      checkStatus: (state) => state.drawer,
    }),
  },
  components: {
    "buttonChangeLayout": buttonChangeLayout,
    "widthOption": widthOption,
  },
};
</script>

<style>
/* .drawer-content {
    display: flex;
    flex-direction: column;
} */
</style>
