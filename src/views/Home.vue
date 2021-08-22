<template>
  <div class="home">
    <h1>Wat gaan we eten vandaag?</h1>
    <div class="recipes">
      <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RecipeCard from "@/components/RecipeCard.vue";
import constants from "../store/constants.js";

export default {
  name: "Home",
  components: {
    RecipeCard
  },
  data() {
    return {
      recipes: constants.recipes
    };
  }
};
</script>
<style scoped>
.recipes {
  display: flex;
  align-items: center;
}
</style>
