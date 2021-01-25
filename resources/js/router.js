import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'list',
            component: () => import('./components/bookmark/ListCoomponent.vue')
        },
        {
            path: '/bookmark/:id',
            name: 'bookmark',
            component: () => import('./components/bookmark/ItemComponent.vue')
        },
        {
            path: '/create-bookmark',
            name: 'create-bookmark',
            component: () => import('./components/bookmark/CreateComponent.vue')
        },
    ]
});

export default router
