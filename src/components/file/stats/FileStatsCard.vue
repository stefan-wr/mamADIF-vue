<template>
  <div class="stat">
    <h3 class="inter mormal txt-grad">
      {{ descriptor }}
    </h3>
    <div class="value-wrap">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "FileStatsCard",

  props: {
    descriptor: {
      type: String,
      default: "Stat description"
    }
  }
};
</script>

<style lang="scss" scoped>
.stat {
  font-size: 50px;
  background: $button-light-color;
  border-radius: 0.4em;
  padding: 0.3em 0.6em;
  margin-bottom: 0.3em;

  h3 {
    margin: 0 0 1em 0;
  }

  .value-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @include large {
    font-size: 40px;
  }

  @include medium {
    font-size: 34px;
  }

  @include small {
    font-size: 24px;
  }
}
</style>
