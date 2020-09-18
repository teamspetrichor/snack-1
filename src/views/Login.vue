<template>
  <div>
    <v-container>
      <h1>Login</h1>
      <v-btn @click="_login()" color="red lighten-3">Sign in with google</v-btn>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",

  methods: {
    ...mapActions("auth", ["login"]),

    _login() {
      this.login()
        .then()
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
</style>