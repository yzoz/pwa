<template>
  <q-page class="q-pa-md">
    <span v-if="!isLoaded">Loading...</span>
    <telegram-login-temp
      mode="callback"
      telegram-login="dotaccessbot"
      @loaded='telegramLoadedCallbackFunc'
      @callback="login"
    />
  </q-page>
</template>

<script setup>
import { telegramLoginTemp } from 'vue3-telegram-login'
import { ref } from 'vue'

const isLoaded = ref(false)

function telegramLoadedCallbackFunc () {
  console.log('script is loaded')
  isLoaded.value = true
}

function login (user) {
  // gets user as an input
  // id, first_name, last_name, username,
  // photo_url, auth_date and hash
  console.log(user)
}
</script>
