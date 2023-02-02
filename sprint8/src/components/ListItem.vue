<template>
    <div v-for="result in results" :key="result.name">
        <h2> {{ result.name }}</h2>
        <p>{{ result.model  }}</p>
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import axios from 'axios'
export default {
    name: "ListItem", 
    data() {
        return {
            results: []
        }
    },
    mounted() {
        // console.log('hola mundo desde mounted'); 
        this.getSpaceship();
    }, 
    methods: {
        async getSpaceship(url = 'https://swapi.dev/api/starships/') {
        try {
            const response = await axios.get(url)
            this.results = this.results.concat(response.data.results)
            if (response.data.next) {
                this.getSpaceship(response.data.next)
            }
        } catch (error) {
            console.error(error)
        }
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