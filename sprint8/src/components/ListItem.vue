<template>
  <div v-for="result in $store.state.results" :key="result.name">
    <h2>{{ result.name }}</h2>
    <p>{{ result.model }}</p>
    <router-link :to="`/details/${getId(result.url)}`">Detalls</router-link>
  </div>
  <button @click="nextPageApi($store.state.next, result.id)">
    Mostra'n més
  </button>
</template>

<script>
// mover a WelcomeComponent y pasarlo a ListItem

export default {
  // Local registration for this component
  name: "ListItem",
  methods: {
    nextPageApi() {
      this.$store.dispatch("getSpaceship", this.$store.state.next);
    },
    getId(url) {
      return url.split("/").at(-2);
    },
  },
};
</script>

<style lang="css" scoped>
div {
  border: 1px solid #c5c5c5;
  padding: 10px;
  margin: 10px;
}
h2,
p {
  text-align: left;
  color: #c5c5c5;
  margin: 0;
}
</style>