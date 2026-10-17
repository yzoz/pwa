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
      <q-carousel-slide :name="1" img-src="/gal/intercom/00.jpg" />
      <q-carousel-slide :name="2" img-src="/gal/intercom/01.jpg" />
    </q-carousel>
    <p>Надоело открывать двери вручную? Поставьте домофон и забудьте об этом.</p>
    <q-btn color="primary" to="/order/Домофоны" label="Оставить заявку" class="full-width" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const slide = ref(1)
</script>
