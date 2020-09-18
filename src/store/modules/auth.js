import firebaseAuth from "@/services/firebase/auth";
import googleAuthProvider from "@/services/firebase/googleAuthProvider";
import firestore from "@/services/firebase/firestore";
import { firestoreAction } from "vuexfire";
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
  login({ commit, dispatch, getters }) {
    firebaseAuth
      .signInWithPopup(googleAuthProvider)
      .then((result) => {
        const user = {
          uid: result.user.uid,
          name: result.user.displayName,
          avatar: result.user.photoURL,
        };
        const userRef = firestore.collection("users").doc(user.uid);
        userRef
          .get()
          .then(async (doc) => {
            const userToWrite = {
              name: user.name != null ? user.name : "",
              avatar: user.avatar != null ? user.avatar : "",
            };
            if (!doc.exists) {
              console.log("writing...");
              firestore
                .collection("users")
                .doc(user.uid)
                .set(userToWrite);
            }
            commit("SET_USER", { ...user, followers: [], following: [] });
            await dispatch("bindFollowers", user.uid);
            await dispatch("bindFollowing", user.uid);

            console.log(getters.getUser);
          })
          .catch((error) => {
            commit("SET_USER", null);
            throw error;
          });
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

  bindFollowers: firestoreAction(({ bindFirestoreRef }, uid) => {
    return bindFirestoreRef(
      "user.followers",
      firestore
        .collection("follows")
        .doc(uid)
        .collection("userFollowers")
    );
  }),
  bindFollowing: firestoreAction(({ bindFirestoreRef }, uid) => {
    return bindFirestoreRef(
      "user.following",
      firestore
        .collection("follows")
        .doc(uid)
        .collection("userFollowing")
    );
  }),
};
const mutations = {
  SET_USER: (state, value) => (state.user = value),
};
export default { namespaced: true, state, getters, actions, mutations };
