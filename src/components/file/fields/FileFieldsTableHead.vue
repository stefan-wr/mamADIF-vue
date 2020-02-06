<template>
  <TableHead>
    <div class="mam-head inter">
      <div class="left-c">
        <span>Name</span>
      </div>
      <div class="right-c">
        <span>Count</span>
      </div>
    </div>
  </TableHead>
</template>

<script>
import TableHead from "@/components/base/TableHead.vue";

export default {
  name: "FileFieldsTableHead",

  components: {
    TableHead
  }
};
</script>

<style lang="scss" scoped>
.mam-head {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .left-c {
    height: 100%;
    width: 55%;
  }

  .right-c {
    height: 100%;
    width: 45%;

    & > * {
      padding-left: 1em;
    }
  }

  @include small {
    .left-c {
      width: 55%;
    }
    .right-c {
      width: 45%;
    }
  }
}
</style>
