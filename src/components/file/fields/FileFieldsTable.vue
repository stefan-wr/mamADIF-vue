<template>
  <div class="mam-table">
    <FileFieldsTableHead />
    <FileFieldsTableRow
      v-for="field in fieldOcc"
      :key="field[0] + '+' + Math.random()"
      :field="field"
      class="mam-table-row-wrap"
    />
  </div>
</template>

<script>
import FileFieldsTableHead from "@/components/file/fields/FileFieldsTableHead.vue";
import FileFieldsTableRow from "@/components/file/fields/FileFieldsTableRow.vue";
import { mapGetters } from "vuex";

export default {
  name: "FileFieldsTable",

  components: {
    FileFieldsTableHead,
    FileFieldsTableRow
  },

  computed: {
    ...mapGetters({ fieldOcc: "getFieldOcc" })
  }
};
</script>