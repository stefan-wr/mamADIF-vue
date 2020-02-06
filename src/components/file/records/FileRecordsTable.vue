<template>
  <div>
    <div class="mam-table">
      <FileRecordsTableRow
        v-for="(record, index) in adif.records"
        :key="index"
        :record="record"
        :record-index="index"
        class="record-row"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FileRecordsTableRow from "@/components/file/records/FileRecordsTableRow.vue";

export default {
  name: "FileRecordsTable",

  components: {
    FileRecordsTableRow,
  },

  computed: {
    ...mapGetters({ adif: "getAdif" })
  }
};
</script>

<style lang="scss" scoped>
.record-row {
  margin-bottom: 32px;

  --border-width: 3px;
  @include medium {
    --border-width: 2px;
  }
  border-left: var(--border-width) solid $main-accent-color;
  border-bottom: var(--border-width) solid $main-accent-color;
  border-radius: 0 0 var(--border-width) 1em;
}
</style>
