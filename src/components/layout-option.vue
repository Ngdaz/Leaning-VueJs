<template>
  <div class="buttonChangeLayout">
    <el-radio-group
      v-model="radio"
      class="radiobutton"
      
    >
      <el-radio :label="true">Vertical</el-radio>
      <el-radio :label="false">Horizontal</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: "ChangeLayout",

    data() {
        return{
          radio: true
        }
    }

};


</script>

<style>


</style>
