<template>
    <div>
        <spin v-if="loading"></spin>
        <div style="display:flex; flex-wrap: wrap;" v-else>
            <Post
                v-for="post in recall"
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
    import Post from "../components/Recall/Post";



    export default {
        name: "Recall",
        components: {
           Post,
            Spin,

        },
        data: () => ({
            loading: true,
            recall: []
        }),
        mounted() {
            this.loadPosts()
        },
        methods:{

            loadPosts(){
                axios.get('/api/recall')
                    .then(res =>{
                        this.recall = res.data;
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
