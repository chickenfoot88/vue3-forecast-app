<script setup>
const data = defineModel({ type: String })
defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: 'Выберите город'
  }
});

</script>

<template>
  <input
    v-model="data"
    class="base-input"
    :type="type"
    :placeholder="placeholder"
  />
</template>

<style scoped>
.base-input {
  color: var(--color-primary);
  border-radius: 10px;
  background: var(--color-background-card);
  box-shadow: 1px 2px 4px 0px var(--color-background-main);
  outline: none;
  padding: 15px 20px;
  font-size: 16px;
  border: none;
  min-height: 53px;
}

.base-input::placeholder {
  color: var(--color-text-placeholder);
}
</style>