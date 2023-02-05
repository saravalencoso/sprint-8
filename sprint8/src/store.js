// store.js
import { createStore } from 'vuex';
import axios from 'axios'

export default createStore({
  state: {
    results: [], 
    next: 'https://swapi.dev/api/starships/'
  },
  mutations: {
    agregarAmigo(state) {
      state.amigos = [state.amigo, ...state.amigos]
    }, 
    updateResults(state, results) {
      state.results = state.results.concat(results);
    },
    updateNext(state, next) {
      state.next = next;
    }
  },
  actions: {
    addAmigoAction(context) {
        context.commit('agregarAmigo');
    },
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
    }
  }
});