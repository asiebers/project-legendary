<template>
  <div
    class="recipe-card"
    @click="
      selectRecipe();
      $router.push('/recepten');
    "
  >
    <h2>{{ recipe.name }}</h2>
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
  },
  methods: {
    selectRecipe() {
      return this.$store.commit("setSelectedRecipe", this.recipe);
    }
  }
};
</script>

<style scoped>
.recipe-card {
  padding: 20px;
  margin: 5px;
  width: 75%;
  background-color: white;
}
.recipe-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
