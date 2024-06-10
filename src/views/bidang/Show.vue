<template>

    <div class="section testimonials">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 align-self-center">
                    <div class="section-heading">
                        <h6>LAYANAN</h6>
                        <h2>{{ bidang.name }}</h2>
                        <h7>{{ bidang.about }}.</h7>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="owl-testimonials">
                        <div class="item">
                            <h4>Melayani Pengurusan :</h4>
                            <br>
                            <ol>
                                <li v-for="layanan in layanans" :key="layanan.id">{{ layanan.name }}</li>
                            </ol>
                                <!-- 1. Pengurusan Izin Operasional Lembaga PAUD dan PNF<br>
                                2. Pengajuan Penerbitan Nomor Pokok Sekolah Nasional (NPSN) Satuan PAUD dan PNF<br>
                                3. Legalisir Ijazah Pendidikan Kesetaraan Satuan Pendidikan Non Formal di Wilayah Kabupaten Boalemo -->
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { computed, onMounted } from 'vue'   // computed dan onMounted
    import { useStore } from 'vuex' // store Vuex
    //import { useRoute } from 'vue-router' // vue router
    import { useRoute, useRouter } from 'vue-router' // vue router
    export default {

        name: 'BidangShowComponent',

        setup() {

            //store vuex
            const store = useStore()

            //vue route
            const route = useRoute()

            //vue router
            const router = useRouter()


            onMounted(() => {
                store.dispatch('bidang/getDetailBidang', route.params.slug)
                store.dispatch('bidang/getLayananInBidang', route.params.slug)
            })

            const bidang = computed(() => {
                return store.state.bidang.bidang
            })

            const layanans = computed(() => {
                return store.state.bidang.layananInBidang
            })

            return {
                store,
                route,
                bidang,
                layanans
            }

        }

    }
</script>