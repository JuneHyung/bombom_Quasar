<template>
  <NavHeader></NavHeader>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";
import NavHeader from "components/Header.vue";
export default defineComponent({
  name: "App",
  components: {
    NavHeader,
  },
});
</script>
