import './bootstrap';

import Alpine from 'alpinejs';

import { createApp } from  "vue/dist/vue.esm-bundler";
import router from './router'

import SermonListing from '@/components/sermons/SermonsListing.vue'

createApp({
    components: {
        SermonListing
    }
}).use(router).mount('#app')

// window.Alpine = Alpine;

// Alpine.start();
