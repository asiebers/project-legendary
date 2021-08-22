<template>
  <div class="recipe-card">
    <h4>{{ recipe.name }}</h4>
    <p>{{ recipe.preparationTime }}</p>
    <p>{{ recipe.quantity }}</p>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: {
    recipe: Object
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.recipe-card {
  padding: 20px;
  width: 75%;
}
.recipe-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
