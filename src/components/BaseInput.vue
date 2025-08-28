<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: 'Выберите город'
  }
});

const emit = defineEmits(['update:modelValue']);

function onInput(event) {
  emit('update:modelValue', event.target.value);
}
</script>

<template>
  <input
    class="base-input"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="onInput"
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