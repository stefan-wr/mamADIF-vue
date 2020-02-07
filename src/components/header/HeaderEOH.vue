<template>
  <div class="header-item eoh anonymous">&lt;eoh&gt;</div>
</template>

<script>
export default {
  name: "HeaderEOH"
};
</script>

<style lang="scss" scoped>
.eoh {
  user-select: none;
  margin-left: 0 !important;
  color: $txt-color-accent;
  opacity: 0.18;

  font-size: 28px;
  @include large {
    font-size: 26px;
  }
  @include small {
    font-size: 24px;
  }

  &:hover {
    animation: eoh 2s ease-out infinite;
  }

  @keyframes eoh {
    0% {
      transform: rotateY(0deg);
    }
    25% {
      transform: rotateY(-30deg);
    }
    75% {
      transform: rotateY(40deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
}
</style>
