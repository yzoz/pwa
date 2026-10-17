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
      <q-carousel-slide :name="1" img-src="/gal/net/00.jpg" />
      <q-carousel-slide :name="2" img-src="/gal/net/01.jpg" />
      <q-carousel-slide :name="3" img-src="/gal/net/02.jpg" />
    </q-carousel>
    <p>Все ваши устройства в одной сети… Это же прекрасно! Беспроводная сеть для дома или высокоскоростная для предприятия.</p>
    <q-btn color="primary" to="/order/Локальная сеть" label="Оставить заявку" class="full-width" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const slide = ref(1)
</script>
