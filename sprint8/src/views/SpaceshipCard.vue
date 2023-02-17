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

  <h1>{{ details.name }}</h1>
  <div class="detailsBox">
    <h2>STARSHIP CLASS: <span class="secondary-text">{{ details.starship_class }}</span></h2>
    <h2>MANUFACTURER: <span class="secondary-text">{{ details.manufacturer }}</span></h2>
    <h2>CARGO CAPACITY: <span class="secondary-text">{{ details.cargo_capacity }}</span></h2>
    <h2>CONSUMABLES: <span class="secondary-text">{{ details.consumables }}</span></h2>
    <h2>COST IN CREDITS: <span class="secondary-text">{{ details.cost_in_credits }}</span></h2>
  </div>

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

<style lang="css" scoped>

  * {
    text-transform: uppercase;
  }

  h1 {
    margin-bottom:20px;
  }

  h2 {
    color: white;
  }
  .detailsBox {
    background-color: #1d1e1f;
    margin: auto;
    display: block;
    width: 70%;
    padding: 20px 30px 20px 30px;
  }
  .secondary-text {
    color: rgb(159, 156, 156);
  }
  
</style>