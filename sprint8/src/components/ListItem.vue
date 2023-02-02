<template>
    <div v-for="result in results" :key="result.name">
        <h2> {{ result.name }} </h2>
        <p> {{ result.model }} </p>
    </div>
    <button @click="getSpaceship(next)">Mostrar más</button>
</template>

<script>
// mejor desde el componente padre y pasarlo a ListItem

// import { defineComponent } from '@vue/composition-api'
import axios from 'axios'
export default {
    name: "ListItem", 
    data() {
        return {
            results: [], 
            next: 'https://swapi.dev/api/starships/'
        }
    },
    mounted() {
        // console.log('hola mundo desde mounted'); 
        this.getSpaceship(this.next);
    }, 
    methods: { // meter en actions
        async getSpaceship(url) {
            try {
                const response = await axios.get(url);
                this.results = this.results.concat(response.data.results);

                // Si la respuesta contiene una URL para la siguiente página de resultados (response.data.next), 
                // la función se llama a sí misma con la URL para la siguiente página:
                this.next = response.data.next;

            } catch (error) {
                console.error(error);
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