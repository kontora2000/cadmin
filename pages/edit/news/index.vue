<template>
  <main class="container">
    <section v-if="!isLoading">
      <NewsList v-if="news.length > 0" />
      <div v-else>
        Нет новостей
      </div>
    </section>
    <div class="loader-wrapper">
      <div class="loader is-loading" />
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'

import { useAxios } from '@/composition/axios'

export default defineComponent({
  name: 'index',
  transition: 'fade',

  setup () {
    const { $axios } = useAxios()

    const isLoading = ref(true)

    const page = ref(1)
    const news = ref([])
    const fetchNews = async () => {
      try {
        const response = await $axios.get('/news/?page=1')
        if (response.status === 200) {
          news.value = response.data
        }
      } catch (e) {
        console.error(e)
      }
    }

    onMounted(async () => {
      await fetchNews()
      isLoading.value = false
    })

    return {
      page,
      news
    }
  }
})
</script>
