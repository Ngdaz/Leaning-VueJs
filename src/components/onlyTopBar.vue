<template>
  <div class="container-fluid">
    <div class="container-fluid fixed-top"
       
    >
      <div class="row bg-secondary">
        <div class="col">
          <el-input
            class="nav-input w-25 float-left"
            placeholder="Please input"
            v-model="input"
            clearable
          >
          </el-input>
        </div>
        <div class="col">
          <el-button
            class="button-drawer float-right"
            @click="drawerCollapse()"
            icon="el-icon-s-tools"
          >
          </el-button>
        </div>
      </div>
      
    </div>
    <Drawerbar />
    <div class="container color-content">
      <content-layout></content-layout>
    </div>
  </div>
</template>

<script>
import Drawerbar from "./drawer";
import { mapState, mapMutations } from "vuex";
import ContentLayout from "./content.vue";
export default {
  components: {
    ContentLayout,
    Drawerbar,
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

    })
  },
};
</script>
<style >
.color-content{
  background-color: #ededeb;
  margin-top: 40px;
}

</style>