import firestore from "@/services/firebase/firestore";

const state = {
  feed: [],
  userPost: [],
};
const getters = {};
const actions = {
  addPost({ rootGetters }, post) {
    const userId = rootGetters["auth/getUser"].uid;
    firestore
      .collection("posts")
      .doc(userId)
      .collection("userPosts")
      .add(post)
      .then()
      .catch((error) => {
        throw error;
      });
  },
  deletePost({ rootGetters }, postId) {
    const userId = rootGetters["auth/getUser"].uid;
    firestore
      .collection("posts")
      .doc(userId)
      .collection("userPosts")
      .doc(postId)
      .delete()
      .then()
      .catch((error) => {
        throw error;
      });
  },
};
const mutations = {};
export default { namespaced: true, state, getters, actions, mutations };
