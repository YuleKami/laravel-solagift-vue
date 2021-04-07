<template>
    <div>
        <spin v-if="loading"></spin>
        <div style="display:flex; flex-wrap: wrap;" v-else>
            <Post
                v-for="post in news"
                :id="post.id"
                :name="post.name"
                :surname="post.description"
                :key="post.id"
            />
        </div>

    </div>


</template>

<script>
    import Spin from "../components/Spin";
    import axios from 'axios'
    import Post from "../components/News/Post";



    export default {
        name: "News",
        components: {
            Post,
            Spin,

        },
        data: () => ({
            loading: true,
            news: []
        }),
        mounted() {
            this.loadPosts()
        },
        methods:{

            loadPosts(){
                axios.get('/api/news-post')
                    .then(res =>{
                        this.news = res.data;
                        setTimeout(()=>{
                            this.loading = false;
                        },500);

                    })
            }
        }
    }
</script>

<style scoped>

</style>
