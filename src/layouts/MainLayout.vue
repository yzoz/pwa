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
          <q-btn round color="dark" to="/login" icon="login" />
          &nbsp;
          <q-btn round color="dark" to="/send" icon="message" />
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
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
