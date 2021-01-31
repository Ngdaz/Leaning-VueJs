<template>
  <div class="buttonChangeLayout">
    <el-radio-group
      v-model="radio"
      class="radiobutton"
      @change="chekcHorizontal"
    >
      <el-radio  :label="false">Vertical</el-radio>
      <el-radio :label="true">Horizontal</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ChangeLayout",

  data() {
    return {
      radio: true,
    };
  },
  methods: {
    ...mapMutations(["chekcHorizontal"]),
  },
};
</script>
