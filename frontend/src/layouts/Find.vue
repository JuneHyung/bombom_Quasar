<template>
  <GMap></GMap>
  <GMapList></GMapList>
</template>

<script>
import { defineComponent } from "vue";
import GMap from "./../components/find/GMap.vue";
import GMapList from "./../components/find/GMapList.vue";
export default defineComponent({
  name: "Find",
  components: { GMap, GMapList },
});
</script>

<style></style>
