<template>
  <div id="app">
    <router-view />
    <Alert />
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
@import "@/styles/compose.scss";

#app {
  font-family: "Inter", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
