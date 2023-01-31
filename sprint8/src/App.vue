<template>
    <div id="container">
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

<style scoped>
</style>