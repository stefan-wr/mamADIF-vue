<template>
  <div>
    <!-- Hidden rename input-->
    <div
      ref="renameWrap"
      class="mam-row rename-wrap hide"
    >
      <div class="left">
        <input
          ref="renameInput"
          v-model="newName"
          class="anonymous"
          type="text"
          :placeholder="'Enter new name for ' + field[0].toUpperCase()"
          @keyup.enter="renameField()"
          @keyup.esc="toggleRenameInput()"
        >
      </div>
      <div class="right">
        <div class="actions">
          <button
            class="mam-table-btn dark hover-fx"
            @click="renameField()"
          >
            <span class="hide-l">Apply</span><i class="fas fa-check" />
          </button>
          <button
            class="mam-table-btn light hover-fx hover-red"
            @click="toggleRenameInput()"
          >
            <span class="hide-l">Cancel</span><i class="fas fa-times" />
          </button>
        </div>
      </div>
    </div>

    <!-- Main row content -->
    <div
      ref="fieldRow"
      class="mam-row field-row"
      :class="{ 'hide-row': renaming }"
    >
      <div class="left">
        <!-- Name -->
        <FieldLink
          class="field-name"
          :field-name="field[0].toUpperCase()"
        />
      </div>

      <div class="right">
        <!-- Count -->
        <div
          class="field-occ metropolis"
          :title="field[1] + '  (number of occurences in ADIF file)'"
        >
          {{ normalizedOcc() }}
        </div>

        <!-- Actions -->
        <div class="actions">
          <button
            class="mam-table-btn light hover-fx"
            :title="'Rename field  ' + field[0].toUpperCase()"
            @click="toggleRenameInput()"
          >
            <span class="hide-l">Rename</span><i class="fas fa-edit" />
          </button>

          <button
            class="mam-table-btn light hover-fx hover-red"
            :title="'Delete all occurences of field  ' + field[0].toUpperCase()"
            @click="removeFields(field[0])"
          >
            <span class="hide-l">Delete</span><i class="fas fa-trash-alt" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FieldLink from "@/components/file/fields/FieldLink.vue";
import { mapMutations } from "vuex";

export default {
  name: "FileFieldsTableRow",
  components: {
    FieldLink
  },

  props: {
    field: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      newName: "",
      renaming: false
    };
  },

  methods: {
    ...mapMutations({
      removeFields: "REMOVE_FIELDS"
    }),

    normalizedOcc() {
      const maxOcc = 99999;
      if (this.field[1] > maxOcc) {
        return "> " + maxOcc;
      } else {
        return this.field[1];
      }
    },

    toggleRenameInput() {
      this.renaming = !this.renaming;
      this.$refs.renameWrap.classList.toggle("hide");
      this.$refs.renameWrap.classList.toggle("show-flex");
      this.$refs.renameWrap.classList.toggle("animate-in");

      if (this.renaming) {
        this.newName = "";
        this.$refs.renameInput.focus();
      }
    },

    renameField() {
      var temp = this.newName;
      this.newName = "";
      this.toggleRenameInput();
      this.$store.dispatch("renameFields", { oldName: this.field[0], newName: temp });
    },

    getLinkToFieldDescription() {
      return "https://adif.org/310/ADIF_310.htm#QSO_Field_" + this.field[0].toUpperCase();
    }
  }
};
</script>

<style lang="scss" scoped>
.field-row {
  opacity: 1;
  transform: translateX(0);
  transition: $transition-time ease;

  &.hide-row {
    opacity: 0;
    transform: translateX(16px);
  }
}

.left {
  height: 100%;
  display: flex;
  align-items: center;
  /*   max-width: 60%;
  overflow: hidden;

  @include medium {
    max-width: 65%;
  } */
}

.right {
  height: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-width: 45%;
  @include medium {
    min-width: 35%;
  }

  & > * {
    padding-left: 1em;
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

.field-name {
  margin-left: 2px;
}

.field-occ {
  font-size: 1.1em;
  font-weight: 700;
  word-break: break-word;
}

.rename-wrap {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: $main-background-color;
  transition: all $transition-time * 2;

  .left {
    flex-grow: 1;
  }

  .right {
    justify-content: flex-end;
  }

  input {
    width: 100%;
    height: 32px;
    padding: 0.3em 0.7em;
    color: inherit;
    border: none;
    border: 1px solid $button-light-color;
    border-radius: 6px;

    &:focus {
      border-color: $main-accent-color;
    }

    @include medium {
      height: 36px;
      @supports (-webkit-overflow-scrolling: touch) {
        font-size: 16px;
      }
    }
  }

  &.animate-in {
    animation: slide-in $transition-time ease;
    @keyframes slide-in {
      from {
        transform: translateX(-16px);
      }
      to {
        transform: translateX(0);
      }
    }
  }
}
</style>
