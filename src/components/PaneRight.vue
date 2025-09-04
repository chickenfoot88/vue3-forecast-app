
<script setup>
import { ref, computed } from 'vue'
import ErrorMessage from '@/components/ErrorMessage.vue'
import DayCard from '@/components/DayCard.vue';
import CityPicker from '@/components/CityPicker.vue';
import DayStatistics from '@/components/DayStatistics.vue'

  const props = defineProps({
    currentCity: {
      type: String,
      default: ''
    },
    dayStatictics: {
      type: Array,
      default: () => []
    },
    forecast: {
      type: Array,
      default: () => []
    },
    error: {
      type: Object,
      default: () => ({
        code: 0,
        message: ''
      })
    }
  })

  const emit = defineEmits(['selectDay'])

  const activeDay = ref(0)
  const selectDay = function (index) {
    activeDay.value = index
    emit('selectDay', index)
  }

  const errorMap = new Map([
    [1006, 'Указанный город не найден']
  ])
  const isErrorShown = ref(false)
  const errorMessage = computed(() => errorMap.get(props.error?.code) || props.error?.message )
</script>

<template>
  <div class="pane-right">
    <ErrorMessage v-if="errorMessage?.length" :error-message="errorMessage"/>
    <div v-else>
      <div class="current-city-name">{{  currentCity  }}</div>
      <DayStatistics v-for="item in dayStatictics" :key="item.label" v-bind="item"/>
    </div>
    <div v-if="forecast.length" class="forecast-wrapper">
      <DayCard
        v-for="(day, index) in forecast"
        :key="day.date_epoch"
        :weather-code="day.day.condition.code"
        :temperature="day.day.avgtemp_c"
        :date="new Date(day.date)"
        :is-active="activeDay === index"
        @click="selectDay(index)"
      />
    </div>
    <CityPicker @show-input="isErrorShown = false"/>
  </div>
</template>

<style scoped>
  .pane-right {
    background: var(--color-background-main);
    padding: 60px 50px;
    border-radius: 0 25px 25px 0;
  }

  .error-message {
    margin-top: -60px;
    margin-bottom: 60px;
  }

  .current-city-name {
    margin-bottom: 10px;
  }

  .forecast-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 1px;
    margin-top: 80px;
    margin-bottom: 80px;
  }

  .forecast-wrapper > * {
    flex: 1;
  }
</style>