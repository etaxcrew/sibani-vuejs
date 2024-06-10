<template>
    <header class="header-main">
      <div class="container">
          <div class="row align-items-center">
            <div class="col-md-3 col-7">
                <router-link :to="{name: 'home'}" class="text-decoration-none" data-abc="true">
                    <span class="logo"><i class="fa fa-user-astronaut"></i> SIBANI</span>
                </router-link>
            </div>
            <div class="col-md-6 d-none d-md-block">
              <form class="search-wrap">
                <div class="input-group w-100">
                    <input type="text" class="form-control search-form" name="q" placeholder="Telusuri layanan">
                    <button class="btn search-button" type="submit"><i class="fa fa-search"></i></button>
                </div>
              </form>
            </div>
            <div class="col-md-3 col-5">
                <div class="d-flex justify-content-end">
                    <div class="main-button">
                        <router-link :to="{name: 'login'}" v-if="!isLoggedIn" class="btn search-button btn-md ml-4"> LOGIN</router-link>
                        <router-link :to="{name: 'dashboard'}" v-else class="btn search-button btn-md ml-4"> ACCOUNT</router-link>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </header>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

    export default {

        name: 'HeaderComponent',

        setup() {

            //store vuex
            const store = useStore()

            //computed
            const isLoggedIn = computed(() => {

                //get getters isLoggedIn dari module auth
                return store.getters['auth/isLoggedIn']

            })

            return {
                store,
                isLoggedIn
            }

        }

    }
</script>