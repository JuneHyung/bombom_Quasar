<template>
  <NoticeTable :notice="notices"></NoticeTable>
</template>

<script>
import { defineComponent } from "vue";
import NoticeTable from "@/components/notice/NoticeTable.vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "Notice",
  components: { NoticeTable },
  created() {
    this.getNoticeInfo();
  },
  setup() {
    const store = useStore();
    const notices = store.getters.getNoticeInfo;
    function getNoticeInfo() {
      store.dispatch("GET_NOTICE_INFO");
    }
    return {
      getNoticeInfo,
      notices,
      store,
    };
  },
});
</script>

<style></style>
