<template>
    <div v-for="result in $store.state.results" :key="result.name">
        <h2> {{ result.name }} </h2>
        <p> {{ result.model }} </p>
        <router-link :to="`/details/${slugify(result.name)}`">Detalls</router-link>
    </div>
    <button @click="nextPageApi($store.state.next)">Mostra'n més</button>
</template>

<script>
// mover a WelcomeComponent y pasarlo a ListItem

export default { 
    // Local registration for this component
    name: "ListItem", 
    methods: {
        nextPageApi() {
            this.$store.dispatch('getSpaceship', this.$store.state.next);
        }, 
        openDetails(result) {
            this.$store.state.details = result;
            console.log(this.$store.state.details)
        }, 
        slugify(name) {
            return name
            .toString()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-')
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