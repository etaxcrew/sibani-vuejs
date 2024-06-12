<template>
    <div class="container-fluid mb-5 mt-4">
        <div class="row">
            <div class="col-md-3 mb-4">
                <UserMenu />
            </div>
            <div class="col-md-9 mb-4">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h5><i class="fas fa-shopping-cart"></i> MY FILES</h5>
                        <div style="position: absolute; right: 20px; top: 11px;">
                            <router-link :to="{ name: 'posts.create' }" class="btn btn-md btn-primary rounded shadow border-0 mb-3">ADD NEW</router-link>
                        </div>
                        <hr>
                        <table class="table table-bordered">
                            <thead class="thead-dark">
                                <tr class="text-center">
                                    <th scope="col" style="width:6%">NO</th>
                                    <th scope="col">FILE</th>
                                    <th scope="col" style="width:10%">EDIT</th>
                                    <th scope="col" style="width:10%">DELETE</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr v-if="posts.length == 0">
                                    <td colspan="4" class="text-center">
                                        <div class="alert alert-danger mb-0">
                                            Data Belum Tersedia!
                                        </div>
                                    </td>
                                </tr>
                                <tr v-else v-for="post in posts" :key="post.id">
                                    <td class="text-center">{{ post.id }}</td>
                                    <td>{{ post.name }}</td>
                                    <td class="text-center">
                                        <router-link :to="{ name: 'posts.edit', params:{id: post.id} }" class="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">EDIT</router-link>
                                    </td>
                                    <td class="text-center">
                                        <button class="btn btn-sm btn-danger rounded-sm shadow border-0">DELETE</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //import customer menu component
    import UserMenu from '../../components/UserMenu.vue'
    import { computed, onMounted, reactive } from 'vue' //proses data
    import { useStore } from 'vuex' //proses data
    export default {

        name: 'MyFilesComponent',

        components: {
            UserMenu
        },

        setup() {

            //store vuex
            const store = useStore()

            //mounted
            onMounted(() => {

                //panggil action "getPost"
                return store.dispatch('posts/getPost')

            })

            //computed
            const posts = computed(() => {

                //panggil getter dengan nama "getPost"
                return store.getters['posts/getPost']

            })

            //return a state and function
            return {
                store,
                posts
            }

        }

    }
</script>

<style scoped>
    .table .thead-dark th {
        color: #fff;
        background-color: #758ef8;
        border-color: #758ef8;
    }
</style>