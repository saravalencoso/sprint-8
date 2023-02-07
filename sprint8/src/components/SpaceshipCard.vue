<template>
  <h1>aasas</h1>
</template>

<script>
export default {
  name: "SpaceshipCard",
  mounted() {
    console.log(this.$route.params.name)
    console.log(this.$store.state.results);
  },
};
</script>
