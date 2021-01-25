<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        Bookmark info
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Created at:</h5>
                        <p class="card-text">{{ item.created_at }}</p>
                        <h5 class="card-title">Favicon:</h5>
                        <p class="card-text"><img :src="item.favicon_url" alt="favicon" style="width: 16px"></p>
                        <h5 class="card-title">Url:</h5>
                        <p class="card-text">{{ item.url }}</p>
                        <h5 class="card-title">Title:</h5>
                        <p class="card-text">{{ item.title }}</p>
                        <h5 class="card-title">Meta keywords:</h5>
                        <p class="card-text">{{ item.meta_keywords }}</p>
                        <h5 class="card-title">Meta description:</h5>
                        <p class="card-text">{{ item.meta_description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                id: 0,
                showPasswordInput: false,
                password: '',
                showErrorMessage: false
            }
        },
        computed: {
            item () {
                return this.$store.getters['bookmark/item']
            }
        },
        created () {
            this.id = this.$route.params.id;
            if (this.$route.params.load || this.$route.params.load === undefined) {
                this.$store.dispatch('bookmark/show', { id: this.id})
            }
        }
    }
</script>
