<template>
  <div class="header-border" />
</template>

<script>
export default {
  name: "HorizontalBorder"
};
</script>

<style lang="scss" scoped>
.header-border {
  width: 100%;
  height: 3px;
  opacity: 0.9;
  background: $main-gradient-h-animate;
  background-size: 300% 100%;
  background-position: 0% 50%;

  animation: emeter-animation 10s linear infinite;
  @keyframes emeter-animation {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }

  @include medium {
    height: 2px;
  }
}
</style>