<template>
  <div>
    <div class="mam-row">
      <slot />
    </div>
    <HorizontalBorder class="table-ruler" />
  </div>
</template>

<script>
import HorizontalBorder from "@/components/base/HorizontalBorder.vue";

export default {
  name: "TableHead",

  components: {
    HorizontalBorder
  }
};
</script>

<style lang="scss" scoped>
.mam-row {
  min-height: auto;
  padding: 0.5em 0.5em !important;
}

.table-ruler {
  height: 2px !important;
  opacity: 0.4;
}
</style>
