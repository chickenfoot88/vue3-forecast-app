<script setup>
import { ref } from 'vue'
import IconLocation from '@/icons/IconLocation.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'

const currentCity = ref('')
const emit = defineEmits({
  pickCity(payload) {
    return payload ? true : false
  }
})

function pickCity() {
  emit('pickCity', currentCity.value)
  hideInput()
}

const ifInputShown = ref(false)
function showInput() { ifInputShown.value = true }
function hideInput() { ifInputShown.value = false }

</script>
<template>
  <div class="city-picker">
    <Transition name="fade" mode="out-in">
      <div v-if="ifInputShown" key="1"  class="city-picker-input">
        {{ currentCity  }}
        <BaseInput v-model="currentCity"/>
        <BaseButton @click="pickCity">
          Сохранить
        </BaseButton>    
      </div>
      <div v-else key="2">
        <BaseButton class="change-city-button" @click="showInput">
          <template #icon>
            <IconLocation/>  
          </template>
          Изменить город
        </BaseButton>
      </div>
    </Transition>
  </div>
</template>
<style scoped>
  .city-picker {
    width: 420px;
  }

  .change-city-button {
    width: 100%;
  }
  .city-picker-input {
    display: flex;
    width: 420px;
  }

  .city-picker-input input {
    margin-right: 20px;
    width: 260px;
}
</style>