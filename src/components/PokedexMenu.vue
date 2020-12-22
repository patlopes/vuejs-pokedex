<template>
  <nav class="pokedex-menu-container">
    <input
      type="text"
      class="deep search"
      v-model="search"
      placeholder="Pesquise um pokemon..."
    />
    <ul class="deep">
      <li
        v-for="pokemon of searchPokemons"
        :key="pokemon"
        @click="getPokemon(pokemon)"
        class="jump list-item"
      >
        {{ pokemon }}
      </li>
      <li @click="addPokemons" key="more" class="jump list-item more">
        Carregar Mais
      </li>
    </ul>
  </nav>
</template>

<script>
import { setup } from "axios-cache-adapter";
/* 
Seguindo as politicas de uso da pokeapi
vou fazer cache das requisições 
*/
const api = setup({
  baseURL: "https://pokeapi.co/api/v2/",
  cache: {
    maxAge: 60 * 60 * 1000,
  },
});

export default {
  name: "PokedexMenu",
  data: () => ({
    pokemons: [],
    search: "",
  }),
  methods: {
    async addPokemons() {
      const { data } = await api.get(
        `/pokemon/?offset=${this.pokemons.length}&limit=20`
      );
      const { results } = data;
      for (const result of results) {
        this.pokemons.push(result.name);
      }
    },
    async getPokemon(pokemon) {
      const { data } = await api.get(`/pokemon/${pokemon}`);
      if (data) {
        this.$store.commit({
          type: "changePokemon",
          data,
        }); 
      }
    },
  },
  computed: {
    searchPokemons() {
      this.getPokemon(this.search);
      const pokemons = this.pokemons.filter((pokemon) => pokemon.includes(this.search))
      if(pokemons.length > 0) {
        return pokemons
      }
      else {
        return ["Procure pelo ID ou nome inteiro"]
      }
    },
  },
  created() {
    this.addPokemons();
    this.getPokemon(1);
  },
};
</script>

<style scoped>
.more {
  background: #ff3e3e;
  color: white !important;
}

.more:hover {
  background: #fc5858 !important;
}

.search {
  padding: 15px;
  font-weight: bold;
  font-size: medium;
}

.pokedex-menu-container {
  display: grid;
  grid-template-rows: 1fr 13fr;
  grid-row-gap: 20px;
}

.list-item {
  width: 90%;
  height: 40px;

  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-top: 10px;
  margin: 10px auto;

  cursor: pointer;

  font-weight: 800;
  color: #3d3d3d;
}

.list-item:hover {
  background: #f0f0f0;
}
</style>
