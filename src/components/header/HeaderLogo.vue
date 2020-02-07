<template>
  <h1>
    <router-link to="/" class="logo-link hover-fx" title="Go back to the home page."
      >mamADIF</router-link
    >
  </h1>
</template>

<script>
export default {
  name: "HeaderLogo"
};
</script>

<style lang="scss" scoped>
h1 {
  margin: 0;
  font-weight: 800;
}

.logo-link {
  @include flex-center;
  padding: 0 0.3em;
  color: $button-dark-txt-color;
  background-color: $main-accent-color;
  background-image: $main-gradient;
}
</style>
