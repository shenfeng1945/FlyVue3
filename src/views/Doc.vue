<template>
  <div>
    <TopNav />
    <div class="content">
      <Aside v-if="asideVisible"/>
      <main>
          <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import TopNav from "../components/Topnav.vue";
import Aside from './Aside.vue';
export default {
  name: "Doc",
  components: {
    TopNav,
    Aside
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    return { asideVisible };
  },
};
</script>

<style lang="scss" scoped>
@import '../index.scss';
.content {
  display: flex;
  padding-top: $topNavHeightPC;
  background: #fff;
  height: 100vh;
  @media (max-width: 500px) {
    padding-top: $topNavHeightPhone;
  }
  main {
      flex: 1;
      padding: 16px;
      margin-left: 300px;
      @media (max-width: 500px) {
        margin-left: 0;
      }
  }
}
</style>
