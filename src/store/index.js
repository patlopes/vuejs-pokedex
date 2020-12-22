import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemon: {
      name: "",
      image: "",
      types: [],
      base_experience: 0,
      moves: []
    }
  },
  getters: {},
  mutations: {
    changePokemon(state, payload) {
      const { data } = payload;
      const pokemon = {
        name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
        moves: data.moves.map(move => move.move.name),
        types: data.types.map(type => type.type.name),
        base_experience: data.base_experience,
        image: data.sprites.other["official-artwork"].front_default
      };
      state.pokemon = pokemon;
    }
  },
  actions: {}
});
