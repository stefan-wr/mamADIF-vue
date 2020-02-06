<template>
  <button
    title="Save current file with all changes."
    @click="saveFile"
  >
    <span>
      {{ initialText }}
      <i class="fas fa-file-download" />
    </span>
    <i class="lar la-save" />
  </button>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SaveFileButton",

  props: {
    initialText: {
      type: String,
      default: "Save file"
    }
  },

  computed: {
    ...mapGetters({
      file: "getFile",
      adif: "getAdif"
    })
  },

  methods: {
    saveFile() {
      var downloadLink = document.createElement("a");
      downloadLink.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(this.adif.getADI())
      );
      downloadLink.setAttribute("download", this.file.name);
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  }
};
</script>
