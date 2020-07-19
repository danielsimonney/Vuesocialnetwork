import Vue from "vue";
import Vuex from "vuex";
import { api } from "../helpers/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token") || ""
  },
  mutations: {
    save(state, token, user) {
      state.token = token;
      state.user = user;
    }
  },
  getters: {
    isLoggedIn: state => !!state.token
  },
  actions: {
    register({ commit }, data) {
      return new Promise((resolve, reject) => {
        console.log(data, "store");
        api
          .post("/auth/register", {
            username: data.username,
            password: data.password,
            name: data.name
          })
          .then(res => {
            localStorage.setItem("token", res.data.token);
            commit("save", res.data.token, res.data.user);
            resolve(res);
          })
          .catch(err => {
            console.log(err);
            reject(err);
          });
      });
    },
    connect({ commit }, data) {
      return new Promise((resolve, reject) => {
        console.log(data, "store");
        api
          .post("/auth/login", {
            username: data.username,
            password: data.password
          })
          .then(res => {
            localStorage.setItem("token", res.data.token);
            commit("save", res.data.token, res.data.user);
            resolve(res);
          })
          .catch(err => {
            console.log(err);
            reject(err);
          });
      });
    },
    logout() {
      return new Promise((resolve, reject) => {
        console.log("logout store");
        localStorage.removeItem("token");
        resolve();
        console.log(reject);
      });
    }
  }
});
