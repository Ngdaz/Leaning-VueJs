<template>
  <div class="buttonVertical">
    <el-switch
      style="display: block"
      v-model="value2"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="Boxed"
      inactive-text="Fluid"
      @change="checklayout"
    >
    </el-switch>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "widthOption",
  data() {
    return {
       value2: true
    };
  },
  methods: {
    ...mapMutations(["checklayout"]),
  },
  computed: {
    // ...mapState({
    // })
  },
};
</script>
