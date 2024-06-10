<template>
    <div class="col-lg-4 col-md-6" v-for="bidang in bidangs" :key="bidang.id">
        <div class="service-item">
            <div class="icon">
                <img src="/src/assets/images/service-01.png" alt="online degrees">
            </div>
            <div class="main-content">
                <h4>{{ bidang.name }}</h4>
                <p>{{ bidang.about }}</p>
                <div class="main-button">
                    <router-link :to="{name: 'detail_bidang', params:{slug: bidang.slug}}" :key="bidang.id">
                        Selangkapnya
                    </router-link>
                </div>
            </div>
        </div>
        </div>
</template>

<script>
    import { computed, onMounted } from 'vue'
    import { useStore } from 'vuex'

    export default {

        name: 'BidangComponent',

        setup() {
            
            //store vuex
            const store = useStore()

            //onMounted akan menjalankan action getCategories di module bidang, sebelum computed di atas dijalankan
            onMounted(() => {
                store.dispatch('bidang/getBidangs')
            })

            //computed properti digunakan untuk get data categories dari state di module bidang 
            const bidangs = computed(() => {
                return store.state.bidang.bidangs
            })

            return {
                bidangs
            }

        }

    }
</script>