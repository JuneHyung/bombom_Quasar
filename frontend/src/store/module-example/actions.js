import { getShopInfo } from './../../api/map.js';
export default {
  GET_SHOP_INFO({ commit }, payload) {
    const city = payload;
    console.log(city);
    return getShopInfo(city).then(({ data }) => {
      commit('setStore', data);
    }).catch(err => console.log(err));
  }
}