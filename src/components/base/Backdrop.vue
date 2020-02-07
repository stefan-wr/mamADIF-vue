<template>
  <div
    class="backdrop"
    @click="$emit('click')"
  />
</template>

<script>
export default {
  name: "Backdrop"
};
</script>

<style lang="scss" scoped>
.backdrop {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background: $main-gradient;
  opacity: 0.7;
  filter: brightness(70%);

  animation: fade-in $transition-time;
  @keyframes fade-in {
    from {opacity: 0;}
    to {opacity: 0.7;}
  }
}
</style>
