<template>
  <div>
    <FileStatsCard descriptor="Number of individual field types:">
      <span class="value metropolis">{{ nOfFields }}</span>
      <i class="fas fa-list" />
    </FileStatsCard>

    <FileStatsCard descriptor="Total number of records:">
      <span class="value metropolis">{{ nOfRecords }}</span>
      <i class="fas fa-headset" />
    </FileStatsCard>

    <FileStatsCard descriptor="Original ADIF file size:">
      <div>
        <span class="value metropolis">{{ (file.size / 1024).toFixed(2) }}</span>
        <span class="unit metropolis bold">KB</span>
      </div>
      <i class="fas fa-weight-hanging" />
    </FileStatsCard>
  </div>
</template>

<script>
import FileStatsCard from "@/components/file/stats/FileStatsCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "FileStats",

  components: {
    FileStatsCard
  },

  computed: {
    ...mapGetters({
      file: "getFile",
      nOfRecords: "getNofRecords",
      nOfFields: "getNofFields"
    })
  }
};
</script>

<style lang="scss" scoped>
.stat {
  .value {
    font-weight: 800;
    @include text-shadow;
  }

  .unit {
    margin-left: 0.5em;
    font-size: 0.5em;
  }

  i {
    font-size: 0.8em;
  }
}
</style>
