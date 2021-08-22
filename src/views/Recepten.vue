<template>
  <div class="recipes">
    <div class="recipe-header">
      <h2>{{ recipe.name }}</h2>
      <p>{{ recipe.preparationTime }}</p>
      <p>{{ recipe.quantity }}</p>
    </div>
    <div class="recipe">
      <Recipe />
    </div>
  </div>
</template>

<script>
import Recipe from "../components/Recipe.vue";

export default {
  name: "Recipes",
  components: {
    Recipe
  },
  computed: {
    recipe() {
      return this.$store.state.selectedRecipe;
    }
  }
};
</script>
<style scoped>
.recipe-header {
  background-color: white;
  align-items: center;
  margin-right: 12.5%;
  margin-left: 12.5%;
}
.recipe-header:hover {
  transform: scale(1.08);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
