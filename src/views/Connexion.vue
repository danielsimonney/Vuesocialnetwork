<template>
  <div class="conn">
    <div v-if="this.$route.params.type==='login'">
      <Conn />
    </div>
    <div v-if="this.$route.params.type==='register'">
      <Register />
    </div>
    <div v-if="this.$route.params.type===undefined">
      <Choice />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from "../components/Register";
import Conn from "../components/Conn";
import Choice from "../components/Choice";

export default {
  name: "Connexion",
  components: {
    Register,
    Conn,
    Choice
  },
  computed: {},
  data: function() {
    return {
      type: this.$route.params.type
    };
  },
  methods: {
    test() {
      console.log(this.$route.params.type);
    }
  }
};
</script>
