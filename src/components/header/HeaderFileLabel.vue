<template>
  <div style="text-overflow:ellipsis;">
    <span class="metropolis bold">Current&nbsp;File:</span>
    <span class="filename">{{ normalizedFilename }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HeaderFileLabel",

  computed: {
    ...mapGetters(["getFile"]),

    normalizedFilename: function() {
      const file = this.getFile;
      const maxLength = 70;
      if (file.name.length <= maxLength - 5) {
        return file.name;
      } else {
        return file.name.slice(0, maxLength - 5) + "[...]";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.filename {
  margin-left: 0.75em;
  word-break: break-all;
}
</style>