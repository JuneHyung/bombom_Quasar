import { api } from "./../boot/axios.js";

const api_key = 'AIzaSyBThNRfKOXH18XW-4UE_UtZMGWRhYvUe7c';
const cityNames = ['ALL', '서울', '부산', '대구', '인천', '대전', '울산', '세종', '광주',  '경기도', '강원도', '충청북도', '충청남도', '전라북도', '전라남도', '경상북도', '경상남도', '제주']
const cityValues = ['all', 'seoul', 'busan', 'daegu', 'all', 'daejeon', 'ulsan', 'saejong','all','all','all','all','all','all','all','all','all','all'];
const columns = [
  {
    name: "상점번호",
    label: "상점번호",
    field: "shopNo",
    sortable: true,
    align: "left",
  },
  {
    name: "지역이름",
    label: "지역이름",
    field: "locName",
    sortable: true,
    align: "center",
  },
  {
    name: "상점이름",
    label: "상점이름",
    field: "shopName",
    sortable: true,
    align: "center",
  },
  {
    name: "상점전화번호",
    label: "상점전화번호",
    field: "shopTel",
    align: "center",
  },
  {
    name: "상점주소",
    label: "상점주소",
    field: "shopAddress",
    align: "center",
  },
]

function getShopInfo(city) {
  let apiUrl = '';
  city == "all" ? (apiUrl = `/shop`) : (apiUrl = `/shop/${city}`);
  return api.get(`${apiUrl}`)
}
export {columns, cityNames, cityValues, api_key,getShopInfo}