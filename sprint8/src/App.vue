<template>
    <div class="container">
      <img src="\src\img\sw_logo.png" alt="Star Wars Logo">
      <!-- <router-view></router-view> -->
      <welcomeComponent></welcomeComponent>
    </div>
</template>

<script>

import WelcomeComponent from './components/WelcomeComponent.vue';
export default {
  name: 'App', 
  components: {
    WelcomeComponent
  }
}

</script>

<style>
  #app {
    width: 100%;
    background-color: black;
  }
</style>