<template>
  <GMap :mark="locArr"></GMap>
  <q-tabs
    v-model="tab"
    class="text-grey"
    active-color="#3b2212"
    indicator-color="#3b2212"
    align="right"
  >
    <q-tab
      v-for="(names, i) in cityNames"
      :key="i"
      :name="names"
      :label="names"
      @click="getStore(cityValues[i])"
    >
    </q-tab>
  </q-tabs>
  <div class="q-pa-md">
    <q-table :rows="items" :columns="columns" row-key="name" />
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import GMap from "./../components/find/GMap.vue";
import { columns, cityNames, cityValues } from "./../api/map.js";
import { useStore } from "vuex";
export default defineComponent({
  name: "Find",
  components: { GMap },

  created() {
    this.getStore("all");
  },
  setup() {
    const store = useStore();
    const items = store.getters.getSInfo;
    const locArr = store.getters.getLInfo;
    function getStore(city) {
      store.dispatch("GET_SHOP_INFO", city);
    }
    return {
      tab: ref("all"),
      columns,
      cityNames,
      cityValues,
      store,
      items,
      locArr,
      getStore,
    };
  },
});
</script>

<style></style>
