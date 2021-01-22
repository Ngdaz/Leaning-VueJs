<template>
  <div>
    <!-- <div  v-for=" item in forms"> -->
    <!-- form input -->
    <p v-if="form.status">ban da tao tai khoan thanh cong</p>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label=" Your name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Age">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="Adress">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
    </el-form>
    <!-- submit -->
    <el-button type="primary" @click="onSubmit">Create</el-button>

    <!-- Table -->
    <!-- <el-button type="button" @click="dialogTableVisible = true"
      >Open record</el-button
    > -->

    <el-dialog title="Reord" :visible.sync="dialogTableVisible">
      <el-table :data="[form]">
        <el-table-column prop="name" label="Name ne"></el-table-column>
        <el-table-column prop="age" label="Age ne"></el-table-column>
        <el-table-column prop="address" label="Address ne"></el-table-column>
      </el-table>
      <el-button type="primary" @click="onClose">Ok</el-button>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: [
        {
          name: "",
          age: "",
          address: "",
          status: false,
        },
      ],
      dialogTableVisible: false,

      formLabelWidth: "120px",
    };
  },
  methods: {
    onSubmit: function () {
      this.dialogTableVisible = true;
    },
    onClose: function () {
      this.form.status = true;
      this.dialogTableVisible = false;
    },
  },
};
</script>

<style>
</style>
