<template>
  <tr>
    <td>{{username}} vous a fait une demande d'ami</td>
    <td>{{name}}</td>
    <td>
      <button
        type="button"
        v-on:click="AcceptFriend(id)"
        class="btn btn-primary"
      >Accepter la demande</button>
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
    AcceptFriend(id) {
      api
        .post(
          "/friendship/request/" + id + "/accept",
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