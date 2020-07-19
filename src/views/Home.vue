<template>
  <div class="home">
    <ul class="list-group list-group-flush"></ul>Voici la liste de tout des utilisateurs présents sur l'application et avec lesquelles vous pouvez vous connecter
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Name</th>
          <th scope="col">Make a friend request</th>
          <th scope="col">Voir le profil</th>
        </tr>
      </thead>
      <tbody>
        <User
          v-for="user in users"
          :key="user.id"
          :username="user.username"
          :name="user.name"
          :id="user.id"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import { api, loadAuthorisationHeader } from "../helpers/axios";
import User from "../components/User";
// import Requests from "../components/Requests";
export default {
  name: "Home",
  components: {
    User
  },
  data() {
    return {
      users: null,
      demands: null
    };
  },
  mounted() {
    api
      .get("/user", loadAuthorisationHeader())
      .then(response => (this.users = response.data))
      .catch(err => console.log(err));
    api
      .get("/friendship/request", loadAuthorisationHeader())
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




