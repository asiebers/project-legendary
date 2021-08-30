<template>
  <div
    class="recipe-card"
    @click="
      selectRecipe();
      $router.push('/recepten');
    "
  >
    <h2>{{ recipe.name }}</h2>
    <img :src="getImgUrl(recipe.img)" style="width: 100%; height: 100%;" />
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
    return {
      image: "@/assets/lasagne.jpeg"
    };
  },
  computed: {},
  methods: {
    selectRecipe() {
      return this.$store.commit("setSelectedRecipe", this.recipe);
    },
    getImgUrl(pic) {
      console.log(pic);
      return require("@/assets/" + pic);
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
