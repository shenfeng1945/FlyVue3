<template>
  <div class="topnav">
    <svg class="icon" @click="toggleAside">
      <use xlink:href="#i-menu"></use>
    </svg>
    <div class="logo">
      <router-link to="/">LOGO</router-link>
    </div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import "../assets/iconfont";
export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside };
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  justify-content: center;
  height: 100px;
  align-items: center;
  padding: 16px;
  background: #ffc6cd;
  position: relative;
  z-index: 10;
  .icon {
    display: none;
  }
  .logo {
    margin-right: auto;
  }
  .menu {
    display: flex;
    margin-right: 100px;
    & > li:not(last) {
      margin-right: 30px;
    }
  }
  @media (max-width: 500px) {
    > .icon {
      display: inline-block;
      width: 1.5em;
      height: 1.5em;
    }
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
  }
}
</style>
