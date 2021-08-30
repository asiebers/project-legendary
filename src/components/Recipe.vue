<template>
  <div class="recipe">
    <h2>Ingredienten</h2>
    <div class="recipe-block ingredients">
      <div>
        <li v-for="ingredient in ingredients" :key="ingredient.name">
          {{ ingredient.name }}, {{ ingredient.quantity }}
          {{ ingredient.units }}
        </li>
      </div>
    </div>
    <h2>Bereidingswijze</h2>
    <div class="recipe-block directions">
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
      return this.$store.state.selectedRecipe;
    },
    ingredients() {
      return this.recipe.ingredients;
    }
  }
};
</script>
<style scoped></style>
