<template>
  <div class="home">
    <div id="nav">
      <app-sidebar></app-sidebar>
      <app-navigation></app-navigation>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "../components/Navigation";
import SideBar from "../components/SideBar";

export default {
  name: "Home",
  components: {
    "app-navigation": navbar,
    "app-sidebar": SideBar,
  },
};
</script>
<style >
  #nav{
    display: flex;
    padding: 0;
  }
</style>
