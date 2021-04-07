<template>
    <div>
        <spin v-if="loading"/>
        <div  v-else-if="!loading && !not_found" class="uk-card uk-card-default uk-width-1-2@m">
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>

                    <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">{{ post.surname }}</h3>

                    </div>
                </div>
            </div>
            <div class="uk-card-body">
                <p>{{ post.phone }}</p>
                <hr>
                <p>{{ post.country }}</p>
                <hr>
                <p>{{ post.city }}</p>
            </div>
            <div class="uk-card-footer">
                <a  class="uk-button uk-button-text" @click="deletePost(post.id)" >Удалить</a>
            </div>
        </div>


        <div uk-alert v-if="not_found">
            <a class="uk-alert-close" uk-close></a>
            <h3>404 пост не найден</h3>
        </div>
    </div>
</template>

<script>
    import Spin from "../components/Spin";
    import axios from 'axios';
    import router from "../router";

    export default {
        name: "Post",
        components: {
            Spin
        },
        data: () => ({
            loading: true,
            post: [],
            not_found: false
        }),
        mounted() {
            this.loadPost(this.$route.params.id);
        },
        methods: {
            loadPost(id){
                axios.get('/api/posts/' + id)
                .then(res => {
                    this.post = res.data;
                    setTimeout(()=>{
                        this.loading = false;
                    },500)

                })
                .catch(err => {
                    this.not_found = true;
                })
            },
            deletePost(id) {
                axios
                    .delete('/api/posts/' + id)
                    .then(response => {
                        this.$router.push('/users/');
                    })
                    .catch(err => console.log(err))
            }
        }
    }
</script>

<style scoped>

</style>
