import { createStore } from "vuex";
import { auth, signInWithEmailAndPassword } from "../Config/firebaseConfig.js";
import router from "@/router/index.js";

export default createStore({
  state: {
    loggedUser: false,
  },
  mutations: {
    setLoggedUser(state, user) {
      state.loggedUser = user;
    },
  },
  actions: {
    async login(context, data) {
      console.log(data);
      try {
        const loginResponse = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        console.log(loginResponse);
        context.commit("setLoggedUser", loginResponse);

        router.push("/");
      } catch (error) {
        console.log("Error en el inicio de sesión", error);
      }
    },
  },
});
