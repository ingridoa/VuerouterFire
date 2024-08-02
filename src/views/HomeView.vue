<template>

  <div class="home">
  <h1>Bienvenido</h1>
  </div>
</template>

<script>


// @ is an alias to /src

export default {
  name: 'HomeView',
  
}
</script>

<style>
.home {
  color:rgb(18, 20, 20);
  background: rgb(125,187,68);
background: linear-gradient(90deg, rgba(125,187,68,1) 26%, rgba(0,212,255,1) 100%);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5% 0 10% 10%;
  font-size: 3rem;
}
</style>