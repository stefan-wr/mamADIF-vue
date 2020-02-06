<template>
  <ViewGrid
    id="file"
    :file-mode="false"
    :svg="false"
    :footer-always="true"
  >
    <div class="content-nw txt-content">
      <h2>Help</h2>
    </div>
  </ViewGrid>
</template>

<script>
import ViewGrid from "@/components/base/ViewGrid.vue";

export default {
  name: "Main",
  components: {
    ViewGrid
  }
};
</script>

<style lang="scss" scoped></style>
