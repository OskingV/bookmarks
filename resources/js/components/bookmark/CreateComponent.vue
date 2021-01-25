<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <form @submit.prevent="store">
                    <div class="form-group">
                        <label for="inputUrl">Url</label>
                        <input type="text" class="form-control" id="inputUrl" placeholder="Enter url" v-model="url">
                        <small class="form-text text-muted" style="color:red!important" v-if="errorMessage">{{ errorMessage }}</small>
                    </div>
                    <button type="submit" class="btn btn-primary">Add</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                errorMessage: '',
                url: ''
            }
        },
        methods: {
            store () {
                const payload = {
                    url: this.url
                };
                this.$store.dispatch('bookmark/store', payload).then(() => {
                    this.$router.push({ name: 'bookmark', params: { id: this.$store.getters['bookmark/item'].id, load: false }})
                }).catch((error) => {
                    this.errorMessage = error.response.data.errors.url[0]
                })
            }
        }
    }
</script>
