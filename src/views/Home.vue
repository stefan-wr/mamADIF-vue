<template>
  <ViewGrid id="home" :file-mode="false">
    <div class="grid-home content-nw">
      <!-- Section 1 -->
      <section class="grid-home-left">
        <h2 class="anonymous">&lt;What mamADIF does&gt;</h2>
        <p>
          With mamADIF you can open and edit
          <a class="a-fancy" href="https://adif.org/" target="_blank">
            ADIF (Amateur Radio Interchange Format)</a
          >
          files. Currently, mamADIF allows you to easily remove entire fields from all records of
          your file. Renaming fields, e.g. to allow application-specific fields to be imported by
          other log programs, is supported as well. Click on 'Select ADIF File' to start.
        </p>
        <p>
          <b>MamADIF will only accept .adi files. The ADX format is not yet supported.</b>
        </p>
      </section>

      <!-- File button -->
      <div class="center grid-home-nw">
        <HomeSelectFileButton />
        <p class="anonymous">&lt;Your file will not be uploaded!&gt;</p>
      </div>

      <!-- Section 2 -->
      <section class="grid-home-right">
        <h2 class="anonymous">&lt;About privacy&gt;</h2>
        <p>
          Because mamADIF runs locally in your browser, your ADIF files stay on your computer and
          will never be uploaded. This software is open source and does not collect any data other
          than what is necessary to give you access to this page.
        </p>
      </section>

      <!-- Links -->
      <div class="anonymous center links grid-home-right">
        <a class="a-fancy" href="#">&lt;github&gt;</a>
        <router-link :to="{ name: 'privacy' }" class="a-fancy" title="Open the privacy policy."
          >&lt;privacy&gt;</router-link
        >
      </div>
    </div>
  </ViewGrid>
</template>

<script>
import ViewGrid from "@/components/base/ViewGrid.vue";
import HomeSelectFileButton from "@/components/home/HomeSelectFileButton.vue";

export default {
  name: "Home",
  components: {
    ViewGrid,
    HomeSelectFileButton
  }
};
</script>

<style lang="scss" scoped>
#home {
  // Grid layout system
  // ------------------------
  .grid-home {
    height: 100%;
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-rows: auto auto auto minmax(2em, 4em);
    row-gap: 24px;

    // 3-columns layout at full width
    grid-template-columns:
      [content-start]
      minmax(3rem, $max-content-width / 3) [c-left]
      minmax(3rem, $max-content-width / 3) [c-right]
      minmax(3rem, $max-content-width / 3)
      [content-end];

    .grid-home-nw {
      grid-column: content-start / content-end;
    }

    .grid-home-left {
      grid-column: content-start / c-left;
    }

    .grid-home-right {
      grid-column: c-right / content-end;
    }

    // 2-columns layout at large
    @include large {
      grid-template-columns:
        [content-start]
        minmax(3rem, $max-content-width / 2) [c-center]
        minmax(3rem, $max-content-width / 2)
        [content-end];

      .grid-home-nw {
        grid-column: content-start / content-end;
      }

      .grid-home-left {
        grid-column: content-start / c-center;
      }

      .grid-home-right {
        grid-column: c-center / content-end;
      }
    }

    // 1-column layout at small
    @include medium {
      grid-template-columns: [content-start] 1fr [content-end];

      .grid-home-fw,
      .grid-home-left,
      .grid-home-right {
        grid-column: content-start / content-end;
      }
    }
  }
}

section {
  line-height: 1.6em;
  font-weight: 500;

  h2 {
    margin-top: 0;
    color: $txt-color-normal;
    font-weight: bold;
  }
}

.links {
  font-size: 16px;

  @include small {
    font-size: 14px;
  }

  a {
    margin: 0 12px;
  }
}
</style>
