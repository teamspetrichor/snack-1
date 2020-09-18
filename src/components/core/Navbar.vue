<template>
  <v-toolbar color="secondary">
    <v-toolbar-title>
      <router-link
        class="text-decoration-none text-h5 font-weight-bold ml-5 white--text"
        to="/"
      >Snack-1</router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
      color="primary"
      class="text-decoration-none black--text mr-5"
      :to="`/user/${getUser.uid}`"
    >Profile</v-btn>

    <v-btn @click="_logout()" class="text-decoration-none black--text mr-5">Logout</v-btn>
  </v-toolbar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Navbar",

  computed: {
    ...mapGetters("auth", ["getUser"]),
  },

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

<style>
</style>