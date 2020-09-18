<template>
  <div>
    <v-container>
      <LoginForm></LoginForm>
    </v-container>
  </div>
</template>

<script>
import LoginForm from "@/components/login/LoginForm";

export default {
  name: "Login",

  components: {
    LoginForm,
  },
};
</script>

<style>
</style>