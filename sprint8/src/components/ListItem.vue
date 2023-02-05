<template>
    <div v-for="result in $store.state.results" :key="result.name">
        <h2> {{ result.name }} </h2>
        <p> {{ result.model }} </p>
    </div>
    <button @click="nextPageApi($store.state.next)">Mostra'n més</button>
</template>

<script>
// mover a WelcomeComponent y pasarlo a ListItem

export default { // local registration for this component
    name: "ListItem", 
    mounted() {
        this.$store.dispatch('getSpaceship', this.$store.state.next);
    }, 
    methods: {
        nextPageApi() {
            this.$store.dispatch('getSpaceship', this.$store.state.next);
        }
    }
}
</script>

<style lang="css" scoped>
    div {
        border: 1px solid #C5C5C5;
        padding: 10px;
        margin: 10px;
    }
    h2, p {
        text-align: left;
        color: #C5C5C5;
        margin: 0;
    }
</style>