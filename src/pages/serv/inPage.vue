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
      <q-carousel-slide :name="1" img-src="/gal/4g/00.jpg" />
      <q-carousel-slide :name="2" img-src="/gal/4g/01.jpg" />
    </q-carousel>
    <p>Интернет там где его нет. Усиление 4G сигнала. Wi-Fi точки доступа.</p>
    <q-btn color="primary" to="/order/Интернет" label="Оставить заявку" class="full-width" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const slide = ref(1)
</script>
