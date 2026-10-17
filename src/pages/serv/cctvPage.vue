<template>
  <q-page class="q-pa-md">
    <q-carousel
      swipeable
      animated
      control-type="regular"
      control-color="primary"
      navigation
      padding
      arrows
      v-model="slide"
      infinite
    >
      <q-carousel-slide :name="1" img-src="/gal/cctv/00.jpg" />
      <q-carousel-slide :name="2" img-src="/gal/cctv/01.jpg" />
      <q-carousel-slide :name="3" img-src="/gal/cctv/02.jpg" />
      <q-carousel-slide :name="4" img-src="/gal/cctv/03.jpg" />
      <q-carousel-slide :name="5" img-src="/gal/cctv/04.jpg" />
      <q-carousel-slide :name="6" img-src="/gal/cctv/05.jpg" />
      <q-carousel-slide :name="7" img-src="/gal/cctv/06.jpg" />
      <q-carousel-slide :name="8" img-src="/gal/cctv/07.jpg" />
      <q-carousel-slide :name="9" img-src="/gal/cctv/08.jpg" />
      <q-carousel-slide :name="10" img-src="/gal/cctv/09.jpg" />
    </q-carousel>
    <p>Надёжное видеонаблюдение в дом, подъезд, магазин или на участок. Беспроводное или по проводам. С удалённым доступом или с проекцией на экран. С облачным или локальным хранилищем. Одна или 101 камера.</p>
    <q-btn color="primary" to="/order/Видеонаблюдение" label="Оставить заявку" class="full-width" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const slide = ref(1)
</script>
