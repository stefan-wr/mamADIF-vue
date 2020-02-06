<template>
  <transition name="fade">
    <div
      v-if="alert.show"
      class="alert-wrap"
    >
      <div class="alert center">
        <button
          id="close-x"
          class="hover-bright"
          title="Close"
          @click="dismiss"
        >
          <div class="bar" />
          <div class="bar" />
        </button>
        <p>{{ alert.message }}</p>
        <button
          id="close-button"
          class="hover-fx"
          @click="dismiss"
        >
          Close
        </button>
      </div>
      <Backdrop @click="dismiss" />
    </div>
  </transition>
</template>

<script>
import Backdrop from "@/components/base/Backdrop.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Alert",
  components: {
    Backdrop
  },

  computed: {
    ...mapGetters({
      alert: "getAlert"
    })
  },

  methods: {
    ...mapMutations({
      dismiss: "DISMISS_ALERT"
    })
  }
};
</script>

<style lang="scss" scoped>
.alert-wrap {
  position: fixed;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  top: 0;
  left: 0;
  @include flex-center;
}

.alert {
  z-index: 6;
  padding: 1em 1em 2em 1em;
  background: $main-background-color-light;
  box-shadow: -13px -13px 26px rgba(255, 255, 255, 0.2), 13px 13px 26px rgba(17, 67, 70, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 1.1em;

  max-width: 650px;
  border-radius: 10px;
  @include large {
    border-radius: 8px;
  }
  @include medium {
    max-width: 450px;
  }

  p {
    padding: 0 1em;

    font-size: 1.5em;
    @include large {
      font-size: 1.3em;
    }
    @include medium {
      font-size: 1.1em;
    }
  }
}

#close-x {
  width: 25px;
  height: 25px;
  position: relative;
  align-self: flex-end;
  margin-bottom: 1em;

  .bar {
    width: 100%;
    height: 3px;
    position: absolute;
    top: 40%;
    border-radius: 1000px;
    background-color: $button-light-txt-color;
    background: $main-gradient;
    transition: transform $transition-time * 2 ease-out, opacity $transition-time * 2 ease-out;

    @include large {
      height: 2px;
    }
  }

  .bar:first-child {
    transform: rotateZ(45deg);
  }

  .bar:last-child {
    transform: rotateZ(-45deg);
  }
}

#close-button {
  @include flex-center;
  padding: 0.7em 1.4em;
  margin-top: 1em;
  border-radius: 6px;
  color: $button-dark-txt-color;
  background-color: $button-dark-color;
  background: $main-gradient;
  font-size: 16px;

  @include large {
    font-size: 15px;
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
