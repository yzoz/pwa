<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title @click="$router.push('/')">
          .доступа
        </q-toolbar-title>

        <div>
          <q-btn v-if="iPWA" round color="dark" @click="install()" icon="install_mobile" />
          <q-btn v-if="!iPWA && isMobile && !isNative" round color="dark" to="/install" icon="install_mobile" />
          &nbsp;
          <q-btn v-if="isWeb" round color="dark" to="/login" icon="login" />
          &nbsp;
          <q-btn round color="dark" to="/order" icon="message" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item clickable tag="a" to="/">
          <q-item-section avatar><q-icon name="home" /></q-item-section>
          <q-item-section>
            <q-item-label>Домой</q-item-label>
            <q-item-label caption>на старт</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="https://t.me/dotaccess">
          <q-item-section avatar><q-icon name="telegram" /></q-item-section>
          <q-item-section>
            <q-item-label>Telegram</q-item-label>
            <q-item-label caption>t.me/dotaccess</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="https://кмв-системы.рф/">
          <q-item-section avatar><q-icon name="public" /></q-item-section>
          <q-item-section>
            <q-item-label>КМВ Системы</q-item-label>
            <q-item-label caption>кмв-системы.рф</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="https://vit.ooo/">
          <q-item-section avatar><q-icon name="code" /></q-item-section>
          <q-item-section>
            <q-item-label>вАйТи</q-item-label>
            <q-item-label caption>vit.ooo</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Capacitor } from '@capacitor/core'

const isMobile = ref(false)

const getMobileOS = () => {
  const ua = navigator.userAgent
  if (/android/i.test(ua)) {
    return 'Android'
  } else if (/iPad|iPhone|iPod/.test(ua)) {
    return 'iOS'
  }
  return 'Other'
}

onMounted(() => {
  console.log(getMobileOS())
  const os = getMobileOS()
  if (os === 'Android' || os === 'iOS') {
    isMobile.value = true
  }
})

const deferredPrompt = ref(null)
const isWeb = ref(false)
const iPWA = ref(false)
const isNative = Capacitor.isNativePlatform()
const isInstalled = ref(false)

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault()
  deferredPrompt.value = e
  iPWA.value = true
  console.log('beforeinstallprompt event was fired')
})

window.addEventListener('appinstalled', () => {
  isInstalled.value = true
  deferredPrompt.value = null
  console.log('PWA was installed')
})

const install = async () => {
  deferredPrompt.value.prompt()
  const { outcome } = await deferredPrompt.value.userChoice
  console.log(`User response to the install prompt: ${outcome}`)
  deferredPrompt.value = null
}

// Capacitor.getPlatform(); // -> 'web', 'ios' or 'android'
if (Capacitor.getPlatform() === 'web') {
  isWeb.value = true
}

// const pl = Capacitor.getPlatform()

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron&family=Oswald&family=Roboto+Slab&display=swap');
.q-toolbar__title{font-family: 'Roboto Slab', serif}
</style>
