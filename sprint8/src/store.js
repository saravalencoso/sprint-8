// store.js
import { createStore } from 'vuex';
import axios from 'axios'

export default createStore({
  state: {
    results: [], 
    next: 'https://swapi.dev/api/starships/', 
    details: {}
  },
  mutations: {
    updateResults(state, results) {
      state.results = state.results.concat(results);
    },
    updateNext(state, next) {
      state.next = next;
    }, 
    createCard(state, details) {
      state.details = details;
    }
  },
  actions: {
    async getSpaceship(context, url) {
      // dispatches a commit to update the state with the new results and next URL
      try {
          // Biblioteca Axios para realizar una solicitud HTTP GET asíncrona
          const response = await axios.get(url);

          // Si la solicitud es exitosa, los resultados de la respuesta se concatenan 
          context.commit('updateResults', response.data.results);
          
          // Almacena la URL de la siguiente página 
          context.commit('updateNext', response.data.next);

      } catch (error) {
          console.error(error);
      }
    }, 
    async getDetails(context, url) {
      try {
        const response = await axios.get(url);
        context.commit('createCard', response.data);
      } catch (error) {
        console.error(error);
      }
    }
  }
});