<template>
  <div class="home">
    <img alt="Foto Annemiek" src="../assets/Annemiek.jpeg" />
    <HelloWorld msg="Welcome to Annemiek's App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
