<template>
  <div class="menu-wrap">
    <div
      class="menu-button"
      :class="{ 'hover-fx': !menuOpen, 'hover-bright': menuOpen }"
    >
      <button
        title="Open/close the menu"
        @click="toggleMenu"
      >
        <div
          class="bars"
          :class="{ 'bars-hamburger': !menuOpen, 'bars-x': menuOpen }"
        >
          <div class="bar" />
          <div class="bar" />
          <div class="bar" />
        </div>
      </button>
    </div>
    <transition name="fade">
      <HeaderMenu
        v-if="menuOpen"
        class="menu"
        :file-mode="fileMode"
      />
    </transition>
    <Backdrop
      v-if="menuOpen"
      @click="toggleMenu"
    />
  </div>
</template>

<script>
import Backdrop from "@/components/base/Backdrop.vue";
import HeaderMenu from "@/components/header/HeaderMenu.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "HeaderMenuButton",

  components: {
    HeaderMenu,
    Backdrop
  },

  props: {
    fileMode: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapGetters({
      menuOpen: "getMenuStatus"
    })
  },

  methods: {
    ...mapMutations({
      toggleMenu: "TOGGLE_MENU"
    })
  }
};
</script>

<style lang="scss" scoped>
.menu-wrap {
  height: 100%;
  @include flex-center;
  position: relative;

  .menu {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
  }
}

.menu-button {
  height: 100%;
  z-index: 4;
  border-radius: 10px;
  transition: filter $transition-time, box-shadow $transition-time;

  @include medium {
    border-radius: 8px;
  }

  button {
    width: 45px;
    height: 100%;
    @include flex-center;

    @include large {
      width: 40px;
    }

    .bars {
      width: 25px;
      height: 15px;

      @include large {
        width: 22px;
        height: 12px;
      }

      .bar {
        width: 100%;
        height: 3px;
        border-radius: 1000px;
        background-color: $button-light-txt-color;
        background: $main-gradient;
        transition: transform $transition-time * 2 ease-out, opacity $transition-time * 2 ease-out;

        @include large {
          height: 2px;
        }
      }
    }

    .bars-hamburger {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    .bars-x {
      position: relative;
      width: 25px;

      .bar {
        position: absolute;
        top: 40%;
      }

      .bar:nth-child(2) {
        opacity: 0;
      }

      .bar:first-child {
        transform: rotateZ(45deg);
      }

      .bar:last-child {
        transform: rotateZ(-45deg);
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity $transition-time ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
