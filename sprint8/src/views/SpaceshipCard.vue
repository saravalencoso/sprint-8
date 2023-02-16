<template>
  <nav>
    <ul>
      <router-link to="/">
        <li>HOME</li>
      </router-link>
      <li>STARSHIPS</li>
      <router-link to="/login">
        <li>LOG IN</li>
      </router-link>
      <router-link to="/register">
        <li>REGISTER</li>
      </router-link>
    </ul>
  </nav>
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