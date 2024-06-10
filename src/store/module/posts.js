//import global API
import Api from '../../api/Api'

const posts = {

    //set namespace true
    namespaced: true,

    //state
    state: {

        posts: [],

    },

    //mutations
    mutations: {

        GET_POST(state, posts) {
            state.posts = posts // <-- assign state posts dari hasil response
        },

    },

    //actions
    actions: {

        getPost({ commit }) {

            //define variable token
            const token = localStorage.getItem('token')

            Api.defaults.headers.common['Authorization'] = "Bearer " +token
            Api.get('/posts')
            .then(response => {
                
                //commit ke mutation GET_POST
                commit('GET_POST', response.data.data)

            })

        },
    },

    //getters
    getters: {

        //getter getOrder
        getPost(state) {
            return state.posts
        },

    }

}

export default posts