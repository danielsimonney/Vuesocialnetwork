<template>
  <div id="login">
    <h1>Register</h1>
    <input type="text" v-model="username" placeholder="Enter your username" />
    <input type="password" v-model="password" placeholder="Enter your password" />
    <button type="button" v-on:click="goConnect()">Register</button>
  </div>
</template>

<script>
export default {
  name: "Conn",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    goConnect() {
      let data = {};
      data.password = this.password;
      data.username = this.username;
      this.$store
        .dispatch("connect", data)
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