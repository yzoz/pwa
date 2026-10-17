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
      <q-carousel-slide :name="1" img-src="/gal/cashbox/00.jpg" />
    </q-carousel>
    <p>Современный и удобный способ принимать оплату от клиента - залог успешного функционирования любого бизнеса.</p>
    <q-btn color="primary" to="/order/Онлайн-касса" label="Оставить заявку" class="full-width" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const slide = ref(1)
</script>
