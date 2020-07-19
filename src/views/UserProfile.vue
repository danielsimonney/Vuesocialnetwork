<template>
  <div class="home">
    <h2>Voici la fiche de ce user</h2>
    <div
      v-if="hasSendInvit"
    >Ce user vous a envoyé une demande d'ami à laquelle vous n'avez pas encore répondu</div>
    <div v-if="isFriend">Ce user et vous êtes ami</div>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Name</th>
          <th v-if="!hasSendInvit && !isFriend" scope="col">Make a friend request</th>
          <th v-if="hasSendInvit && !isFriend" scope="col">Accept proposal</th>
          <th v-if="hasSendInvit && !isFriend" scope="col">Decline proposal</th>

          <th scope="col">Block user</th>
          <th scope="col">unblock user</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{user ?(user.username):null }}</td>
          <td>{{user ?(user.username):null}}</td>
          <td v-if="!hasSendInvit && !isFriend">
            <button
              v-if="!makeFriendRequest && !isFriend"
              type="button"
              v-on:click="goFriend()"
              class="btn btn-primary"
            >Send friend request</button>
            <button
              v-if="makeFriendRequest && !isFriend"
              type="button"
              v-on:click="removeinvite()"
              class="btn btn-primary"
            >Supress the friend request</button>
          </td>

          <td v-if="hasSendInvit && !isFriend">
            <button
              type="button"
              v-on:click="AcceptFriend()"
              class="btn btn-primary"
            >Accept friend request</button>
          </td>
          <td v-if="hasSendInvit && !isFriend">
            <button
              type="button"
              v-on:click="DeclineFriend()"
              class="btn btn-primary"
            >Decline friend request</button>
          </td>
          <td>
            <button type="button" v-on:click="blockUser()" class="btn btn-primary">Block this user</button>
          </td>
          <td>
            <button
              type="button"
              v-on:click="unblockUser(id)"
              class="btn btn-primary"
            >Unblock this user</button>
          </td>
        </tr>
      </tbody>
    </table>
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
      user: null,
      makeFriendRequest: false,
      hasSendInvit: false,
      isFriend: false
    };
  },
  mounted() {
    api
      .get("/user/" + this.$route.params.id, loadAuthorisationHeader())
      .then(userResponse => {
        this.user = userResponse.data;
        api
          .get("/friendship/request", loadAuthorisationHeader())
          .then(response => {
            response.data.forEach(element => {
              if (element.id === userResponse.data.id) {
                this.hasSendInvit = true;
              }
            });
          })
          .catch(err => console.log(err));
        api.get("/friendship", loadAuthorisationHeader()).then(response => {
          response.data.forEach(element => {
            if (element.id === userResponse.data.id) {
              this.isFriend = true;
            }
          });
        });
      })
      .catch(err => console.log(err));
  },
  methods: {
    goFriend() {
      api
        .post(
          "/friendship/request",
          { requestedId: this.user.id },
          loadAuthorisationHeader()
        )
        .then(response => {
          console.log(response);
          alert("Votre demande d'ami a bien été envoyé ");
          this.makeFriendRequest = true;
        })
        .catch(err => {
          console.log(err);
          alert("Vous avez déjà envoyé une invitation à cette personne");
          this.makeFriendRequest = true;
        });
    },
    AcceptFriend() {
      api
        .get(
          " /friendship/request/" + this.user.id + "/accept",
          loadAuthorisationHeader()
        )
        .then(response => {
          console.log(response);
          alert("Vous avez bien accepté la demande d'ami de" + this.user.name);
          // this.makeFriendRequest = true;
        })
        .catch(err => {
          console.log(err);
          alert("Vous avez déjà envoyé une invitation à cette personne");
          // this.makeFriendRequest = true;
        });
    },
    blockUser() {
      api
        .get("/user/block/" + this.user.id, loadAuthorisationHeader())
        .then(response => console.log(response))
        .catch(err => console.log(err));
    },

    DeclineFriend() {
      api
        .get(
          " /friendship/request/" + this.user.id + "/reject",
          loadAuthorisationHeader()
        )
        .then(response => {
          console.log(response);
          alert("Vous avez bien refusé la demande d'ami de" + this.user.name);
          // this.makeFriendRequest = true;
        })
        .catch(err => {
          console.log(err);
        });
    },
    unblockUser() {
      api
        .delete("/user/block" + this.user.id, loadAuthorisationHeader())
        .then(response => console.log(response))
        .catch(err => console.log(err));
    },
    removeinvite() {
      api
        .delete("friendship/request/" + this.user.id, loadAuthorisationHeader())
        .then(response => {
          console.log(response);
          this.makeFriendRequest = false;
          alert("vous avez bien retiré la demande d'ami " + response.data.name);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>



<style scoped>
.table {
  table-layout: fixed;
}
</style>


