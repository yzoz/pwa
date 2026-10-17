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
      <q-carousel-slide :name="1" img-src="/gal/light/00.jpg" />
      <q-carousel-slide :name="2" img-src="/gal/light/01.jpg" />
      <q-carousel-slide :name="3" img-src="/gal/light/02.jpg" />
      <q-carousel-slide :name="4" img-src="/gal/light/03.jpg" />
    </q-carousel>
    <p>Осветим любое пространство от небольшой комнаты до огромного ангара. Прожекторы, точечные светильники, гирлянды и светодиодные лампы.</p>
    <q-btn color="primary" to="/order/Освещение" label="Оставить заявку" class="full-width" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const slide = ref(1)
</script>
