<template>
  <NavHeader></NavHeader>
  <router-view />
  <NavFooter></NavFooter>
</template>
<script>
import { defineComponent } from "vue";
import NavHeader from "components/Header.vue";
import NavFooter from "components/Footer.vue";
export default defineComponent({
  name: "App",
  components: {
    NavHeader,
    NavFooter,
  },
});
</script>
