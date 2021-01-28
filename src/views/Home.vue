<template>
  <div class="home">
 

    <vertical-layout v-if="isHorizontal"></vertical-layout>
    <only-top-bar v-else></only-top-bar>
    
  </div>
</template>

<script>
// @ is an alias to /src


import OnlyTopBar from "../components/onlyTopBar.vue";
import { mapState } from "vuex";
import VerticalLayout from "../components/Vertical";

export default {
  name: "Home",
  components: {
    
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
