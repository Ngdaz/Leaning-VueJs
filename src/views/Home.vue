<template>
  <div class="home">
    
      <only-top-bar v-if="isHorizontal"></only-top-bar>
      <app-sidebar v-else ></app-sidebar> 
      <drawer-sidebar></drawer-sidebar> 
   
  </div>
</template>

<script>
// @ is an alias to /src

import SideBar from "../components/SideBar";
import drawer from "../components/drawer";
import OnlyTopBar from '../components/onlyTopBar.vue';
import {  mapState } from "vuex";


export default {
  name: "Home",
  components: {

    "app-sidebar": SideBar,
    "drawer-sidebar": drawer,
    "only-top-bar": OnlyTopBar,
  },
  computed: {
    ...mapState({
      isHorizontal:(state) => state.isHorizontal
    })
  }
};
</script>
    OnlyTopBar
<style>
/* #nav {
  display: flex;
  padding: 0;
} */
.home {
  margin: 0;
}
</style>
