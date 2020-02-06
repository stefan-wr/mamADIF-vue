<template>
  <ViewGrid
    id="file"
    :file-mode="true"
  >
    <div class="content-nw grid-file">
      <FileSection
        name="Fields"
        class="fields"
      >
        <FileFieldsTable />
      </FileSection>

      <FileSection
        name="Statistics"
        class="stats"
      >
        <FileStats />
      </FileSection>

      <!-- FileSection
        name="Records"
        class="records"
        :initial-show="false"
      >
        <FileRecordsTable />
      </FileSection-->
    </div>
  </ViewGrid>
</template>

<script>
import FileStats from "@/components/file/stats/FileStats.vue";
import FileFieldsTable from "@/components/file/fields/FileFieldsTable.vue";
import ViewGrid from "@/components/base/ViewGrid.vue";
import FileSection from "@/components/file/FileSection.vue";
import FileRecordsTable from "@/components/file/records/FileRecordsTable.vue";

export default {
  name: "Main",
  components: {
    ViewGrid,
    FileSection,
    FileStats,
    FileFieldsTable
  }
};
</script>

<style lang="scss" scoped>
#file {
  .grid-file {
    width: 100%;
    min-width: 70vw;
    margin-bottom: 24px;

    // 2-column layout with a margin center column
    display: grid;
    align-items: start;
    justify-content: center;
    row-gap: 24px;
    grid-template-columns:
      [content-start]
      minmax(3rem, ($max-content-width / 3) * 2) [c-left]
      24px [c-right]
      minmax(3rem, $max-content-width / 3)
      [content-end];

    // 1-column layout for large and smaller
    @include large {
      grid-template-columns:
        [content-start]
        minmax(3rem, 3fr) [c-left]
        24px [c-right]
        minmax(3rem, 2fr)
        [content-end];
    }

    @include medium {
      column-gap: 0;
      grid-template-columns: [content-start] 1fr [content-end];
    }

    // Grid items
    .fields {
      grid-column: content-start / c-left;
    }

    .stats {
      grid-column: c-right / content-end;
      grid-row: 1;
    }

    .records {
      grid-column: content-start / content-end;
    }

    @include medium {
      .fields,
      .stats {
        grid-column: content-start / content-end;
      }
    }
  }
}
</style>
