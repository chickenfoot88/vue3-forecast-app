<template>
  <button class="base-button">
    <div v-if="$slots.icon" class="base-button-icon">
      <slot name="icon"></slot>
    </div>
    <slot></slot>
    {{  props.text }}
  </button>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: ''
  }  
})

</script>

<style scoped>
  .base-button {
    border: none;
    border-radius: 10px;
    background: var(--gradiend);
    padding: 14px;
    font-family: var(--font);
    font-size: 20px;
    color: var(--primary);
    cursor: pointer;
    display: flex;
    gap: 9px;
    align-items: center;
    height: 53px;
    justify-content: center;
  }

  .base-button-icon {
    margin-right: 5px;
  }

  .base-button:hover {
    background: var(--gradiend-inverted);
  }
</style>