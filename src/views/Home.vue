<template>
  <div class="home">
    <vertical-layout v-if="isHorizontal"></vertical-layout>
    <only-top-bar v-else ></only-top-bar>
    <Drawerbar/>
  </div>
</template>

<script>
// @ is an alias to /src


import OnlyTopBar from "../components/onlyTopBar.vue";
import { mapState } from "vuex";
import VerticalLayout from "../components/Vertical";
import Drawerbar from "../components/drawer";
export default {
  name: "Home",
  components: {
     Drawerbar,
    "vertical-layout": VerticalLayout,
    "only-top-bar": OnlyTopBar,
  },
  computed: {
    ...mapState({
      isHorizontal: (state) => state.isHorizontal,
    }),
  },
};
</script>
