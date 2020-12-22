<template>
  <header>
    <img src="../assets/pokedex-logo.svg" alt="pokedex logo" />
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ff3e3e;
  grid-area: header;
}

header > img {
  height: 95%;
}
</style>
