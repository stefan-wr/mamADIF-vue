<template>
  <div id="app">
    <router-view />
    <Alert />
    <!-- div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div -->
  </div>
</template>

<script>
import Alert from "@/components/base/Alert.vue";

export default {
  name: "App",
  components: {
    Alert
  }
};
</script>

<style lang="scss">
@import "@/styles/fonts.scss";
@import "@/styles/fontawesome/fontawesome.scss";
@import "@/styles/fontawesome/brands.scss";
@import "@/styles/normalize.scss";
@import "@/styles/shared.scss";

#app {
  font-family: "Inter", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
