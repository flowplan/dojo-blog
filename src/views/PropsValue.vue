<template>
  <div class="home">
    <h1>Props here</h1>
    <PostList v-if="showPost" :posts="posts" />
    <button @click="showPost = !showPost">Toggle</button>
    <button @click="posts.pop()">Remove one Post</button>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { ref } from 'vue'
export default {
    name: 'Props',
    components: { PostList },
    setup(){
        const posts = ref([
            {title: 'Welcome to the blog', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga accusantium dignissimos fugiat fugit voluptatibus sit enim. Laborum fuga veniam incidunt, neque eaque quisquam voluptatem quis adipisci esse molestias non modi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga accusantium dignissimos fugiat fugit voluptatibus sit enim. Laborum fuga veniam incidunt, neque eaque quisquam voluptatem quis adipisci esse molestias non modi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga accusantium dignissimos fugiat fugit voluptatibus sit enim. Laborum fuga veniam incidunt, neque eaque quisquam voluptatem quis adipisci esse molestias non modi?', id: 1},
            {title: 'top 5 CSS tips', body: 'Lorem ipsum', id: 2},
        ])

        const showPost = ref(true)

        return{ posts, showPost }
    }
}
</script>

<style>

</style>