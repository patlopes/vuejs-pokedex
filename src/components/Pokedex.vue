<template>
  <div class="deep container">
    <div class="pokemon-garden">
      <img :src="this.$store.state.pokemon.image" alt="pokemon" />
    </div>

    <div class="pokemon-info jump">
      <div class="nome">
        <span class="title">Nome: </span
        ><span>{{ this.$store.state.pokemon.name }}</span>
      </div>

      <div class="types">
        <span class="title">Tipos: </span>
        <span
          v-for="type of this.$store.state.pokemon.types"
          :key="type"
          :class="'type ' + type"
        >
          {{ type }}
        </span>
      </div>

      <div class="xp">
        <span class="title">XP Base: </span
        ><span>{{ this.$store.state.pokemon.base_experience }}</span>
      </div>

      <div class="movimentos">
        <span class="title">Movimentos:</span>
      </div>

      <ul class="moves deep">
        <li class="jump list-item" v-for="move of this.$store.state.pokemon.moves" :key="move">
          {{ move }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pokedex",
  data: () => ({}),
};
</script>

<style scoped>
span {
  font-style: normal;
  font-size: 17px;
  line-height: 16px;
}

.title {
  color: #707070;
  font-weight: bold;
}

@media only screen and (max-width: 1550px) {
  span {
    font-size: 15px;
  }
}

@media only screen and (max-width: 1400px) {
  span {
    font-size: 13px;
  }
}

@media only screen and (max-width: 1256px) {
  span {
    font-size: 22px;
  }
}

@media only screen and (max-width: 850px) {
  span {
    font-size: 13px;
  }
}

@media only screen and (max-width: 500px) {
  span {
    font-size: 8px;
  }
}

.container {
  overflow-y: hidden;
  display: grid;
  grid-template-columns: 1fr 2fr 5fr 2fr 1fr;
  grid-template-rows: 1fr 6fr 1fr 12fr 1fr;

  grid-template-areas:
    ". . . . ."
    ". . garden . ."
    ". . . . ."
    ". pokemon-info pokemon-info pokemon-info ."
    ". . . . .";
}

.pokemon-garden {
  background: url(../assets/pokemon-bg-pokedex.png);
  background-size: cover;
  background-repeat: no-repeat;

  box-sizing: border-box;
  box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.5);
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  grid-area: garden;
}

.pokemon-garden > img {
  width: 85%;
}

.pokemon-info {
  overflow-y: hidden;
  grid-area: pokemon-info;

  display: grid;
  grid-template-columns: 1fr 6fr 6fr 1fr;
  grid-template-rows: 2fr 2fr 1fr 2fr 3fr 2fr 14fr 1fr;

  grid-template-areas:
    ". . . ."
    ". nome types ."
    ". . . ."
    ". xp . . "
    ". . . ."
    ". movimentos . ."
    ". moves moves ."
    ". . . .";
}

.moves {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 12px;
  grid-area: moves;
}

.list-item {
  display: flex;
  
  align-items: center;
  padding: 6px;
  margin-top: 15px;
  margin-left: 2px;

  font-weight: 800;
  color: #3d3d3d;
}

.nome {
  grid-area: nome;
}

.types {
  grid-area: types;
}

.xp {
  grid-area: xp;
}

.movimentos {
  grid-area: movimentos;
}

.type {
  box-sizing: border-box;
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.411);
  border-radius: 5px;

  color: #fff;

  margin-left: 5px;
  padding: 4px;
}

.normal {
  background-color: #a8a878;
}

.fire {
  background-color: #f08030;
}

.water {
  background-color: #6890f0;
}

.electric {
  background-color: #f8d030;
}

.grass {
  background-color: #78c850;
}

.ice {
  background-color: #98d8d8;
}

.ground {
  background-color: #e0c068;
}

.flying {
  background-color: #a890f0;
}

.ghost {
  background-color: #705898;
}

.rock {
  background-color: #b8a038;
}

.fighting {
  background-color: #c03028;
}

.poison {
  background-color: #a040a0;
}

.psychic {
  background-color: #f85888;
}

.bug {
  background-color: #a8b820;
}

.dark {
  background-color: #705848;
}

.steel {
  background-color: #b8b8d0;
}

.dragon {
  background-color: #7038f8;
}
</style>
