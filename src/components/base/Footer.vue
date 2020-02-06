<template>
  <footer class="footer">
    <span class="anonymous">&lt;eor&gt;</span>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  height: 200px;
  position: relative;
  background: $main-gradient;
  color: $button-dark-txt-color;
  box-shadow: 0 0 24px rgba(17, 67, 70, 0.4);

  @include medium {
    height: 100px;
  }

  span {
    font-size: 200px;
    line-height: 200px;
    opacity: 0.1;
    user-select: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -57%);

    @include medium {
      font-size: 100px;
      line-height: 100px;
    }
  }
}
</style>
