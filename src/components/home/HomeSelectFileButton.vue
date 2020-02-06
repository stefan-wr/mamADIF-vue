<template>
  <SelectFileInput
    class="hover-fx file-button metropolis"
    initial-text="Select ADIF File"
  />
</template>

<script>
import SelectFileInput from "@/components/base/SelectFileInput.vue";

export default {
  name: "HomeSelectFileButton",
  components: {
    SelectFileInput
  }
};
</script>

<style lang="scss" scoped>
.file-button {
  cursor: pointer;
  font-size: 30px;
  font-weight: 800;
  padding: 1.3em 3em;
  border-radius: 1em;

  @include large {
    font-size: 26px;
  }

  @include medium {
    font-size: 24px;
  }

  @include small {
    font-size: 18px;
  }

  color: $button-dark-txt-color;
  background-color: $button-dark-color;
  background: $main-gradient;

  box-shadow: -13px -13px 26px rgba(255, 255, 255, 1), 13px 13px 26px rgba(17, 67, 70, 0.2);

  &:hover {
    box-shadow: -13px -13px 20px rgba(255, 255, 255, 1), 13px 13px 26px rgba(17, 67, 70, 0.3);
  }
}
</style>
