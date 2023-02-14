<template>
  <h2>{{ details.name }}</h2>
  <h2>{{ details.manufacturer }}</h2>
  <h2>{{ details.max_atmosphering_speed }}</h2>

</template>

<script>
export default {
  name: "SpaceshipCard",
  mounted() {
    this.$store.dispatch('getDetails', `https://swapi.dev/api/starships/${this.$route.params.name}`);
  }, 
  computed: {
    details() {
       return this.$store.state.details;
    }
  }
};

</script>

<style>
  h2 {
    color: white;
  }
</style>