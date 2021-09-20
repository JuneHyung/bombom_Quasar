<template>
  <div class="q-pa-md">
    <q-table :rows="rows" :columns="columns" row-key="name" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "GMapList.vue",
  setup() {
    const columns = [
      {
        name: "글번호",
        label: "글번호",
        field: "noticeNum",
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
        field: "noticeViews",
        align: "center",
      },
      {
        name: "Action",
        label: "Action",
        field: "noticeAction",
        align: "center",
      },
    ];

    const rows = [
      {
        name: "1번",
        noticeTitle: "1번 글 제목 입니다.",
        noticeNum: 1,
        noticeDate: "2021-09-20",
        noticeViews: 24,
        noticeAction: [1, 2],
      },
      {
        name: "2번",
        noticeTitle: "2번 글 제목 입니다.",
        noticeNum: 2,
        noticeDate: "2021-09-20",
        noticeViews: 24,
        noticeAction: [1, 2],
      },

      {
        name: "3번",
        noticeTitle: "3번 글 제목 입니다.",
        noticeNum: 3,
        noticeDate: "2021-09-20",
        noticeViews: 242,
        noticeAction: [1, 2],
      },
      {
        name: "4번",
        noticeTitle: "4번 글 제목 입니다.",
        noticeNum: 4,
        noticeDate: "2021-09-20",
        noticeViews: 25,
        noticeAction: [1, 2],
      },
      {
        name: "5번",
        noticeTitle: "5번 글 제목 입니다.",
        noticeNum: 5,
        noticeDate: "2021-09-20",
        noticeViews: 27,
        noticeAction: [1, 2],
      },
      {
        name: "6번",
        noticeTitle: "6번 글 제목 입니다.",
        noticeNum: 6,
        noticeDate: "2021-09-20",
        noticeViews: 265,
        noticeAction: [1, 2],
      },
      {
        name: "7번",
        noticeTitle: "7번 글 제목 입니다.",
        noticeNum: 7,
        noticeDate: "2021-09-20",
        noticeViews: 24,
        noticeAction: [1, 2],
      },
      {
        name: "8번",
        noticeTitle: "8번 글 제목 입니다.",
        noticeNum: 8,
        noticeDate: "2021-09-20",
        noticeViews: 284,
        noticeAction: [1, 2],
      },
      {
        name: "9번",
        noticeTitle: "9번 글 제목 입니다.",
        noticeNum: 9,
        noticeDate: "2021-09-20",
        noticeViews: 11,
        noticeAction: [1, 2],
      },
    ];
    return {
      columns,
      rows,
    };
  },
});
</script>

<style></style>
