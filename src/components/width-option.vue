<template>
  <div class="buttonVertical">
    <el-radio-group v-model="radio" class="radiobutton" >
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
        return{
            radio:true,
        }
    }
}
</script>

<style scoped>

/* .buttonVertical{
    display: grid;
} */

.radiobutton{
    margin: 10px 0;
    grid-template-columns: 200px 200px 200px;
}



</style>