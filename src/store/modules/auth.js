import firebaseAuth from "@/services/firebase/auth";
import googleAuthProvider from "@/services/firebase/googleAuthProvider";

const state = {
  user: {
    uid: "",
    name: "",
    avatar: "",
    followers: [],
    following: [],
  },
};
const getters = {
  getUser: (state) => state.user,
};
const actions = {
  login({ commit }) {
    firebaseAuth
      .signInWithPopup(googleAuthProvider)
      .then((result) => {
        const user = {
          uid: result.user.uid,
          name: result.user.displayName,
          avatar: result.user.photoUrl,
        };

        commit("SET_USER", { ...user, followers: [], following: [] });
      })
      .catch((error) => {
        commit("SET_USER", null);
        throw error;
      });
  },

  logout({ commit }) {
    firebaseAuth
      .signOut()
      .then(() => commit("SET_USER", null))
      .catch((error) => {
        throw error;
      });
  },
};
const mutations = {
  SET_USER: (state, value) => (state.user = value),
};
export default { namespaced: true, state, getters, actions, mutations };
