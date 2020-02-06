<template>
  <label title="Open a new ADIF file.">
    <span>
      {{ initialText }}
      <i
        class="fas"
        :class="{ 'fa-file-import': !loading, 'fa-spinner spin': loading }"
      />
    </span>
    <input
      type="file"
      accept=".adif, .adi"
      @change="readAdifFile($event)"
    >
  </label>
</template>

<script>
import Adif from "@/adif.js";
import { mapGetters } from "vuex";

export default {
  name: "SelectFileInput",

  props: {
    initialText: {
      type: String,
      default: "Select ADIF file"
    }
  },

  computed: {
    ...mapGetters({
      loading: "getLoadingStatus"
    })
  },

  methods: {
    readAdifFile(event) {
      this.$store.dispatch("createAdif", event.target.files[0]);
    }
  }
};
</script>

<style lang="scss" scoped>
label {
  position: relative;
  overflow: hidden;
  display: inline-block;
  cursor: pointer;

  input {
    position: absolute;
    height: 0px;
    width: 0px;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
  }

  .spin {
    animation: spin 1.4s linear infinite;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
