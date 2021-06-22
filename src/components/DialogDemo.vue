<template>
  <div>
    <button @click="toggle">Dialog</button>
    <Dialog
      v-model:visiable="x"
      :closeOnClickOverlay="false"
      :ok="f1"
      :cancel="f2"
    >
      <template v-slot:content>
        <p>第一行字1</p>
        <p>第二行字2</p>
      </template>
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Dialog from "../lib/Dialog.vue";
export default {
  name: "DialogDemo",
  components: {
    Dialog,
  },
  setup() {
    const x = ref(false);
    const toggle = () => (x.value = !x.value);
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    return { x, toggle, f1, f2 };
  },
};
</script>

<style lang="scss"></style>
