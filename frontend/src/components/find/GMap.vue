<template>
  <GoogleMap
    :api-key="api_key"
    :center="markers[0]"
    style="width: 100%; height: 500px"
    :zoom="10.5"
  >
    <Marker v-for="(m, i) in markers" :key="i" :options="{ position: m }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import { api_key } from "./../../api/map.js";
import { useStore } from "vuex";
export default defineComponent({
  name: "GMap",
  components: { GoogleMap, Marker },
  props: { mark: Array },

  setup() {
    const store = useStore();
    const markers = store.getters.getLInfo;

    return { api_key, markers, store };
  },
});
</script>

<style></style>
