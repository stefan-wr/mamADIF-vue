<template>
  <a
    class="anonymous a-fancy"
    :href="linkToFieldDescription()"
    :title="linkTitle()"
    target="_blank"
  >
    {{ fieldName.replace(/_/g, "_&#8203;") }}
  </a>
</template>

<script>
export default {
  name: "FieldLink",

  props: {
    fieldName: {
      type: String,
      default: ""
    }
  },

  methods: {
    linkToFieldDescription() {
      return "https://adif.org/310/ADIF_310.htm#QSO_Field_" + this.fieldName;
    },

    linkTitle() {
      return "Show description of field  " + this.fieldName + "  on the official ADIF website.";
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  word-break: break-word;
}
</style>
