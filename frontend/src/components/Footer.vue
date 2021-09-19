<template>
  <footer>
    <div class="white--text pt-0" style="width: 100%; margin: 0 auto">
      This site is made by JuneHyung for Vue Study. Welcome!! <br />
      원래의 카페봄봄사이트는
      <a
        href="https://www.cafebombom.co.kr"
        style="display: inline; color: #fff"
        >https://www.cafebombom.co.kr</a
      >
      입니다. Vue 공부를 위해 만들었습니다.<br />
      Tel : 010-7917-2614 <br />
      E-mail : cjh951114@naver.com
    </div>

    <div class="white--text">
      {{ new Date().getFullYear() }} — <strong>Quasar</strong>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Footer",
  setup() {
    return {};
  },
});
</script>

<style scoped>
footer {
  color: white;
  background-color: #3b2212;
  text-align: center;
  padding: 20px;
}
</style>
