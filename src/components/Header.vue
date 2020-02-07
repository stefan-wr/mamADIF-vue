<template>
  <header>
    <div class="header-content">
      <!-- Menu button -->
      <HeaderMenuButton class="header-item header-button" :file-mode="fileMode" />

      <!-- Logo -->
      <HeaderLogo
        :class="{ 'logo-file': fileMode, 'logo-home': !fileMode }"
        class="header-item header-logo"
      />

      <!-- Divider -->
      <div :class="{ 'hide-l': fileMode, 'hide-m': !fileMode }" class="header-item divider" />

      <!-- Labels -->
      <HeaderFileLabel v-if="fileMode" class="header-item header-label file" />
      <div v-else class="header-item header-label text">
        <span>Amateuer Data Interchange Format file manipulator</span>
      </div>

      <!-- Open and save buttons-->
      <SelectFileInput
        v-if="fileMode"
        initial-text="Open"
        class="header-item header-button open hide-s hover-fx"
      />
      <SaveFileButton
        v-if="fileMode"
        initial-text="Save"
        class="header-item header-button save hide-s hover-fx"
      />

      <!-- <eoh> decoration -->
      <HeaderEOH v-else />
    </div>
    <!-- Horizonal border -->
    <HorizontalBorder />
  </header>
</template>

<script>
import HeaderMenuButton from "@/components/header/HeaderMenuButton.vue";
import HeaderLogo from "@/components/header/HeaderLogo.vue";
import HeaderFileLabel from "@/components/header/HeaderFileLabel.vue";
import HeaderEOH from "@/components/header/HeaderEOH.vue";
import SelectFileInput from "@/components/base/SelectFileInput.vue";
import SaveFileButton from "@/components/base/SaveFileButton.vue";
import HorizontalBorder from "@/components/base/HorizontalBorder.vue";

export default {
  name: "Header",
  components: {
    HeaderMenuButton,
    HeaderLogo,
    HeaderFileLabel,
    HeaderEOH,
    SelectFileInput,
    SaveFileButton,
    HorizontalBorder
  },

  props: {
    fileMode: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
$header-height-full: 45px;
$header-height-large: 40px;
$header-border-radius-full: 10px;
$header-border-radius-large: 8px;

header {
  width: 100%;
  background-color: $header-color-center;
  background: $header-gradient;
  box-shadow: 0px 10px 16px rgba(51, 85, 79, 0.08);

  // Font-size used by labels
  font-size: 16px;
  @include large {
    font-size: 15px;
  }
  @include small {
    font-size: 13px;
  }
}

// Header is a flexbox container
.header-content {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0 12px;

  @include medium {
    padding: 0;
  }

  @include large {
    flex-wrap: wrap;
  }

  // Margins around each header item
  .header-item {
    margin: 12px;
    @include medium {
      margin: 10px;
    }
  }
}

// Logo
// ------------------------------------
.header-logo {
  @include flex-stretch;

  height: $header-height-full;
  border-radius: $header-border-radius-full;
  line-height: 21px;
  @include large {
    height: $header-height-large;
    border-radius: $header-border-radius-large;
    line-height: 18px;
  }

  &.logo-home {
    @include medium {
      flex-grow: 1;
    }
  }

  &.logo-file {
    @include large {
      flex-grow: 1;
    }
  }
}

// Divider
// ------------------------------------
.divider {
  flex-shrink: 0;
  background-color: $divider-color;
  border-radius: 1000px;
  width: 2px;
  height: $header-height-full;

  @include large {
    height: $header-height-large;
  }
}

// Labels
// ------------------------------------
.header-label {
  flex-grow: 1;

  &.text {
    @include medium {
      width: 100%;
      text-align: center;
      order: 100;
    }
  }

  &.file {
    @include large {
      width: 100%;
      text-align: center;
      order: 100;
    }
  }
}

// Header button class
// ------------------------------------
.header-button {
  @include flex-center;
  flex-shrink: 0;
  font-weight: bold;

  background-color: $button-light-color;
  color: $button-light-txt-color;

  height: $header-height-full;
  border-radius: $header-border-radius-full;
  font-size: 17px;
  line-height: 21px;

  @include large {
    height: $header-height-large;
    border-radius: $header-border-radius-large;
    font-size: 15px;
    line-height: 18px;
  }

  &.save,
  &.open {
    padding: 0 1.4em;
    @include medium {
      padding: 0 1em;
    }
  }
}
</style>
