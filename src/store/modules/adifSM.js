import Adif from "@/adif.js";
import router from "@/router/";

const state = {
  // Adif object holding all data inside adif file
  adif: new Adif(),

  // File info
  file: {
    name: "",
    size: 0,
    status: 0
  },

  // UI states
  ui: {
    loading: false,
    menuOpen: false,
    alert: {
      message: "",
      show: false
    }
  }
};

const getters = {
  // -------------------------------------------- FILE
  getFile: state => state.file,

  // -------------------------------------------- ADIF
  getAdif: state => state.adif,

  // Get total number of records in adif
  getNofRecords: state => state.adif.records.length,

  // Get number of individual fields in adif
  getNofFields: state => state.adif.getNofFields(),

  // Get array of available individual fields and their occurences in adif
  // Returns [ [fieldName, #], [fieldName, #], ... ] sorted by name
  getFieldOcc: state => state.adif.getFieldOccurences(),

  // -------------------------------------------- UI
  getUi: state => state.ui,
  getLoadingStatus: state => state.ui.loading,
  getMenuStatus: state => state.ui.menuOpen,
  getAlert: state => state.ui.alert
};

const mutations = {
  // Alert
  SET_ALERT: (state, message) => {
    state.ui.alert.message = message;
    state.ui.alert.show = true;
  },

  DISMISS_ALERT: state => {
    state.ui.alert.show = false;
    state.ui.alert.message = "";
  },

  // Menu
  TOGGLE_MENU: state => (state.ui.menuOpen = !state.ui.menuOpen),
  HIDE_MENU: state => (state.ui.menuOpen = false),
  SHOW_MENU: state => (state.ui.menuOpen = true),

  // Loading status
  TOGGLE_LOADING: state => (state.ui.loading = !state.ui.loading),
  START_LOADING: state => (state.ui.loading = true),
  STOP_LOADING: state => (state.ui.loading = false),

  // File
  SET_FILE: (state, { name, size }) => {
    state.file.name = name;
    state.file.size = size;
  },

  // Adif object
  SET_ADIF: (state, adif) => (state.adif = adif),

  // Remove a record by its id from the adif object
  REMOVE_RECORD: (state, id) => state.adif.removeRecord(id),

  // Remove a field given by name from a record given by its index
  REMOVE_FIELD_FROM_RECORD: (state, { recordIndex, fieldName }) => {
    state.adif.records[recordIndex].removeField(fieldName);
  },

  // Remove all occurences of a field given by its name everywhere
  REMOVE_FIELDS: (state, fieldName) => state.adif.removeFields(fieldName),

  // Rename all occurences of a field everywhere
  RENAME_FIELDS: (state, { oldName, newName }) => {
    state.adif.renameFields(oldName, newName);
  }
};

const actions = {
  createAdif({ commit }, file) {
    // Check file size
    if (file.size / 1024 / 1024 >= 1.5) {
      commit("SET_ALERT", "Error: file is too big (> 1.5 MB).");
      return;
    }

    // Create FileReader and define event-handlers
    const reader = new FileReader();

    reader.onloadstart = () => {
      commit("START_LOADING");
    };

    reader.onerror = e => {
      commit("STOP_LOADING");
      commit("SET_ALERT", e.target.error);
    };

    reader.onload = e => {
      var adif = new Adif();
      const result = adif.readAdif(e.target.result);
      if (result.code === -1) {
        commit("STOP_LOADING");
        commit("SET_ALERT", result.message);
      } else if (result.code === 1) {
        commit("SET_FILE", { name: file.name, size: file.size });
        commit("SET_ADIF", adif);
        commit("STOP_LOADING");
        commit("HIDE_MENU");
        router.push({ name: "file", params: { fileName: file.name.replace(/ /g, "+") } });
      }
    };
    // Set file to reader which initiates loading
    reader.readAsText(file);
  },

  // Rename all occurences of a field
  renameFields({ commit, getters }, { oldName, newName }) {
    newName = newName.trim();
    if (newName === "") {
      commit(
        "SET_ALERT",
        "A field name can not be left empty. Please provide at least one character"
      );
    } else if (getters.getAdif.fieldExists(newName)) {
      commit(
        "SET_ALERT",
        "This field name (" +
          newName.toUpperCase() +
          ") already exists in your file. Please enter a different name."
      );
    } else {
      commit("RENAME_FIELDS", { oldName, newName });
    }
  },

  // Remove a field from a record. Also remove record if it was the last field.
  removeFieldFromRecord({ commit, getters }, { recordIndex, fieldName }) {
    commit("REMOVE_FIELD_FROM_RECORD", { recordIndex, fieldName });
    if (getters.getAdif.records[recordIndex].fields.length === 0) {
      commit("REMOVE_RECORD", getters.getAdif.records[recordIndex].id);
    }
  }
};

export default { state, getters, actions, mutations };
