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
      <q-carousel-slide :name="1" img-src="/gal/alarm/00.jpg" />
      <q-carousel-slide :name="2" img-src="/gal/alarm/01.jpg" />
      <q-carousel-slide :name="3" img-src="/gal/alarm/02.jpg" />
      <q-carousel-slide :name="4" img-src="/gal/alarm/03.jpg" />
      <q-carousel-slide :name="5" img-src="/gal/alarm/04.jpg" />
      <q-carousel-slide :name="6" img-src="/gal/alarm/05.jpg" />
      <q-carousel-slide :name="7" img-src="/gal/alarm/06.jpg" />
      <q-carousel-slide :name="8" img-src="/gal/alarm/07.jpg" />
      <q-carousel-slide :name="9" img-src="/gal/alarm/08.jpg" />
    </q-carousel>
    <p>Сигнализация - это не только залог вашей безопасности, но и гарантия спокойствия за своё имущество и окружение.</p>
    <q-btn color="primary" to="/order/Сигнализация" label="Оставить заявку" class="full-width" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const slide = ref(1)
</script>
