<template>
  <div class="recipe">
    <h2>Ingredienten</h2>
    <div class="recipe-block">
      <p>Hier komt de ingredientenlijst</p>
    </div>
    <h2>Bereidingswijze</h2>
    <div class="recipe-block">
      <p>Hier komt de bereidingswijze</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recipes",
  data() {
    return {};
  },
  computed: {
    recipe() {
      return this.$store.state.recipe;
    }
  }
};
</script>
<style scoped></style>
