<script setup lang="ts">
// ts-plugin-ignore-next-line
import IconCloud from '@/icons/IconCloud.vue';
import IconRain from '@/icons/IconRain.vue';
import IconSun from '@/icons/IconSun.vue';

const { weatherCode, temperature, date } = defineProps({
  weatherCode: {
    type: Number,
    required: true
  },
  temperature: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <button :class="['day-card', { 'day-card-active': isActive }]">
    <IconSun v-if="weatherCode <= 1003" :color="isActive ? 'var(--color-primary-inverted)' : 'var(--color-primary)'"/>
    <IconCloud v-if="weatherCode > 1003 && weatherCode < 1009"/>
    <IconRain v-if="weatherCode >= 1009"/>
    <div class="day-card-weekday">
      {{ date.toLocaleDateString('ru-Ru', { weekday: 'short' }) }}
    </div>
    <div class="day-card-temperature">
      {{  temperature }}&deg;C
    </div>
  </button>

</template>
<style scoped>
  .day-card {
    padding: 24px;
    background-color: var(--color-background-card);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    color: var(--color-primary);
    border-radius: 10px;
    box-shadow: 1px 2px 4px 0px var(--color-background-main);
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  .day-card svg {
    fill: var(--color-primary);
  }

  .day-card-active {
    color: var(--color-primary-inverted);
    background-color: var(--color-primary);
  }
  
  .day-card-active svg {
    fill: var(--color-primary-inverted);
  }

  .day-card:not(.day-card-active):hover {
    background-color: #3A434F;
  }

  .day-card-weekday {
    font-size: 20px;
  }

  .day-card-temperature {
    font-size: 20px;
    font-weight: 700;
  }
</style>