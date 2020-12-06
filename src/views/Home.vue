<template>
    <div class="home">
       <TopNav />
       <div class="banner">
         <h1>FlyVue</h1>
         <h2>一个厉害的FlyVue</h2>
         <div class="actions">
           <a href="">Github</a>
           <router-link to="/doc">开始</router-link>
         </div>
       </div>
    </div>
</template>

<script lang="ts">
import TopNav from '../components/Topnav.vue';
export default {
    name: 'Home',
    components: {
      TopNav
    }
}
</script>

<style lang="scss" scoped>
 .home {
    .banner {
        background: #89DF8D;
        text-align: center;
        h1 {
            padding-top: 100px;
        }
        .actions > * {
          border-radius: 2em;
          background: #fff;
          padding: 0 .5em 0 .5em;
        }
    }
 }
</style>