<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="menuOutBox">
      <q-toolbar>
        <div class="col-2 menuBtn" @click="moveMain">LOGO</div>
        <q-space></q-space>
        <div class="col-2 menuBtn" @click="moveMenu">메뉴보기</div>
        <div class="col-2 menuBtn" @click="moveNotice">공지사항</div>
        <div class="col-2 menuBtn" @click="moveFindStore">매장찾기</div>
        <div class="col-2 menuBtn" @click="moveLogin">로그인</div>
      </q-toolbar>
    </q-header>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
// import { goMenu, goNotice, goFindStore, goLogin } from "./../api/move.js";
export default defineComponent({
  name: "Header",
  setup() {
    function moveMain() {
      this.$router.push({ name: "Main" });
    }
    function moveMenu() {
      this.$router.push({ name: "Menu" });
    }
    function moveNotice() {
      this.$router.push({ name: "Notice" });
    }
    function moveFindStore() {
      this.$router.push({ name: "Find" });
    }
    function moveLogin() {
      this.$router.push({ name: "Login" });
    }
    return {
      moveMain,
      moveMenu,
      moveNotice,
      moveFindStore,
      moveLogin,
    };
  },
});
</script>

<style scoped>
.menuOutBox {
  background-color: yellow;
  color: #3b2212;
  font-weight: 900;
}
.menuBtn {
  cursor: pointer;
  text-align: center;
}
</style>
