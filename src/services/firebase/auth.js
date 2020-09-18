import firebaseApp from "@/services/firebase/init";
import store from "@/store/";
import router from "@/router/";

const auth = firebaseApp.auth();

auth.onAuthStateChanged((user) => {
  /**
   * TODO: Find a better middleware
   */

  if (user) {
    const currentUser = {
      uid: user.uid,
      name: user.displayName,
      avatar: user.photoURL,
      followers: [],
      following: [],
    };

    store.commit("auth/SET_USER", currentUser);

    if (router.currentRoute.path != "/") router.push("/");
  } else {
    store.commit("auth/SET_USER", null);
    if (router.currentRoute.path != "/login") router.push("/login");
  }
});

export default auth;
