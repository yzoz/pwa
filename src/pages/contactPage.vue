<template>
  <q-dialog v-model="wtf" style="opacity: 0.9;">
      <q-card>
        <q-card-section class="text-center">
          Спасибо!<br />Наши специалисты свяжутся с вами в течении часа.
        </q-card-section>
        <q-card-actions align="center">
          <q-btn label="ok" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  <q-page class="q-pa-md">
    <q-input v-model="name" label="Имя">
      <template v-slot:prepend>
        <q-icon name="person" />
      </template>
    </q-input>
    <q-input v-model="phone" label="Телефон">
      <template v-slot:prepend>
        <q-icon name="phone" />
      </template>
    </q-input>
    <q-input v-model="addr" label="Адрес">
      <template v-slot:prepend>
        <q-icon name="place" />
      </template>
    </q-input>
    <q-input v-model="msg" label="Вопрос" type="textarea">
      <template v-slot:prepend>
        <q-icon name="question_mark" />
      </template>
    </q-input>
    <p></p>
    <q-btn color="primary" @click="send()">Отправить</q-btn>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const wtf = ref(false)
const name = ref('')
const phone = ref('')
const addr = ref('')
const msg = ref('')

const tg = {
  token: '6189234366:AAEWuUXga_UYAOzxvZzX_8J8sepAYwbFzYI',
  chat_id: '5262080251'
}

function sendMessage (text) {
  const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${text}`
  const xht = new XMLHttpRequest()
  xht.open('GET', url)
  xht.send()
}

const send = () => {
  sendMessage(name.value + ' | ' + phone.value + ' | ' + addr.value + ' | ' + msg.value)
  name.value = ''
  phone.value = ''
  addr.value = ''
  msg.value = ''
  wtf.value = true
}
</script>
