<template>
  <div class="home">
    <h2>Voici la fiche de votre profil</h2>
    Votre nom est {{me ?(me.name):null}} votre username est {{me ?(me.username):null}} et votre id est le {{me ?(me.id):null}}
  </div>
</template>

<script>
// @ is an alias to /src
import { api, loadAuthorisationHeader } from "../helpers/axios";
// import Requests from "../components/Requests";
export default {
  name: "Home",
  data() {
    return {
      me: null
    };
  },
  mounted() {
    api
      .get("/user/me", loadAuthorisationHeader())
      .then(response => (this.me = response.data))
      .catch(err => console.log(err));

    api
      .get("/friendship", loadAuthorisationHeader())
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }
};
</script>



<style scoped>
.table {
  table-layout: fixed;
}
</style>

