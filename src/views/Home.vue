<template>
  <div>
    <Navbar></Navbar>
    <v-container>
      <h1>Home page</h1>
      <v-btn @click="_logout()" color="teal lightent-3" dark>Logout</v-btn>
      <v-btn @click="printFollowers()">Get followers</v-btn>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Navbar from "@/components/core/Navbar";
export default {
  name: "Home",

  components: {
    Navbar,
  },

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
    printFollowers() {
      console.log(this.getUser.followers);
    },
  },
};
</script>
