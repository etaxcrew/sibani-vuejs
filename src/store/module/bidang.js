//import global API
import Api from "../../api/Api";

const bidang = {
  //set namespace true
  namespaced: true,

  //state
  state: {
    //index bidangs
    bidangs: [],

    //detail bidang
    bidang: {},

    //layanan in bidang
    layananInBidang: [],
  },

  //mutations
  mutations: {
    //set state bidangs dengan data dari response
    GET_BIDANGS(state, bidangs) {
      state.bidangs = bidangs;
    },

    DETAIL_BIDANG(state, bidang) {
      state.bidang = bidang;
    },

    //set state layananInBidang dengan data dari response
    LAYANAN_IN_BIDANG(state, layanans) {
      state.layananInBidang = layanans;
    },
  },

  //actions
  actions: {
    //action getBidangs
    getBidangs({ commit }) {
      //get data bidangs ke server
      Api.get("/web/bidangs")
        .then((response) => {
          //commit ke mutation GET_BIDANGS dengan response data
          commit("GET_BIDANGS", response.data.bidangs);
        })
        .catch((error) => {
          //show error log dari response
          console.log(error);
        });
    },

    //action getDetailBidang
    getDetailBidang({ commit }, slug) {
      //get data sliders ke server
      Api.get(`/bidang/${slug}`)
        .then((response) => {
          //commit ke mutation GET_BIDANGS dengan response data
          commit("DETAIL_BIDANG", response.data.bidang);
        })
        .catch((error) => {
          //show error log dari response
          console.log(error);
        });
    },

    //action get data layanan berdasarkan bidang
    getLayananInBidang({ commit }, slug) {
      //get data
      Api.get(`/bidang/${slug}`)
        .then((response) => {
          //commit ke mutation LAYANAN_IN_BIDANG dengan response data
          commit("LAYANAN_IN_BIDANG", response.data.layanan);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  //getters
  getters: {},
};

export default bidang;
