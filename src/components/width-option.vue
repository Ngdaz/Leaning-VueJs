<template>
  <div class="buttonVertical">
    <el-radio-group v-model="radio" class="radiobutton" @change="checkLayout">
      <el-radio :label="1">Fluid</el-radio>
      <el-radio :label="2">Boxed</el-radio>
      <el-radio :label="3">Scrollable</el-radio>
      <el-radio :label="4">Fixed</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
import {  mapMutations } from 'vuex'


export default {
  name: "widthOption",
  data() {
    return {
      radio: true,
    };
  },
  methods: {
    ...mapMutations(['checklayout'])
    
  },
  computed: {
    // ...mapState({
      
    // })
  }
};
</script>

