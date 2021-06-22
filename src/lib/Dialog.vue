<template>
  <template v-if="visiable">
    <div class="f-dialog-overlay" @click="clickOnOverlay"></div>
    <div class="f-dialog-wrapper">
      <div class="f-dialog">
        <header>
          <slot name="title" />
          <span @click="close">X</span>
        </header>
        <main>
          <slot name="content"/>
        </main>
        <footer>
          <button @click="ok">OK</button>
          <button @click="cancel">Cancel</button>
        </footer>
      </div>
    </div>
  </template>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    visiable: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
    title: {
        type: String,
        default: '提示'
    }
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visiable", false);
    };
    const clickOnOverlay = () => {
      if (props.closeOnClickOverlay) {
        context.emit("update:visiable", false);
      }
    };
    const ok = () => {
      if (props.ok?.() !== false) {
        close();
      }
    };
    const cancel = () => {
      props.cancel();
      close();
    };
    return { close, clickOnOverlay, ok, cancel };
  },
};
</script>

<style lang="scss">
.f-dialog {
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.45);
  }
  &-wrapper {
    position: fixed;
    top: 100px;
    margin: 0 auto;
    width: 520px;
    background-color: white;
    color: red;
    z-index: 11;
  }
}
</style>
