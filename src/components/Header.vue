<template>
  <header>
    <nav class="navbar navbar-light bg-light">
      <router-link :to="{ path: '/'}">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Home</button>
      </router-link>
      <router-link :to="{ path: '/me'}">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">My profile</button>
      </router-link>
      <router-link :to="{ path: '/friendrequest'}">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Voir mes demandes d'amis</button>
      </router-link>
      <router-link :to="{ path: '/friends'}">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Voir mes amis</button>
      </router-link>
      <form class="form-inline">
        <button v-on:click="logout" class="btn btn-outline-danger my-2 my-sm-0">Logout</button>
      </form>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout: function() {
      console.log("function logout");
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/connexion");
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  position: fixed;
  width: 100%;
}
</style>
