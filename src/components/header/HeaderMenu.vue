<template>
  <div class="menu">
    <SelectFileInput
      class="menu-button hover-fx"
      initial-text="Open new file"
    />
    <SaveFileButton
      v-if="fileMode"
      class="menu-button hover-fx"
      initial-text="Save current file"
    />
    <router-link
      v-if="fileMode"
      :to="{ name: 'home' }"
      class="menu-item"
      title="Go back to the cover page."
    >
      <span>Home</span><i class="fas fa-home" />
    </router-link>
    <!-- router-link
      :to="{ name: 'help' }"
      class="menu-item"
      title=""
    >
      <span>Help</span><i class="fas fa-question-circle" />
    </router-link-->
    <router-link
      :to="{ name: 'privacy' }"
      class="menu-item"
      title="Open the privacy policy."
    >
      <span>Privacy</span><i class="fas fa-user-secret" />
    </router-link>
    <a
      class="menu-item"
      target="_blank"
      href="https://github.com/stefan-wr"
    >
      <span>Github</span><i class="fab fa-github" />
    </a>
  </div>
</template>

<script>
import SelectFileInput from "@/components/base/SelectFileInput.vue";
import SaveFileButton from "@/components/base/SaveFileButton.vue";

export default {
  name: "HeadeMenu",

  components: {
    SelectFileInput,
    SaveFileButton
  },

  props: {
    fileMode: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 270px;
  padding: 60px 1em 1em 1em;
  background: $main-background-color-light;
  box-shadow: -13px -13px 26px rgba(255, 255, 255, 0.3), 13px 13px 26px rgba(17, 67, 70, 0.2);

  border-radius: 10px;
  @include large {
    border-radius: 8px;
  }

  .menu-button {
    @include flex-center;
    width: 100%;
    padding: 0.7em;
    margin-bottom: 1em;
    border-radius: 6px;
    color: $button-dark-txt-color;
    background-color: $button-dark-color;
    background: $main-gradient;
  }

  .menu-item {
    @include flex-center;
    width: 100%;
    padding: 0.7em;
    margin-bottom: 0.5em;
    border-radius: 6px;
    text-decoration: none;

    &:hover {
      filter: brightness(110%);
      span {
        text-decoration: underline;
      }
    }
  }
}
</style>
