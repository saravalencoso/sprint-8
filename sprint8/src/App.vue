<template>
    <div class="container">
      <img src="\src\img\sw_logo.png" alt="Star Wars Logo">
    </div>
    <router-view></router-view>
</template>

<script>

export default {
  name: 'App', 
  // The `mounted` lifecycle hook is called when the component is mounted to the DOM 
  mounted() {
    this.$store.dispatch('getSpaceship', this.$store.state.next);
  }
}

</script>

<style>
  #app {
    width: 100%;
    background-color: black;
  }
</style>