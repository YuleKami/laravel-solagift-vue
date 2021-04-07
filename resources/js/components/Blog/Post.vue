<template>
    <div class="uk-card uk-card-default uk-width-1-2@m">
        <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-width-expand">
                    <h3 class="uk-card-title uk-margin-remove-bottom">{{ surname }}</h3>

                </div>
            </div>
        </div>

        <div class="uk-card-footer">
            <a  class="uk-button uk-button-text" :href="`/post/${id}/`">Подробнее</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            id: Number,
            surname: {
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
