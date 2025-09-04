<script setup>
const { label, value } = defineProps({
  label: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="day-statistics">
    <div class="day-statictics-name">{{ label }}</div>
    <div class="day-statictics-value">{{  value }}</div>
  </div>
</template>


<style scoped>
  .day-statistics {
    display: flex;
    font-size: 28px;
    justify-content: space-between;
    gap: 16px;
  }

  .day-statictics-name {
    font-weight: 700;
    text-transform: uppercase;
  }

  .day-statictics-value {
    font-weight: 500;
  }
</style>