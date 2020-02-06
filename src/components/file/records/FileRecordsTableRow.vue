<template>
  <div>
    <div class="mam-row record">
      <div class="mam-table">
        <FileRecordsTableHead :record-id="record.id" />

        <div
          v-for="(field, findex) in record.fields"
          :key="record.id + findex"
          class="mam-table-row-wrap"
        >
          <div class="mam-row field-row">
            <div class="top">
              <span class="field-label anonymous">{{ field.name.toUpperCase() }}</span>

              <div class="actions">
                <button
                  class="mam-table-btn light hover-fx hover-red"
                  :title="'Delete field  ' + field.name.toUpperCase() + '  from record.'"
                  @click="
                    removeFieldFromRecord({ recordIndex: recordIndex, fieldName: field.name })
                  "
                >
                  <span class="hide-l">Delete</span>
                  <i class="fas fa-trash-alt" />
                </button>
              </div>
            </div>

            <div class="bottom">
              <div class="left">
                <span class="data-label metropolis">Data:</span>
                <span class="data">{{ field.data }}</span>
              </div>
              <div class="actions">
                <button
                  class="mam-table-btn light hover-fx"
                  :title="'Rename field  ' + field.name.toUpperCase()"
                  @click="toggleRenameInput()"
                >
                  <span class="hide-l">Change</span>
                  <i class="fas fa-edit" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FileRecordsTableHead from "@/components/file/records/FileRecordsTableHead.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "FileRecordsTableRow",

  components: {
    FileRecordsTableHead
  },

  props: {
    record: {
      type: Object,
      default: () => {}
    },

    recordIndex: {
      type: Number,
      default: -1
    }
  },

  computed: {
    ...mapGetters({ adif: "getAdif" })
  },

  methods: {
    ...mapMutations({
      removeRecord: "REMOVE_RECORD",
      renameField: "RENAME_FIELDS"
    }),
    ...mapActions(["removeFieldFromRecord"]),

    toggleRenameInput() {
      return true;
    }
  }
};
</script>

<style lang="scss" scoped>
.record {
  flex-wrap: wrap !important;
  margin-bottom: 24px;

  @include large {
    .fas {
      margin: 0;
    }
  }
}

.field-row {
  width: 100%;
  flex-wrap: wrap;
}

.top,
.bottom {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.top {
  margin-bottom: 0.3em;
  @include medium {
    margin-bottom: 0.5em;
  }
}

.actions {
  height: 100%;
  display: flex;
  align-items: center;

  button:last-child {
    margin-left: 0.7em;
  }

  & button {
    flex-shrink: 0;

    @include large {
      .fas {
        margin: 0;
      }
    }
  }
}

.field-label {
}

.data-label {
  font-size: 0.8em;
  font-weight: bold;
  color: $txt-color-accent;
}
</style>
