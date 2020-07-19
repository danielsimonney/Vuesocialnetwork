<template>
  <div class="home">
    Bienvenue sur mon réseau social que voulez vous faire ??
    <router-link :to="{ path: '/connexion/login'}">
      <button class="btn btn-primary">Se connecter</button>
    </router-link>
    <router-link :to="{ path: '/connexion/register'}">
      <button class="btn btn-primary">S'enregistrer</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Choice"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin-right: 40px;
}
</style>