import { api } from "@/boot/axios";

const columns = [
  {
    name: "글번호",
    label: "글번호",
    field: "noticeNo",
    sortable: true,
    align: "left",
  },
  {
    name: "제목",
    label: "제목",
    field: "noticeTitle",
    sortable: true,
    align: "center",
  },
  {
    name: "작성일",
    label: "작성일",
    field: "noticeDate",
    sortable: true,
    align: "center",
  },
  {
    name: "조회수",
    label: "조회수",
    field: "noticeView",
    align: "center",
  },
  
];
function getNoticeInfo() {
  return api.get('/notice');
}
export { columns, getNoticeInfo};