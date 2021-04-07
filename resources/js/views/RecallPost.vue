<template>
    <div>
        <spin v-if="loading"/>
        <div  v-else-if="!loading && !not_found" class="uk-card uk-card-default uk-width-1-2@m">
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>

                    <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">{{ post.name }}</h3>

                    </div>
                </div>
            </div>
            <div class="uk-card-body">
                <p>{{ post.description }}</p>

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

    export default {
        name: "RecallPost",
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
                axios.get('/api/recall/' + id)
                    .then(res => {
                        this.post = res.data;
                        setTimeout(()=>{
                            this.loading = false;
                        },500)

                    })
                    .catch(err => {
                        this.not_found = true;
                    })
            }
        }
    }
</script>

<style scoped>

</style>
