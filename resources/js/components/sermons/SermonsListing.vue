<template>
  <div class="flex mb-4 place-content-end">
        <div class="px-4 py-2 text-white bg-indigo-600 cursor-pointer hover:bg-indigo-700 ">
        </div>
        <a name="" id="" class="btn btn-primary" href="#" role="button">
            <router-link :to="{ name: 'sermons.create' }" >Create Sermon</router-link>

        </a>

    </div>
    <div
        class="min-w-full overflow-hidden overflow-x-auto align-middle sm:rounded-md"
    >
        <table class="min-w-full border divide-y divide-gray-200">
            <thead>
                <tr>
                    <th class="px-6 py-3 bg-gray-50">
                        <span
                            class="text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase"
                            >Name</span
                        >
                    </th>
                    <th class="px-6 py-3 bg-gray-50">
                        <span
                            class="text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase"
                            >Email</span
                        >
                    </th>
                    <th class="px-6 py-3 bg-gray-50">
                        <span
                            class="text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase"
                            >Address</span
                        >
                    </th>
                    <th class="px-6 py-3 bg-gray-50">
                        <span
                            class="text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase"
                            >Website</span
                        >
                    </th>
                     <th class="px-6 py-3 bg-gray-50">
                        <span
                            class="text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase"
                            >Actions</span
                        >
                    </th>
                </tr>
            </thead>

            <tbody class="bg-white divide-y divide-gray-200 divide-solid">
                <template v-for="item in sermons" :key="item.id">
                    <tr class="bg-white">
                        <td
                            class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap"
                        >
                            {{ item.title }}
                        </td>
                        <td
                            class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap"
                        >
                            {{ item.body }}
                        </td>
                        <td
                            class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap"
                        >
                            {{ item.created_by }}
                        </td>
                        <td
                            class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap"
                        >
                            {{ item.created_at }}
                        </td>
                        
                        <td
                            class="px-6 py-4 text-sm leading-5 text-center text-gray-900 whitespace-no-wrap"
                        >
                            <button
                                @click="deleteSermon(item.id)"
                                class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import useSermons from "@/composables/sermons";

const { sermons, getSermons, destroySermon } = useSermons();
onMounted(getSermons);

const deleteSermon = async(id)=>{
    if(!window.confirm('Delete this sermon?')){
        return
    }
    await destroySermon(id)
    await getSermons()

}
</script>

<style></style>
