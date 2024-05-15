<template>
  <Head>
    <Meta name="twitter:image" content="https://herokustatic.s3.us-west-2.amazonaws.com/headshot.jpg"></Meta>
  </Head>
  <NuxtLayout>
    <v-app id="inspire" class="w-full">
      <Navbar />
      <v-main>
        <NuxtPage />
      </v-main>
    </v-app>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'OKres Consulting LLC - Paige Voegeli',
  ogTitle: 'OKres Consulting LLC - Paige Voegeli',
  description: 'Contract petroleum engineering firm with expertise in reserve evaluations.',
  ogDescription: 'Contract petroleum engineering firm with expertise in reserve evaluations.',
  ogImage: 'https://herokustatic.s3.us-west-2.amazonaws.com/headshot.jpg',
  twitterCard: 'summary_large_image',
})
import { ref } from 'vue'
const route = useRoute()
const routeName = ref(route.name)
</script>

<style>
</style>