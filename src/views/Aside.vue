<template>
  <aside class="f-menu">
    <ul class="f-menu-list">
      <li>
        <h2>开发指南</h2>
        <ol>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/start">快速上手</router-link>
          </li>
        </ol>
      </li>
      <li>
        <h2>组件</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 弹框</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 标签页</router-link>
          </li>
        </ol>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.f-menu {
  background: #fff;
  width: 300px;
  padding-top: 50px;
  height: 100vh;
  position: fixed;
  left: 0;
  z-index: 1;
  &::before {
    display: block;
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 1px;
    background: #ebedf1;
  }
  > .f-menu-list {
    background: transparent;
    > li{
        padding-left: 50px;
        h2{
            line-height: 2.875;
        }
    }
    &::after {
      display: block;
    }
  }
  //   background-color: #fff;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 116px;
  }
}
</style>
