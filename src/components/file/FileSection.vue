<template>
  <section>
    <button
      class="heading hover-fx"
      @click="toggleShow()"
    >
      <h2>{{ name }}</h2>
      <i
        :class="{ show: show, show: !show }"
        class="fas fa-angle-up "
      />
    </button>
    <transition name="fade">
      <div
        v-if="show"
        class="content"
      >
        <slot />
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: "FileSection",

  props: {
    name: {
      type: String,
      default: "Section"
    },
    initialShow: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      show: this.initialShow
    };
  },

  methods: {
    toggleShow: function() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  //overflow: hidden;

  .heading {
    width: 100%;
    margin-bottom: 0.5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: $main-gradient;
    color: $button-light-color;
    padding: 0.13em 0.4em 0.09em 0.4em;

    font-size: 30px;
    @include large {
      font-size: 26px;
    }
    @include medium {
      font-size: 22px;
    }

    h2 {
      margin: 0;
      color: $button-light-color !important;
    }

    i {
      transition: 0.4s ease-in-out;

      &.show {
        transform: rotateZ(180deg) rotateY(180deg);
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
