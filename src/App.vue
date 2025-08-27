<script setup>
import BaseButton from './components/BaseButton.vue';
</script>

<template>
  <main class="main">
    <BaseButton>
      Сохранить
    </BaseButton>
  </main>
</template>

<style scoped>
  .main {
    background: var(--color-background-main);
    padding: 60px 50px;
    border-radius: 25px;
  }

</style>
