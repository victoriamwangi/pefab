import { createRouter, createWebHistory } from 'vue-router'

import SermonListing from '@/components/sermons/SermonsListing.vue'


const routes = [
    {
        path:'/dashboard',
        name: 'sermons.all',
        component: SermonListing
    }
];
export default createRouter({
    history: createWebHistory(),
    routes
})