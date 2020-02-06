<template>
  <TableHead>
    <div class="mam-head inter">
      <span class="id">#{{ recordId }}</span>
      <button
        class="mam-table-btn dark hover-fx"
        @click="removeRecord(recordId)"
      >
        <span>Delete Record</span><i class="fas fa-trash-alt" />
      </button>
    </div>
  </TableHead>
</template>

<script>
import TableHead from "@/components/base/TableHead.vue";
import { mapMutations } from "vuex";

export default {
  name: "FileRecordsTabbleHead",

  components: {
    TableHead
  },

  props: {
    recordId: {
      type: Number,
      default: -1
    }
  },

  methods: {
    ...mapMutations({
      removeRecord: "REMOVE_RECORD"
    })
  }
};
</script>

<style lang="scss" scoped>
.mam-head {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.fas {
  margin-left: 0.5em !important;
}
</style>
