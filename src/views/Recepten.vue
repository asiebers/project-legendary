<template>
  <div class="recipes">
    <div class="recipe">
      <Recipe :recipe="recipe" />
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
<style scoped></style>
