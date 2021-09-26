<template>
  <div class="q-pa-md">
    <q-table title="공지사항" :columns="columns" :rows="notices" row-key="name">
    </q-table>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { columns } from "@/api/notice.js";
import { useStore } from "vuex";
export default defineComponent({
  name: "Noticetable",
  props: { notice: Array },
  setup(props) {
    const store = useStore();
    let notices = ref(props.notice);
    return {
      notices,
      columns,
      store,
    };
  },
});
</script>
