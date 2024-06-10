<template>
    <div class="container-fluid mb-5 mt-4">
        <div class="row">
            <div class="col-md-3 mb-4">
                <UserMenu />
            </div>
            <div class="col-md-9 mb-4">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h5><i class="fas fa-tachometer-alt"></i> DASHBOARD</h5>
                        <hr>
                        <h6>Selamat Datang <strong>{{ user.name }}</strong></h6>
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

        name: 'DashboardComponent',

        components: {
            UserMenu
        },
        
        setup() {
            
            //store vuex
            const store = useStore()

            //mounted
            onMounted(() => {

                //panggil action "getUser" dari module "auth" vuex
                store.dispatch('auth/getUser')

            })
			
            //computed
            const user = computed(() => {
                //panggil getters dengan nama "currentUser" dari module "auth"
                return store.getters['auth/currentUser']
            })

            //return a state and function
            return {
                store,
                user
            }

        }

    }
</script>