<template>
  <div>
    <v-container>
      <h1>Home page</h1>
      <v-btn @click="_logout()" color="teal lightent-3" dark>Logout</v-btn>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Home",

  methods: {
    ...mapActions("auth", ["logout"]),
    _logout() {
      this.logout()
        .then(() => this.$router.push("/login"))
        .catch((error) => console.log(error));
    },
  },
};
</script>
