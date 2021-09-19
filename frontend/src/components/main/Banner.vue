<template>
  <q-carousel
    animated
    v-model="slide"
    navigation
    infinite
    :autoplay="autoplay"
    arrows
    transition-prev="slide-right"
    transition-next="slide-left"
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
    style="height: 65vh"
  >
    <q-carousel-slide
      :name="1"
      img-src="~/assets/images/banners/banner01.jpg"
    />
    <q-carousel-slide
      :name="2"
      img-src="~/assets/images/banners/banner02.jpg"
      style="width: 100%; height: 100%"
    />
    <q-carousel-slide
      :name="3"
      img-src="~/assets/images/banners/banner03.jpg"
      style="width: 100%; height: 100%"
    />
    <q-carousel-slide
      :name="4"
      img-src="~/assets/images/banners/banner04.jpg"
      style="width: 100%; height: 100%"
    />
  </q-carousel>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Banner",
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
});
</script>

<style></style>
