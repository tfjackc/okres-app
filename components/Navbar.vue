<template>
  <div class="drop-shadow-md flex flex-col sm:flex-row items-center justify-between py-5 bg-sky-800">
    <div class="flex flex-col sm:flex-row">
      <div class="flex flex-col sm:flex-row">
        <NuxtImg src="PaigeVoegeli_WhiteText.png" sizes="100vw sm:200px"/>
        <div class="flex flex-col justify-center">
          <h1 class="font-abel ml-5 sm:ml-0 text-3xl sm:text-6xl font-semibold text-white flex items-center">OKres Consulting LLC</h1>
          <div class="text-xl flex ml-5 text-white sm:pl-20 sm:py-5 py-0 italic justify-center sm:justify-left">
            Contract petroleum engineering firm with expertise in reserve evaluations.
          </div>
        </div>
      </div>
    </div>
    <div class="mr-5">
      <NuxtLink :to="`/${routeButton}`" class="text-amber-50 flex items-center mr-5 no-underline hover:underline" @click="changeText">
        <Icon :name="icon" size="36"></Icon>
        <span class="ml-2">{{buttonText}}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from "pinia";
import { useTheme } from 'vuetify';
import {useDataStore} from "~/store/data_store";
const theme = useTheme()
const route = useRoute()
const data_store = useDataStore()
const { navlink } = storeToRefs(data_store);
const routeButton = ref('')
const buttonText = ref('')
const icon = ref('')

onMounted(() => {
  if (route.name === 'index') {
    routeButton.value = 'contact'
    buttonText.value = 'CONTACT'
    icon.value = 'flat-color-icons:address-book'
  }
  if (route.name === 'contact') {
    routeButton.value = ''
    buttonText.value = 'HOME'
    icon.value = 'flat-color-icons:home'
  }
})

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
function changeText ()  {
  if (route.name === 'contact') {
    console.log(route.name)
    routeButton.value = navlink.value[1]['title']
    buttonText.value = navlink.value[1]['title'].toUpperCase()
    icon.value = 'flat-color-icons:address-book'
  }
  else {
    console.log(route.name)
    routeButton.value = ''
    buttonText.value = 'HOME'
    icon.value = 'flat-color-icons:home'
  }
}
</script>

<style scoped>

</style>