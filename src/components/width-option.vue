<template>
  <div class="buttonVertical">
    <el-radio-group v-model="radio" class="radiobutton">
      <el-radio :label="1">Fluid</el-radio>
      <el-radio :label="2">Boxed</el-radio>
      <el-radio :label="3">Scrollable</el-radio>
      <el-radio :label="4">Fixed</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: "widthOption",
  data() {
    return {
      radio: true,
    };
  },
};
</script>

<style>
.buttonVertical {
  display: flex;
  flex-direction: column;
  margin: 2rem auto ;
}
</style>
