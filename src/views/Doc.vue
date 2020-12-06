<template>
  <div>
    <TopNav />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
        </ol>
      </aside>
      <main>主内容</main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';
import TopNav from "../components/Topnav.vue";
export default {
  name: "Doc",
  components: {
    TopNav,
  },
  setup(){
      const asideVisible = inject<Ref<boolean>>('asideVisible');
      return {asideVisible}
  }
};
</script>

<style lang="scss">
    .content{
        aside {
            background: #AAD4E9;
            position: fixed;
            top: 0;
            left: 0;
            width: 150px;
            padding: 16px;
            padding-top: 100px;
            > h2 {
                margin-bottom: 4px;
            }
            > ol {
                > li {
                    padding: 4px 0;
                }
            }
        }
    }
</style>
