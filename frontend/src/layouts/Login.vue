<template>
  <LoginForm></LoginForm>
</template>

<script>
import { defineComponent } from "vue";
import LoginForm from "./../components/member/LoginForm";
export default defineComponent({
  name: "Login",
  components: { LoginForm },
});
</script>

<style></style>
