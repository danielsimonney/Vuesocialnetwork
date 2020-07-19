<template>
  <div>
    <h3>Voici la liste des utilisateurs avec lesquelles vous êtes ami</h3>
    <ul class="list-group list-group-flush">
      <ListUser
        v-for="user in users"
        :key="user.id"
        :username="user.username"
        :name="user.name"
        :id="user.id"
        :isFriend="true"
      />
    </ul>
  </div>
</template>

<script>
import { api, loadAuthorisationHeader } from "../helpers/axios";
import ListUser from "../components/ListUser";
export default {
  name: "Friends",
  components: {
    ListUser
  },
  data() {
    return {
      users: null
    };
  },
  mounted() {
    api
      .get("/friendship", loadAuthorisationHeader())
      .then(response => {
        this.users = response.data;
      })
      .catch(err => console.log(err));
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>