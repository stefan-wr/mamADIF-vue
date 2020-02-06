// Field class
// --------------------------------------------------------
class Field {
  constructor(name, type, data) {
    this.name = name;
    this.type = type;
    this.data = data;
  }
}

// Record class
// --------------------------------------------------------
class Record {
  constructor(id) {
    this.id = id;
    this.fields = [];
  }

  // Add a field
  addField(field) {
    this.fields = [...this.fields, field];
  }

  // Remove a field by its name
  removeField(name) {
    this.fields = this.fields.filter(field => field.name !== name);
  }

  // Rename a field
  renameField(oldName, newName) {
    for (var field of this.fields) {
      if (field.name === oldName) {
        field.name = newName;
      }
    }
  }

  // Get adif string from record
  getADI() {
    var result = "";
    for (var field of this.fields) {
      result += "<" + field.name + ":" + field.data.length;
      if (field.type !== undefined) {
        result += ":" + field.type;
      }
      result += ">" + field.data;
    }
    return result + "<eor>";
  }
}

// Adif class
// --------------------------------------------------------
export default class Adif {
  constructor() {
    this.headerRaw = "";
    this.records = [];
    this.format = "";
  }

  detectAdifFormat(adifRaw) {
    if (adifRaw.includes("<ADX>") && adifRaw.includes("</ADX>")) {
      this.format = "ADX";
    } else {
      this.format = "ADI";
    }
  }

  readAdif(adifRaw) {
    this.detectAdifFormat(adifRaw);
    if (this.format === "ADX") {
      return { code: -1, message: "ADX formatted files are not supported!" };
    } else if (this.format === "ADI") {
      this.readADI(adifRaw);
      if (this.records.length === 0) {
        return { code: -1, message: "Couldn't find any records in this file." };
      }
      return { code: 1, message: "Success reading ADIF file." };
    } else {
      return { code: -1, message: "ERROR, something unexpected happened!" };
    }
  }

  readADI(adifRaw) {
    // Split raw adif string into header and records
    this.headerRaw;
    var splitted = adifRaw.split(/<eoh>/i);
    if (splitted.length === 1) {
      var recordsRaw = splitted[0];
    } else {
      this.headerRaw = splitted[0];
      var recordsRaw = splitted[1];
    }

    // Remove line breaks from records data, but not from header
    recordsRaw = recordsRaw.replace(/(\r\n|\n|\r)/gm, "");

    // Split records by '<eor>' and loop through them
    var recordsRawArray = recordsRaw.split(/<eor>/i);
    var rid = 1;
    for (var recordRaw of recordsRawArray.slice(0, -1)) {
      var record = new Record(rid++);
      // Split fields of a record by '<' and loop through them
      var fieldsRawArray = recordRaw.split("<").slice(1);
      for (var fieldRaw of fieldsRawArray) {
        // Split data specifiers and data b< '>'
        var fieldAndData = fieldRaw.split(">");
        // Get field data-specifiers by splitting by ':'
        var name, len, type;
        [name, len, type] = fieldAndData[0].split(":");
        len = Number(len);
        // Get field data, and cut it at data lenght-specifier
        var fieldData = fieldAndData[1].slice(0, len);
        // Add field object to list of fields
        record.addField(new Field(name, type, fieldData));
      }
      // Add record to the list of records
      this.addRecord(record);
    }
  }

  // Add a record to the list of records
  addRecord(record) {
    this.records = [...this.records, record];
  }

  // Remove a record by its id
  removeRecord(id) {
    this.records = this.records.filter(record => record.id !== id);
  }

  // Rename a field in all records
  renameFields(oldName, newName) {
    for (var record of this.records) {
      record.renameField(oldName, newName);
    }
  }

  // Delete field by name in all records
  removeFields(name) {
    for (var record of this.records) {
      record.removeField(name);
    }
  }

  // Get number of individual fields
  getNofFields() {
    var fields = [];
    for (const record of this.records) {
      for (const field of record.fields) {
        if (!fields.includes(field.name)) {
          fields.push(field.name);
        }
      }
    }
    return fields.length;
  }

  // Get array of available individual fields and their occurences
  // Returns [ [fieldName, #], [fieldName, #], ... ] sorted by name
  getFieldOccurences() {
    var fieldOccurences = {};
    for (const record of this.records) {
      for (const field of record.fields) {
        if (fieldOccurences.hasOwnProperty(field.name)) {
          fieldOccurences[field.name]++;
        } else {
          fieldOccurences[field.name] = 1;
        }
      }
    }
    // Sort alphabetically and return as array
    var result = Object.entries(fieldOccurences);
    result = result.sort(function(a, b) {
      if (a[0].toLowerCase() < b[0].toLowerCase()) return -1;
      if (a[0].toLowerCase() > b[0].toLowerCase()) return 1;
      return 0;
    });
    return result;
  }

  // Check if a field already exists, case insensitive
  fieldExists(name) {
    for (const field of this.getFieldOccurences()) {
      if (name.toLowerCase() === field[0].toLowerCase()) {
        return true;
      }
    }
    return false;
  }

  // Get complete file-to-download ADIF string from adif object
  getADI() {
    var result = "";
    // Add header if it exists
    if (this.headerRaw !== "") {
      result += this.headerRaw + "<eoh>\r\n";
    }
    // Add recordds
    for (const record of this.records) {
      result += record.getADI() + "\r\n";
    }
    return result;
  }
}
