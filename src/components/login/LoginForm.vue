<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <h1>Login</h1>
        <v-btn @click="_login()" color="red lighten-3">Sign in with google</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
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