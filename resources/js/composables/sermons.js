import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'


export default function useSermons(){
    const sermon = ref([]);
    const sermons = ref([]);

    const errors = ref('');
    const router = useRouter();

    const getSermons = async()=>{
        let response = await axios.get('/api/sermons')
        sermons.value= response.data.data

    }

    const getSermon = async(id)=>{
        let response = await axios.get('/api/sermons/${id}')
        sermons.value = response.data.data
    }

    const storeSermon = async(data)=>{
        errors.value = ''
        try{
            await axios.post('/api/sermons', data)
            
            await router.push({name: 'sermons.index'})  
        }catch(e){
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.errors
                }
            }
        }

    }

    const updateSermon = async(id)=>{
        errors.value = ''
        try {
            await axios.patch('/api/sermons/${id}', company.value)
            await router.push({name: sermons.index})
        }catch(e){
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.errors
                }
            }
        }
    }
    const destroySermon =async(id) =>{
        await axios.delete('/api/sermons/${id}')
    }


    return {
        errors,
        sermon,
        sermons,
        getSermon,
        getSermons,
        storeSermon,
        updateSermon,
        destroySermon
    }

}