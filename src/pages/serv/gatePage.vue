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
      <q-carousel-slide :name="1" img-src="/gal/gate/01.jpg" />
      <q-carousel-slide :name="2" img-src="/gal/gate/00.jpg" />
      <q-carousel-slide :name="3" img-src="/gal/gate/02.jpg" />
      <q-carousel-slide :name="4" img-src="/gal/gate/03.jpg" />
      <q-carousel-slide :name="5" img-src="/gal/gate/04.jpg" />
      <q-carousel-slide :name="6" img-src="/gal/gate/05.jpg" />
      <q-carousel-slide :name="7" img-src="/gal/gate/06.jpg" />
    </q-carousel>
    <p>Автоматические ворота и шлагбаумы не только предотвратят попадание чужеродного на вашу территорию, но и с охотой пустят вас внутрь.</p>
    <q-btn color="primary" to="/order/Автоматические ворота" label="Оставить заявку" class="full-width" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const slide = ref(1)
</script>
