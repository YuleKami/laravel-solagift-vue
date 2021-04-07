<template>
    <div>
        <progress class="uk-progress" value="" max=""></progress>
        <hr>
        <form>
            <div class="uk-margin" uk-margin>
                <div uk-form-custom="target: true">
                    <input type="file">
                    <input class="uk-input uk-form-width-medium" type="text" placeholder="Select file" disabled>
                </div>
                <button class="uk-button uk-button-default">Submit</button>
            </div>

        </form>
        <hr>
        <div class="uk-child-width-expand@s uk-text-center" uk-grid>
            <div>
                <div class="uk-card uk-card-default uk-card-body">Item</div>
            </div>
            <div>
                <div class="uk-card uk-card-default uk-card-body">Item</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ImageUpload"
    }
</script>

<style scoped>

</style>
