<template>
  <div class="loginClass">
    <h2>Login Inicial</h2>
    <form @submit.prevent="handleSubmit">
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
      <button type="submit">Iniciar sesión</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    handleSubmit() {
      console.log("Email:", this.email);
      console.log("Password:", this.password);
      this.login({ email: this.email, password: this.password });
    },
  },
};
</script>
