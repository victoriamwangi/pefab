import { createRouter, createWebHistory } from 'vue-router'

import SermonListing from '@/components/sermons/SermonsListing.vue'
import CreateSermon from '@/components/sermons/CreateSermon.vue'



const routes = [
    {
        path:'/dashboard',
        name: 'sermons.all',
        component: SermonListing
    },
    {
        path:'/sermons/create',
        name: 'sermons.create',
        component:CreateSermon
    }
];
export default createRouter({
    history: createWebHistory(),
    routes
})