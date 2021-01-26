<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <button type="button" class="btn btn-primary" @click="$router.push('create-bookmark')">Add bookmark</button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div style="margin-top: 15px">
                    <button type="button" class="btn btn-primary" @click="$store.dispatch('bookmark/downloadExcelFile')">Download excel file</button>
                </div>
            </div>
        </div>
        <div class="row" style="margin-top:15px">
            <div class="col-md-12">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Created at <sort field="created_at"></sort></th>
                        <th scope="col">Favicon</th>
                        <th scope="col">Url <sort field="url"></sort></th>
                        <th scope="col">Title <sort field="title"></sort></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="bookmark in list" :key="bookmark.id" style="cursor: pointer" @click="$router.push({ name: 'bookmark', params: { id: bookmark.id, load: true }})">
                        <th>{{ bookmark.created_at }}</th>
                        <td><img :src="bookmark.favicon_url" alt="favicon" style="width: 16px"></td>
                        <td>{{ bookmark.url }}</td>
                        <td>{{ bookmark.title }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row" style="margin-top:15px">
            <div class="col-md-12">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li
                            class="page-item"
                            v-for="link in listMeta.links"
                            :key="link.label"
                            v-bind:class="{ active: link.active }"
                        >
                            <a
                                class="page-link"
                                href="#"
                                @click.prevent="getListByPage(link.label)"
                            >{{ link.label }}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSortAmountUp, faSortAmountDown } from '@fortawesome/free-solid-svg-icons'
import sort from './List/SortComponent'

library.add(faSortAmountUp);
library.add(faSortAmountDown);

export default {
    components: {
        sort
    },
    data () {
        return {
            page: 1,
            sortField: null,
            sortType: null
        }
    },
    computed: {
        list () {
            return this.$store.getters['bookmark/list']
        },
        listMeta () {
            return this.$store.getters['bookmark/listMeta']
        }
    },
    methods: {
        getListByPage (page) {
            const payload = {
                page: page
            };
            if (!(this.sortField === null && this.sortType === null)) {
                payload.sort_field = this.sortField;
                payload.sort_type = this.sortType;
            }
            this.$store.dispatch('bookmark/index', payload).then(() => {
                this.page = page
            })
        },
        getSortList (field, type) {
            const payload = {
                sort_field: field,
                sort_type: type,
                page: this.page
            };
            this.$store.dispatch('bookmark/index', payload).then(() => {
                this.sortField = field;
                this.sortType = type;
            })
        },
        getList () {
            this.$store.dispatch('bookmark/index', { page: this.page })
        },
    },
    mounted() {
        this.getList()
    }
}
</script>
