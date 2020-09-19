<template>
  <div>
    <Navbar></Navbar>
    <v-container>
      <v-row justify="start" class="ma-16">
        <v-col>
          <AddPostForm></AddPostForm>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Navbar from "@/components/core/Navbar";
import AddPostForm from "@/components/home/AddPostForm";
export default {
  name: "Home",

  components: {
    Navbar,
    AddPostForm,
  },
};
</script>
