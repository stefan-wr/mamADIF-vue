<template>
  <div class="view">
    <Header :file-mode="fileMode" />
    <ContentGrid
      :file-mode="fileMode"
      :svg="svg"
    >
      <slot />
    </ContentGrid>
    <Footer
      v-if="!fileMode"
      class="footer"
      :class="{ 'footer-m-only': !footerAlways }"
    />
  </div>
</template>

<script>
import ContentGrid from "@/components/base/ContentGrid.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/base/Footer.vue";

export default {
  name: "ViewGrid",
  components: {
    Header,
    ContentGrid,
    Footer
  },

  props: {
    fileMode: {
      type: Boolean,
      default: false
    },
    svg: {
      type: Boolean,
      default: true
    },
    footerAlways: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.view {
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  justify-items: center;
  align-items: start;
}

.footer {
  overflow: hidden;
}

.footer-m-only {
  display: none;
  @include medium {
    display: block;
  }
}
</style>
