<template>
  <div class="home">
    <div id="nav">
      <only-top-bar></only-top-bar>
      <!-- <app-sidebar></app-sidebar>
      <app-navigation></app-navigation>-->
      <drawer-sidebar></drawer-sidebar> 
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import navbar from "../components/Navigation";
// import SideBar from "../components/SideBar";
import drawer from "../components/drawer";
import OnlyTopBar from '../components/onlyTopBar.vue';


export default {
  name: "Home",
  components: {
    // "app-navigation": navbar,
    // "app-sidebar": SideBar,
    "drawer-sidebar": drawer,
    "only-top-bar": OnlyTopBar,
  },
};
</script>
    OnlyTopBar
<style>
#nav {
  display: flex;
  padding: 0;
}
.home {
  margin: 0;
}
</style>
