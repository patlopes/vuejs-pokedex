<template id="app-container">
  <div id="app">
    <Header class="header" />
    <Pokedex class="pokedex" />
    <PokedexMenu class="pokedex-menu" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Pokedex from "./components/Pokedex.vue";
import PokedexMenu from "./components/PokedexMenu.vue";

export default {
  name: "App",
  components: {
    Header,
    Pokedex,
    PokedexMenu,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow-y: scroll;
}

.header {
  grid-area: header;
}

.pokedex {
  grid-area: pokedex;
  overflow-y: hidden;
}

.pokedex-menu {
  grid-area: pokedex-m;
  overflow-y: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  width: 100vw;

  background: url("./assets/pokemon-bg.png");
  background-size: cover;
  background-repeat: no-repeat;

  display: grid;
  grid-template-columns: 5fr 5fr 1fr 3fr 1fr;
  grid-template-rows: 0.8fr 1fr 10fr 1.5fr;
  grid-template-areas:
    "header header header header header"
    ". . . . ."
    ". pokedex . pokedex-m ."
    ". . . . .";
}

@media only screen and (max-width: 1256px) {
  #app {
    height: auto;
    grid-template-columns: 1fr 8fr 1fr;
    grid-template-rows: 6vh 125vw 125vw 1vh;
    grid-row-gap: 25px;
    grid-template-areas:
      "header header header"
      ". pokedex ."
      ". pokedex-m .";
  }
}

@media only screen and (min-width: 900px) {
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(71, 71, 71, 0.5);
  }
}

.deep {
  background: #f9f9f9;
  border: 1px solid #cbcbcb;
  box-sizing: border-box;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

.jump {
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
}
</style>
