<template>
  <div class="recipe">
    <div class="recipe-header">
      <h2>{{ recipe.name }}</h2>
      <img :src="getImgUrl(recipe.image)" class="image-header" />
      <p>{{ recipe.preparationTime }}</p>
      <p>{{ recipe.quantity }}</p>
    </div>
    <div class="recipe-ingredients">
      <h2>Ingredienten</h2>
      <div>
        <li v-for="ingredient in ingredients" :key="ingredient.name">
          {{ ingredient.name }}, {{ ingredient.quantity }}
          {{ ingredient.units }}
        </li>
      </div>
    </div>
    <h2>Bereidingswijze</h2>
    <div>
      <p>Hier komt de bereidingswijze te staan</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recipes",
  data() {
    return {};
  },
  props: {
    recipe: Object
  },
  computed: {
    ingredients() {
      return this.recipe.ingredients;
    }
  },
  methods: {
    getImgUrl(image) {
      return require("@/assets/" + image);
    }
  }
};
</script>
<style scoped>
.recipe {
  background-color: floralwhite;
}
.recipe-header {
  padding: 20px;
  margin: 5px;
}
.image-header {
  max-width: 100%;
  max-height: 400px;
}
</style>
