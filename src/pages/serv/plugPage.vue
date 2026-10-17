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
      <q-carousel-slide :name="1" img-src="/gal/plug/00.jpg" />
      <q-carousel-slide :name="2" img-src="/gal/plug/01.jpg" />
      <q-carousel-slide :name="3" img-src="/gal/plug/02.jpg" />
      <q-carousel-slide :name="4" img-src="/gal/plug/03.jpg" />
    </q-carousel>
    <p>От розетки и выключателя до промышленных кабелей и трансформаторов - наши специалисты помогут с любой электрической задачей.</p>
    <q-btn color="primary" to="/order/Электрика" label="Оставить заявку" class="full-width" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const slide = ref(1)
</script>
