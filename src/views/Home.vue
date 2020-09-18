<template>
  <div>
    <v-container>
      <h1>Home page</h1>
      <v-btn @click="_logout()" color="teal lightent-3" dark>Logout</v-btn>
      <v-btn @click="printFollowers()">Get followers</v-btn>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",

  methods: {
    ...mapActions("auth", ["logout"]),
    _logout() {
      this.logout()
        .then(() => this.$router.push("/login"))
        .catch((error) => console.log(error));
    },
    printFollowers() {
      console.log(this.getUser.followers);
    },
  },
  computed: {
    ...mapGetters("auth", ["getUser"]),
  },
};
</script>
