<template>
  <div class="data-fetch">
    <h1>fetch data</h1>
    <div v-if="error">{{ error }}</div>
        <div v-for="post in posts" :key="post.key" class="post-list">
            <div v-if="posts.length">
                <router-link :to="{ name: 'details', params: {id: post.id}}">
                    <h3>{{ post.title }}</h3>
                </router-link>
                <p>{{ snippet }}</p>
            </div>
            <div v-else>Loading ... </div>
        </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import getPosts from '../composables/getPosts'

export default {
    name: "Fetch",
    setup(){

        const {posts, error, load} = getPosts()

        load()

        //if you get the fetch value directly
        const snippet = computed(() => {
            return posts.value[0].body.substring(0, 100) + "...."  
        })



    ////////////TO BE USED IN COMPOSABLE//////////////
    //     const posts = ref([])
    //     const error = ref(null)


    // //use for fetching json data in data folder above all files and out to the webpage
    //     const load = async () => {
    //         try{
    //             let data = await fetch('http://localhost:3000/posts')
    //             // console.log(data)
    //             if(!data.ok){
    //                 throw Error("no data available")
    //             }
    //             posts.value = await data.json()
    //         }
    //         catch(err){
    //             error.value = err.message
    //             console.log(error.value)
    //         }
    //     }

    //     load()

        return { posts, error, snippet }
    }
}
</script>

<style>

</style>