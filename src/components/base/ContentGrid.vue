<template>
  <main class="content-grid">
    <svg
      v-if="!fileMode && svg"
      class="hide-m"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="top-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#2cafa4" />
          <stop offset="20%" stop-color="#2cafa4" />
          <stop offset="100%" stop-color="#39b470" />
        </linearGradient>
        <linearGradient id="bottom-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#39b470" />
          <stop offset="80%" stop-color="#2cafa4" />
          <stop offset="100%" stop-color="#2cafa4" />
        </linearGradient>
      </defs>
      <polygon class="top" points="42 0 100 0 100 58" fill="url('#top-gradient')" />
      <polygon class="bottom" points="0 42 0 100 58 100" fill="url('#bottom-gradient')" />
    </svg>
    <slot />
  </main>
</template>

<script>
export default {
  name: "ContentGrid",

  props: {
    fileMode: {
      type: Boolean,
      default: false
    },
    svg: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
// Grid Parameters
.content-grid {
  width: 100%;
  height: 100%;
  display: grid;
  align-items: start;
  justify-content: center;
  padding-top: 24px;
  grid-template-columns:
    [edge-left] minmax(24px, 1fr)
    [content-start] auto [content-end]
    minmax(24px, 1fr) [edge-right];

  @include medium {
    padding-top: 20px;
    grid-template-columns:
      [edge-left] 9%
      [content-start] auto [content-end]
      9% [edge-right];
  }

  @include small {
    padding-top: 16px;
    grid-template-columns:
      [edge-left] 1.1em
      [content-start] 1fr [content-end]
      1.1em [edge-right];
  }

  .content-fw {
    grid-column: edge-left / span edge-right;
  }

  .content-nw {
    grid-column: content-start / span content-end;
  }
}

// Background SVG
.content-grid {
  position: relative;

  svg {
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    .top,
    .bottom {
      filter: drop-shadow(0 0 24px rgba(17, 67, 70, 0.4));
    }
  }
}
</style>
