// import state from './state'
// import * as mutations from './mutations'

import actions from './actions.js';

export const bombom = {
  getters: {
    getSInfo(state) { return state.items },
    getLInfo(state) { return state.locArr },
    getNoticeInfo(state) { return state.notices},
  },
  mutations: {
    setStore(state, store) {
      state.items.splice(0);
      state.locArr.splice(0);
      store.forEach(el => {
        const sInfo = {
          shopNo: el.shopNo,
          locName: el.locName,
          shopName: el.shopName,
          shopTel: el.shopTel,
          shopAddress: el.shopTel,
        }
        const lInfo = {
          lat: Number(el.lat),
          lng: Number(el.lng),
        }
        state.items.push(sInfo);
        state.locArr.push(lInfo);
      })
    },
    setNotice(state, notice) {
      notice.forEach(el => {
        const nInfo = {
          noticeContent: el.noticeContent,
          noticeDate: el.noticeDate,
          noticeNo: el.noticeNo,
          noticeTitle: el.noticeTitle,
          noticeView: el.noticeView,
        }
        state.notices.push(nInfo);
      })
    }
  },
  actions,
  state: {
    items: [],
    locArr: [],
    notices: [],
  }
}
