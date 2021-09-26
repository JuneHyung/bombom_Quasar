<template>
  <q-card
    class="my-card"
    style="width: calc(100% - 600px); margin: 26.85vh auto"
  >
    <q-form
      class="q-gutter-md"
      style="width: calc(100% - 100px); margin: 0 auto; padding: 20px"
    >
      <q-input
        v-model="id"
        label="Your id *"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type your id']"
      />

      <q-input
        v-model="password"
        label="Your Password *"
        type="password"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your pw',
          (val) =>
            (val.length > 8 && val.length < 16) || 'Please type a real pw',
        ]"
      />

      <div align="right">
        <q-btn
          label="초기화"
          type="reset"
          flat
          class="q-ml-sm"
          @click="onReset()"
        />
        <q-btn label="회원가입" flat />
        <q-btn label="로그인" flat></q-btn>
      </div>
    </q-form>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "LoginForm",
  setup() {
    const id = ref(null);
    const password = ref(null);
    function onReset() {
      id.value = null;
      password.value = null;
    }
    return {
      id,
      password,
      onReset,
    };
  },
});
</script>

<style></style>
