<template>
    <div class="login-hk">

    
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card border-0 shadow rounded">
                        <div class="card-body">
                            <div class="section-heading">
                                <h4>Daftar Akun</h4>
                                <p>Silakan Anda lengkapi formulir pendaftaran Akun dibawah ini.</p>
                                <!-- <p>Silakan isi formulir ini, dan kami akan mengirimi Anda email selamat datang sehingga Anda dapat memverifikasi alamat email Anda dan masuk.</p> -->
                            </div>
                            <!-- <div class="alert alert-info">
                                <strong>Perhatian !</strong><br>
                                Pastikan No. Handphone &amp; Email anda aktif dan benar, karena akan dipergunakan untuk pengiriman notifikasi / pemberitahuan.
                            </div> -->
                            <hr>
                            <form @submit.prevent="register">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>NIP</label>
                                            <input type="text" v-model="user.nip" class="form-control" placeholder="Nomor Induk Pegawai">
                                        </div>
                                        <div v-if="validation.nip" class="mt-2 alert alert-danger">
                                            {{ validation.nip[0] }}
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Nama Lengkap</label>
                                            <input type="text" v-model="user.name" class="form-control" placeholder="Nama Lengkap">
                                        </div>
                                        <div v-if="validation.name" class="mt-2 alert alert-danger">
                                            {{ validation.name[0] }}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>No. Handphone</label>
                                            <input type="text" v-model="user.telp" class="form-control" placeholder="Nomor Handphone">
                                        </div>
                                        <div v-if="validation.telp" class="mt-2 alert alert-danger">
                                            {{ validation.telp[0] }}
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Email address</label>
                                            <input type="email" v-model="user.email" class="form-control"
                                                placeholder="Email Address">
                                        </div>
                                        <div v-if="validation.email" class="mt-2 alert alert-danger">
                                            {{ validation.email[0] }}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Password</label>
                                            <input type="password" v-model="user.password" class="form-control"
                                                placeholder="Password">
                                        </div>
                                        <div v-if="validation.password" class="mt-2 alert alert-danger">
                                            {{ validation.password[0] }}
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Konfirmasi Password</label>
                                            <input type="password" v-model="user.password_confirmation" class="form-control"
                                                placeholder="Konfirmasi Password">
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-3 pb-4">
                                    <button type="submit" class="btn btn-primary" style="width: 100%">REGISTER</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="register text-center">
                        <p>Sudah punya akun ? <router-link :to="{name: 'login'}">Login Disini !</router-link></p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import { ref, reactive } from 'vue'
    import { useStore } from 'vuex'
    import { useRouter } from 'vue-router'

    export default {

        name: 'RegisterComponent',

        setup() {

            //user state
            const user = reactive({
                nip: '',
                name: '',
                telp: '',
                email: '',
                password: '',
                password_confirmation: ''
            })

            //validation state
            const validation = ref([])

            //store vuex
            const store = useStore()

            //route
            const router = useRouter()

            //function register, fungsi ini di jalankan ketika form di submit
            function register() {

                //define variable 
                let nip     = user.nip
                let name     = user.name
                let telp     = user.telp
                let email    = user.email
                let password = user.password
                let password_confirmation = user.password_confirmation

               //panggil action "register" di dalam module "auth" vuex
                store.dispatch('auth/register', {
                    nip,
                    name,
                    telp,
                    email,
                    password,
                    password_confirmation
                })
                .then(() => {
                    //redirect ke dashboard
                    router.push({name: 'dashboard'})
                }).catch(error => {
                    //show validaation message
                    validation.value = error
                })
            }

            //return a state and function
            return {
                user,
                validation,
                register
            }

        }

    }
</script>