<template>
  <div class="loginClass">
    <h2>Hola Crea tu cuenta </h2>
    <form @submit.prevent="register">
      <label for="">Email</label>
      <input v-model="email" type="email" placeholder="Ingrese su correo..." />
      <br />
      <label for="">Contraseña</label>
      <input
        v-model="password"
        type="password"
        placeholder="Ingrese su contraseña..."
      />
      <br />
      <button type="submit">Crear Cuenta</button>
    </form>
  </div>
</template>

<script>
import {
  auth,
  createUserWithEmailAndPassword,
} from "../Config/firebaseConfig.js";

export default {
  name: "RegisterView",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async register(event) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        console.log("Credenciales", userCredential);
        const user = userCredential.user;

        console.log("Usuario registrado", user);
        event.target.reset()
      } catch (error) {
        console.log("Error en el registro", error);
      }
    },
  },
};
</script>