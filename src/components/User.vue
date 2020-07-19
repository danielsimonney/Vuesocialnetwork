<template>
  <tr>
    <td>{{username}}</td>
    <td>{{name}}</td>
    <td>
      <button type="button" v-on:click="goFriend(id)" class="btn btn-primary">Send friend request</button>
    </td>
    <td>
      <router-link :to="{ path: '/user/'+id}">Voir le profil de l'utilisateur</router-link>
    </td>
  </tr>
</template>

<script>
import { api, loadAuthorisationHeader } from "../helpers/axios";
export default {
  name: "User",
  props: {
    username: String,
    name: String,
    id: String
  },
  methods: {
    goFriend(id) {
      api
        .post(
          "/friendship/request",
          { requestedId: id },
          loadAuthorisationHeader()
        )
        .then(response => console.log(response))
        .catch(err => console.log(err));
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
