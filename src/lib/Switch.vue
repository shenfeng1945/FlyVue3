<template>
  <label class="f-switch">
    <span class="f-control-indicator" :class="{checked: value}" @click="toogle"></span>
  </label>
</template>

<script>
export default {
    props: {
        value: Boolean
    },
    setup(props, context){
        const toogle = () => {
           context.emit('update:value', !props.value)
        }
        return {toogle}
    }
};
</script>

<style lang="scss">
.f-switch {
  &-label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    &.disabled {
      cursor: not-allowed;
    }
  }
  .f-control-indicator {
    width: 30px;
    background: rgba(167, 182, 194, 0.5);
    position: relative;
    display: inline-block;
    vertical-align: middle;
    min-width: 1.75em;
    width: auto;
    height: 1em;
    border-radius: 1.75em;
    transition: background-color 0.3s;
    &.checked{
        background: #137cbd;
    }
    &::before {
      display: block;
      position: absolute;
      content: "";
      width: calc(1em - 4px);
      height: calc(1em - 4px);
      border-radius: 50%;
      background: white;
      margin: 2px;
      left: 0;
      transition: left 0.3s;
    }
    &.checked::before {
      left: calc(100% - 1em);
    }
    &.large {
      height: 1.25em;
      &::before {
        width: 1em;
        height: 1em;
      }
      &.checked::before {
        left: calc(100% - 1.2em);
      }
    }
  }
}
</style>
