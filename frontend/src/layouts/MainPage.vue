<template>
  <banner></banner>
  <introduce></introduce>
</template>

<script>
import { defineComponent } from "vue";
import Banner from "./../components/main/Banner.vue";
import Introduce from "./../components/main/Introduce.vue";
export default defineComponent({
  name: "Main",
  components: {
    Banner,
    Introduce,
  },
  setup() {
    return {};
  },
});
</script>

<style></style>
