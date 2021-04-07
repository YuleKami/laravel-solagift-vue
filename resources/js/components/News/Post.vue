<template>
    <div class="uk-card uk-card-default uk-width-1-2@m">
        <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-width-expand">
                    <h3 class="uk-card-title uk-margin-remove-bottom">{{ name }}</h3>
                    <p>{{description}}</p>
                </div>
            </div>
        </div>

        <div class="uk-card-footer">
            <a  class="uk-button uk-button-text" :href="`/news-post/${id}/`">Подробнее</a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
          return{
              url: '`/news-post/${id}/`'
          }
        },
        props: {
            id: Number,
            name: {
                type: String,
                default: "NULL"
            },
            description: {
                type: String,
                default: "NULL"
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
</style>
