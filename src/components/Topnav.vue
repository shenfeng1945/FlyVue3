<template>
  <div class="topnav">
    <svg class="icon" @click="toggleAside">
      <use xlink:href="#i-menu"></use>
    </svg>
    <div class="logo">
      <router-link to="/">
        <img src="../assets/flyvue.png" class="logo-img">
      </router-link>
    </div>
    <ul class="menu">
      <li>
          <router-link to="/">Home</router-link>
      </li>
      <li>Github</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import "../assets/iconfont";
import {router} from '../router';
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
@import '../index.scss';
.topnav {
  display: flex;
  justify-content: space-between;
  height: $topNavHeightPC;
  align-items: center;
  padding: 0 58px;
  background: #fff;
  width: 100%;
  top: 0;
  position: fixed;
  z-index: 10;
  box-shadow: 0 8px 24px -2px rgba(0,0,0,.05);
  .icon {
    display: none;
  }
  .logo {
    margin-right: auto;
    .logo-img{
        width: 40px;
        vertical-align: middle;
    }
  }
  .menu {
    display: flex;
    & > li:not(last) {
      margin-right: 30px;
    }
  }
  @media (max-width: 500px) {
    height: $topNavHeightPhone;
    > .icon {
      display: inline-block;
      width: 1.5em;
      height: 1.5em;
      position: absolute;
      left: 1em;
      top: 50%;
      transform: translateY(-50%);
    }
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
       .logo-img{
          width: 28px;
      }
    }
  }
}
</style>
