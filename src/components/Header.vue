<template>
  <header>
    <div class="header-content">
      <!-- Menu button -->
      <HeaderMenuButton
        class="header-item header-button"
        :file-mode="fileMode"
      />
      <!-- Logo -->
      <HeaderLogo
        :class="{ 'logo-file': fileMode, 'logo-home': !fileMode }"
        class="header-item header-logo"
      />
      <!-- Divider -->
      <div
        :class="{ 'hide-l': fileMode, 'hide-m': !fileMode }"
        class="header-item divider"
      />
      <!-- Labels -->
      <HeaderFileLabel
        v-if="fileMode"
        class="header-item header-label file"
      />
      <HeaderText
        v-else
        class="header-item header-label text"
      />
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
import HeaderText from "@/components/header/HeaderText.vue";
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
    HeaderText,
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
}

// Margins around each header item
.header-item {
  margin: 12px;

  @include medium {
    margin: 10px;
  }
}

// Logo
// ------------------------------------
.header-logo {
  @include flex-stretch;
  font-weight: 800;

  height: 45px;
  border-radius: 10px;
  line-height: 21px;

  @include large {
    height: 40px;
    border-radius: 8px;
    line-height: 18px;
  }
}

.logo-home {
  @include medium {
    flex-grow: 1;
  }
}

.logo-file {
  @include large {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 10px;
  }
}

// Divider
// ------------------------------------
.divider {
  flex-shrink: 0;
  background-color: $divider-color;
  border-radius: 1000px;
  width: 2px;
  height: 45px;

  @include large {
    height: 40px;
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
    font-weight: 700;
    @include large {
      width: 100%;
      text-align: center;
      order: 100;
    }
  }
}

// Paddings for open and save buttons
// ------------------------------------
.header-button.save,
.header-button.open {
  padding: 0 1.4em;
  @include medium {
    padding: 0 1em;
  }
}

// General header button class
// ------------------------------------
.header-button {
  @include flex-center;
  flex-shrink: 0;
  font-weight: 700;

  background-color: $button-light-color;
  color: $button-light-txt-color;

  height: 45px;
  border-radius: 10px;
  font-size: 17px;
  line-height: 21px;

  @include large {
    height: 40px;
    border-radius: 8px;
    font-size: 15px;
    line-height: 18px;
  }
}
</style>
