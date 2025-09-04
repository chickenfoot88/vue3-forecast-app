<script setup>
  const props = defineProps({
    errorMessage: {
      type: String,
      default: '',
    },
  })

</script>

<template>
  <div class="error-message">
    {{ props.errorMessage }}
  </div>
</template>


<style scoped>
  .error-message {
    font-size: 18px;
    padding: 15px;
    text-align: center;
    background: var(--color-background-card);
    border-radius: 0px 0px 25px 25px;
  }
</style>