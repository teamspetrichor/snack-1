<template>
  <div>
    <v-row>
      <v-col>
        <v-alert
          v-model="alert"
          class="secondary--text"
          color="success"
          colored-border
          dismissible
          elevation="1"
          border="left"
          max-width="400"
        >You shared your post.</v-alert>
        <v-card max-width="400" outlined elevation="2" class="pa-10">
          <v-form @submit.prevent ref="form" class="m-3" v-model="valid">
            <v-row>
              <h5 class="my-2">Image URL</h5>
            </v-row>
            <v-row>
              <v-text-field
                filled
                v-model="post.image"
                class="mx-auto"
                color="secondary"
                append-icon="mdi-paperclip"
                required
                :rules="imageRules"
              ></v-text-field>
            </v-row>
            <v-row class="my-2">
              <h5>Description</h5>
            </v-row>
            <v-row>
              <v-textarea
                filled
                v-model="post.description"
                class="mx-auto"
                color="secondary"
                append-icon="mdi-comment"
              ></v-textarea>
            </v-row>
            <v-row>
              <v-btn @click="_addPost()" color="secondary" class="mx-auto" outlined>Share</v-btn>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddPostForm",

  data() {
    return {
      valid: true,
      alert: false,
      post: {
        image: "",
        description: "",
      },
      imageRules: [(v) => !!v || "Uploading an image is required."],
    };
  },

  methods: {
    ...mapActions("post", ["addPost"]),
    _addPost() {
      if (this.$refs.form.validate()) {
        this.addPost(this.post);
        this.alert = true;
      }
    },
  },
};
</script>

<style>
</style>