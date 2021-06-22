<template>
  <div class="home">
    <TopNav />
    <div class="content">
      <Aside v-if="false" />
      <div class="banner">
        <h1>Fly UI</h1>
        <p class="descripts">基于 Vue3.0 的 UI 框架</p>
        <div class="actions">
          <router-link to="/doc/start">
            <button class="start">快速上手</button>
          </router-link>
        </div>
      </div>
      <ul class="features">
        <li>
          <svg class="icon-feature">
            <use xlink:href="#i-menu"></use>
          </svg>
          <div class="text">
            <h1>基于Vue3</h1>
            <p>
              考究的默认配置和约定式的目录结构，帮助开发者零成本上手，让所有注意力都能放在文档编写和组件开发上
            </p>
          </div>
        </li>
        <li>
          <svg class="icon-feature">
            <use xlink:href="#i-menu"></use>
          </svg>
          <div class="text">
            <h1>基于Vue3</h1>
            <p>
              考究的默认配置和约定式的目录结构，帮助开发者零成本上手，让所有注意力都能放在文档编写和组件开发上
            </p>
          </div>
        </li>
        <li>
          <svg class="icon-feature">
            <use xlink:href="#i-menu"></use>
          </svg>
          <div class="text">
            <h1>基于Vue3</h1>
            <p>
              考究的默认配置和约定式的目录结构，帮助开发者零成本上手，让所有注意力都能放在文档编写和组件开发上
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import TopNav from "../components/Topnav.vue";
import Aside from "./Aside.vue";
import "../assets/iconfont";
export default {
  name: "Home",
  components: {
    TopNav,
    Aside,
  },
};
</script>

<style lang="scss" scoped>
@import "../index.scss";
.home {
  .content {
    background: #fff;
    text-align: center;
    min-height: 100vh;
    padding-top: $topNavHeightPC;
    > .banner {
      background-color: #f5f6f8;
      padding: 100px 0;
      > h1 {
        font-size: 48px;
        font-weight: 500;
        line-height: 56px;
        color: #080e29;
        margin-bottom: 16px;
      }
      > .descripts {
        color: #454d64;
        font-size: 1em;
        margin: 1em 0;
      }
      > .actions .start {
        padding: 0 32px;
        height: 44px;
        background: #4569d4;
        color: #fff;
        border: 1px solid #4569d4;
        border-radius: 22px;
        cursor: pointer;
        outline: none;
        font-size: 1em;
        &:hover {
          opacity: 0.8;
        }
      }
    }
    > .features {
      display: flex;
      max-width: 960px;
      margin: 0 auto;
      padding: 72px 0;
      justify-content: space-between;
      > li {
        flex: 1;
        max-width: 30%;
      }
      @media (max-width: 719px) {
        flex-direction: column;
        > li {
          display: flex;
          max-width: 100%;
          > .text{text-align: left;}
        }
      }
      .icon-feature {
        width: 64px;
        height: 64px;
      }
      h1 {
        margin-bottom: 12px;
        font-size: 20px;
        line-height: 1;
        color: #454d64;
      }
    }

    @media (max-width: 500px) {
      padding-top: $topNavHeightPhone;
    }
  }
}
</style>
