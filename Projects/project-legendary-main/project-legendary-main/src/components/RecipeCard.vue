<template>
  <div
    class="recipe-card"
    @click="
      selectRecipe();
      $router.push('/recepten');
    "
  >
    <h2>{{ recipe.name }}</h2>
    <img :src="getImgUrl(recipe.image)" style="width: 100%; height: 100%;" />
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
  computed: {},
  methods: {
    selectRecipe() {
      return this.$store.commit("setSelectedRecipe", this.recipe);
    },
    getImgUrl(image) {
      return require("@/assets/" + image);
    }
  }
};
</script>

<style scoped>
.recipe-card {
  padding: 20px;
  margin: 5px;
}
.recipe-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
