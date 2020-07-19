<template>
  <div id="login">
    <h1>Register</h1>
    <input type="text" v-model="username" placeholder="Enter your username" />
    <input type="text" v-model="name" placeholder="Enter your Name" />
    <input type="password" v-model="password" placeholder="Enter your password" />
    <button type="button" v-on:click="goRegister()">Register</button>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      name: "",
      password: ""
    };
  },
  methods: {
    goRegister() {
      console.log(this.username);
      let data = {};
      data.password = this.password;
      data.username = this.username;
      data.name = this.name;
      console.log(data);
      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>
<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>