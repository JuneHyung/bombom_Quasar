import { getShopInfo } from '@/api/map.js';
import { getNoticeInfo } from '@/api/notice.js';
export default {
  GET_SHOP_INFO({ commit }, city) {
    return getShopInfo(city).then(({ data }) => {
      commit('setStore', data);
    }).catch(err => console.log(err));
  },

  GET_NOTICE_INFO({ commit }) {
    return getNoticeInfo().then(({ data }) => {
      commit('setNotice', data);
    }).catch(err => console.log(err));
  }
}