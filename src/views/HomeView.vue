<template>

  <div class="home">
  <section class="HomeView">
    <LoginView />
    <br />
    <RegistroVue />
    <br />
    <UserList/>
  </section>
  </div>
</template>

<script>
import LoginView from './LoginView.vue';
import RegistroVue from './RegistroVue.vue';
import UserList from './UserList.vue';

// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    LoginView,
    RegistroVue,
    UserList,

    
  }
}
</script>

<style>
.HomeView {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5% 0 10% 10%;
}
</style>