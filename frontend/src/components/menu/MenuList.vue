<template>
  <div class="q-pa-md">
    <div
      class="q-gutter-y-md"
      style="max-width: calc(100% - 100px); margin: 0 auto"
    >
      <q-card>
        <q-tabs
          v-model="tab"
          class="text-grey"
          active-color="#3b2212"
          indicator-color="#3b2212"
          align="right"
        >
          <q-tab
            v-for="(names, i) in tabNames"
            :key="i"
            :name="names"
            :label="names"
          ></q-tab>
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel
            v-for="(tab, i) in tabContents"
            :key="i"
            :name="tab.menuType"
          >
            <h6>{{ tab.menuTitle }}</h6>
            <div>
              {{ tab.menuDesc }}
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "menuList",
  setup() {
    const tabNames = [
      "NEW",
      "COFFEE",
      "LATTE",
      "SMOOTHIE",
      "ADE",
      "TEA",
      "JUICE",
      "BUBBLE",
      "SIDEMENU",
    ];
    const tabContents = [
      {
        menuType: "COFFEE",
        menuTitle: "커피 1번",
        menuDesc: "커피1 입니다.",
      },
      {
        menuType: "LATTE",
        menuTitle: "라떼 2번",
        menuDesc: "라떼 2번 입니다.",
      },
      {
        menuType: "ADE",
        menuTitle: "에이드 3번",
        menuDesc: "에이드 3번 입니다.",
      },
      {
        menuType: "SMOOTHIE",
        menuTitle: "스무디 4번",
        menuDesc: "스무디 4번 입니다.",
      },
      {
        menuType: "NEW",
        menuTitle: "신상품 5번",
        menuDesc: "신상품 5번 입니다.",
      },
      {
        menuType: "ADE",
        menuTitle: "에이드 6번",
        menuDesc: "에이드 6번 입니다.",
      },
      {
        menuType: "TEA",
        menuTitle: "티 7번",
        menuDesc: "티 7번 입니다.",
      },
      {
        menuType: "BUBBLE",
        menuTitle: "버블티 8번",
        menuDesc: "버블티 8번 입니다.",
      },
      {
        menuType: "SIDEMENU",
        menuTitle: "사이드메뉴 9번",
        menuDesc: "사이드메뉴 9번 입니다.",
      },
      {
        menuType: "JUICE",
        menuTitle: "쥬스 10번",
        menuDesc: "쥬스 10번 입니다.",
      },
    ];
    return {
      tab: ref("NEW"),
      tabNames,
      tabContents,
    };
  },
});
</script>

<style></style>
