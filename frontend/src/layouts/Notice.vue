<template>
  <NoticeTable></NoticeTable>
</template>

<script>
import { defineComponent } from "vue";
import NoticeTable from "./../components/notice/NoticeTable.vue";
export default defineComponent({
  name: "Notice",
  components: { NoticeTable },
});
</script>

<style></style>
