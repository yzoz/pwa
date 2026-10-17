<template>
  <q-page class="home">
    <!--div class="count row text-center items-center justify-evenly">
      <vue-countdown :time="time" v-slot="{ days, hours, minutes, seconds }">
        {{ days }}:{{ hours }}:{{ minutes }}:{{ seconds }}
      </vue-countdown>
    </div-->
    <div class="row">
      <q-card class="col service" @click="$router.push('/cctv')">
        <q-img src="/icons/serv/cctv.png">
          <div class="absolute-bottom text-subtitle2 text-center">Видеонаблюдение</div>
        </q-img>
      </q-card>
      <q-card class="col service" @click="$router.push('/4g')">
        <q-img src="/icons/serv/4g.png">
          <div class="absolute-bottom text-subtitle2 text-center">Интернет</div>
        </q-img>
      </q-card>
    </div>
    <div class="row">
      <q-card class="col service" @click="$router.push('/light')">
        <q-img src="/icons/serv/light.png">
          <div class="absolute-bottom text-subtitle2 text-center">Освещение</div>
        </q-img>
      </q-card>
      <q-card class="col service" @click="$router.push('/plug')">
        <q-img src="/icons/serv/plug.png">
          <div class="absolute-bottom text-subtitle2 text-center">Электрика</div>
        </q-img>
      </q-card>
    </div>
    <div class="row">
      <q-card class="col service" @click="$router.push('/alarm')">
        <q-img src="/icons/serv/alarm.png">
          <div class="absolute-bottom text-subtitle2 text-center">Сигнализации</div>
        </q-img>
      </q-card>
      <q-card class="col service" @click="$router.push('/gate')">
        <q-img src="/icons/serv/gate.png">
          <div class="absolute-bottom text-subtitle2 text-center">Автоматика</div>
        </q-img>
      </q-card>
    </div>
    <div class="row">
      <q-card class="col service" @click="$router.push('/intercom')">
        <q-img src="/icons/serv/intercom.png">
          <div class="absolute-bottom text-subtitle2 text-center">Домофоны</div>
        </q-img>
      </q-card>
      <q-card class="col service" @click="$router.push('/net')">
        <q-img src="/icons/serv/net.png">
          <div class="absolute-bottom text-subtitle2 text-center">Сети</div>
        </q-img>
      </q-card>
    </div>
    <div class="row">
      <q-card class="col service" @click="$router.push('/satellite')">
        <q-img src="/icons/serv/satellite.png">
          <div class="absolute-bottom text-subtitle2 text-center">Спутниковое</div>
        </q-img>
      </q-card>
      <q-card class="col service" @click="$router.push('/cashbox')">
        <q-img src="/icons/serv/kass.png">
          <div class="absolute-bottom text-subtitle2 text-center">Онлайн-кассы</div>
        </q-img>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown'
const now = new Date()
const count = new Date(1688169600000)
const time = count - now
</script>

<style>
.service {margin: 10px;}
.count {font-size: 50px; font-family: 'Orbitron', sans-serif;}
.count span{width: 100%; text-align: center; color: #808080;}
.q-img__container {
  left: 20%;
  top: 10%;
  right: 20%;
  bottom: 30%;
}
.q-img__content > div {
  padding: 5px;
  font-size: 15px;
  text-transform: uppercase;
  background: #ff005f;
  font-family: Oswald, sans-serif;
}

/* Десктоп: раскладываем плитки услуг в адаптивную сетку, чтобы они занимали
   ширину по максимуму (не по 2 огромных квадрата в ряд).
   minmax(260px) подобран так, чтобы на больших экранах (1920) выходило
   ровно 5 плиток в ряд (5+5), а сами плитки были крупнее.
   На экранах < 1024px вёрстка остаётся прежней. */
@media (min-width: 1024px) {
  .home {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 16px;
    padding: 10px;
    align-content: start;
  }
  .home .row { display: contents; }
  .home .service { margin: 0; min-width: 0; }
}
</style>
