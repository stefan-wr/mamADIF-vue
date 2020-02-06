<template>
  <h1>
    <router-link
      to="/"
      class="logo-link hover-fx"
      title="Go back to the cover page."
    >
      mamADIF
    </router-link>
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
}

.logo-link {
  @include flex-center;
  padding: 0 0.3em;
  color: $button-dark-txt-color;
  background-image: $main-gradient;
  //border-radius: 10px;

  @include large {
    //border-radius: 8px;
  }
}
</style>