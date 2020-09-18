<template>
  <div class="full d-flex align-center">
    <v-row justify="center">
      <v-col align="center" cols="12">
        <v-card max-width="300">
          <v-card-title>
            <h1 class="secondary--text mx-auto">Hoşgeldiniz</h1>
          </v-card-title>
          <v-card-actions>
            <v-btn @click="_login()" color="red lighten-3" class="my-3 mx-auto">Sign in with google</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
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
.full {
  height: 100%;
}
</style>