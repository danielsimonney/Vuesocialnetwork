<template>
  <li class="list-group-item">
    {{username}} {{name}}
    <button
      v-if="!isFriend"
      type="button"
      v-on:click="AcceptFriend(id)"
      class="btn btn-primary"
    >Accept friend request</button>
    <button
      v-if="!isFriend"
      type="button"
      v-on:click="DeclineFriend(id)"
      class="btn btn-danger"
    >Decline friend request</button>
    <router-link :to="{ path: '/user/'+id}">
      <button type="button" class="btn btn-warning">Go see profile of this user</button>
    </router-link>
  </li>
</template>

<script>
import { api, loadAuthorisationHeader } from "../helpers/axios";
export default {
  name: "User",
  props: {
    isFriend: Boolean,
    username: String,
    name: String,
    id: String
  },

  methods: {
    AcceptFriend(id) {
      api
        .post(
          "/friendship/request/" + id + "/accept",
          loadAuthorisationHeader()
        )
        .then(response => console.log(response))
        .catch(err => console.log(err));
    }
  },
  DeclineFriend(id) {
    api
      .get(" /friendship/request/" + id + "/reject", loadAuthorisationHeader())
      .then(response => {
        console.log(response);
        alert("Vous avez bien refusé la demande d'ami de" + this.user.name);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin-right: 30px;
}
</style>