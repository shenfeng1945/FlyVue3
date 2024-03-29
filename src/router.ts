import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import Install from './components/Install.vue';
import Start from './components/Start.vue';


const history = createWebHashHistory();
export const router = createRouter({
    history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc, children: [
            { path: 'install', component: Install },
            { path: 'start', component: Start },
            { path: 'switch', component: SwitchDemo },
            { path: 'button', component: ButtonDemo },
            { path: 'dialog', component: DialogDemo },
            { path: 'tabs', component: TabsDemo},
          ]
        },
    ]
});