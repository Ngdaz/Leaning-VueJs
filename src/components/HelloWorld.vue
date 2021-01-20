<template>
  <div class="form-input">
    <!-- {{isAvailable}}
    <el-switch v-model="isAvailable"></el-switch>
     <p v-if="isAvailable == true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sit cumque dicta! Maiores doloremque inventore beatae veniam magnam tempore nam aliquam fuga ratione enim dolores quidem, et reprehenderit minus aut!</p>
    <p v-else>Truong Hop Nguoc Lai</p> -->
    <!-- switch 1 -->
    <!-- <el-switch
      v-model="value"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>
    <p v-if="value == true">bat but</p>
    <p v-else> tat nut</p> -->

    <!-- <input type="text" v-model="text"> -->
    
    <!-- username:
    <input
      class="username"
      type="text"
      :value="userName"
      @input="onChangeUserName"
      placeholder="enter your username"
    />
    password
    <input
      class="pass"
      type="text"
      :value="password"
      @input="onChangePass"
      placeholder="enter you your password"
    />
    username is {{ userName }}
    <br>
    password is {{password}}
    {{value}} -->

    <!-- su dung v-model  -->

  <!-- <input  class="username" type="text" v-model="userName" placeholder="enter your username">
  <input  class="password" type="text" v-model="password" placeholder="enter your password">
    {{userName}}
    {{password}} -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      value:"",
      userName:"",
      password:""
    };
  },
  methods: {
    // onChangeUserName(test) {
    //   console.log(test.target);
    //   this.userName = test.target.value;
    //   console.log("username:",this.userName);
    // },
    // onChangePass(test) {
    //   this.password = test.target.value;
    // },
  },
  mounted() {},
};
</script>

<style>
.form-input {
  display: flex;
  flex-direction: column;
  width: 16rem;
  margin: auto;
}

</style>
