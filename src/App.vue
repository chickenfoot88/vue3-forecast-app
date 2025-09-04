<script setup>
import { provide, ref, watch, onMounted } from 'vue'
import PaneRight from '@/components/PaneRight.vue'
import PaneLeft from '@/components/PaneLeft.vue'
import getCity from '@/api/requests.js'
import cityProvide from '@/constants.js'

const dayStatictics = ref([])
const forecast = ref([])

const currentCity = ref('Москва')
provide(cityProvide, currentCity)

watch(currentCity, () => {
  fetchCity(currentCity.value)
  activeDayIndex.value = 0
})

onMounted(() => {
  fetchCity(currentCity.value)
})

const weatherParamPostfix = {
  humidity: {
    label: 'Влажность',
    symbol: '%'
  },
  cloud: {
    label: 'Облачность',
    symbol: '%'
  },
  wind_kph: {
    label: 'Ветер',
    symbol: ' км/ч'
  }
}

const forecastParmaPostfix = {
 avghumidity: {
    label: 'Влажность',
    symbol: '%'
  },
  daily_chance_of_rain: {
    label: 'Вероятность дождя',
    symbol: '%'
  },
  maxwind_kph: {
    label: 'Ветер',
    symbol: ' км/ч'
  }
}

const activeDayIndex = ref(0)
function setActiveDay(index) {
  activeDayIndex.value = index
    dayStatictics.value = Object.keys(forecastParmaPostfix).map((key) => {
    return {
      label: forecastParmaPostfix[key].label,
      value: `${forecast.value[index].day[key]} ${forecastParmaPostfix[key].symbol}`
    }
  })
}

const error = ref({})

async function fetchCity(cityName) {
  if(!cityName.length) return

  const forecastResult = await getCity(cityName)

  if (forecastResult.error) {
    error.value = forecastResult.error
    dayStatictics.value = []
    forecast.value = []
    return
  }
  
  dayStatictics.value = Object.keys(weatherParamPostfix).map((key) => {
    return {
      label: weatherParamPostfix[key].label,
      value: `${forecastResult.current[key]} ${weatherParamPostfix[key].symbol}`
    }
  })

  forecast.value = forecastResult.forecast.forecastday
  error.value = {}
}

</script>

<template>
  <main class="main">
    <div class="left">
      <PaneLeft
        v-if="forecast.length"
        :day-data="forecast[activeDayIndex]"
      />
    </div>
    <div class="right">
      <PaneRight :current-city :day-statictics :forecast :error @select-day="setActiveDay" />
    </div>
  </main>
</template>

<style scoped>
  .main {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .left {
    width: 500px;
    height: 680px;
    border-radius: 30px;
    background-image: url("/public/bg.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
