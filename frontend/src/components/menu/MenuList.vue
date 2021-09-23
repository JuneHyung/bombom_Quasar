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
            @click="getMenuList(names)"
          >
          </q-tab>
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel :name="tabNames[curIdx]" class="row">
            <div class="col-4" v-for="(tabs, i) in tabContents" :key="i">
              <q-card>
                <q-img
                  src="~assets/images/menu/coffee/menu01_img01.png"
                ></q-img>
                <div class="row" style="line-height: 60px">
                  <p class="col-6" style="margin: 0; text-align: center">
                    {{ tabs.menuName }}
                  </p>
                  <p class="col-6" style="margin: 0; text-align: center">
                    {{ tabs.menuPrice }}
                  </p>
                </div>
              </q-card>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { api } from "./../../boot/axios.js";
export default defineComponent({
  name: "menuList",
  created() {
    this.getMenuList("new");
  },
  setup() {
    let curIdx = ref(0);
    const tabNames = [
      "new",
      "coffee",
      "latte",
      "smoothie",
      "ade",
      "tea",
      "juice",
      "bubble",
      "sidemenu",
    ];
    let tabContents = ref([]);

    async function getMenuList(type) {
      this.tabContents.splice(0);
      this.baseurl += type;

      await api
        .get(`/menu/${type}`)
        .then(({ data }) => {
          this.tabContents = data;
          this.curIdx = this.tabNames.indexOf(type);
        })
        .catch((err) => console.log(err));
    }

    return {
      tab: ref("new"),
      tabNames,
      tabContents,
      curIdx,
      getMenuList,
    };
  },
});
</script>

<style></style>
