//import vuex
import { createStore } from 'vuex'

//import module auth
import auth from './module/auth'

//import module bidang
import bidang from './module/bidang'

//import module posts
import posts from './module/posts'

//create store vuex
export default createStore({

    modules: {
        auth,
        bidang,
        posts
    }

})