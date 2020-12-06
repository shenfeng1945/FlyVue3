<template>
  <div class="topnav">
    <div class="logo">
      <div @click="toggleAside">LOGO</div>
     <!-- <router-link to="/">LOGO</router-link> -->
    </div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
    setup(){
        const asideVisible = inject<Ref<boolean>>('asideVisible')
        console.log('topnav 获取的', asideVisible.value);
        const toggleAside = () => {
            asideVisible.value = !asideVisible.value;
        }
        return {toggleAside}
    },
}
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  justify-content: center;
  height: 100px;
  align-items: center;
  padding: 16px;
  background: #FFC6CD;
  position: relative;
  z-index: 10;
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
      > .menu {
          display: none;
      }
      > .logo {
          margin: 0 auto;
      }
  }
}
</style>
