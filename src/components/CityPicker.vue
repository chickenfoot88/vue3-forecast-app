<script setup>
import { inject, ref } from 'vue'
import IconLocation from '@/icons/IconLocation.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'
import cityProvide from '@/constants.js'

const currentCity = inject(cityProvide)
const inputValue = ref(currentCity.value)

function pickCity() {
  currentCity.value = inputValue.value
  resetCurrentCity()
  hideInput()
}

function resetCurrentCity() {
  inputValue.value = ''
}

const ifInputShown = ref(false)
function changeCity() {
  showInput()
  resetCurrentCity()  
}

function showInput() { ifInputShown.value = true }
function hideInput() { ifInputShown.value = false }

</script>
<template>
  <div class="city-picker">
    <Transition name="fade" mode="out-in">
      <div v-if="ifInputShown" key="1"  class="city-picker-input">
        <BaseInput v-model="inputValue" v-focus @keyup.enter="pickCity"/>
        <BaseButton @click="pickCity">
          Сохранить
        </BaseButton>    
      </div>
      <div v-else key="2">
        <BaseButton class="change-city-button" @click="changeCity">
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