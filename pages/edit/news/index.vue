<template>
  <div>
    <h1 class="is-size-1 has-text-black">
      Новости  <nuxt-link to="/edit/news/create" class="has-text-dark is-size-6 container">
        <span class="container is-align-self-center ">
          <b-icon
            icon="plus"
            size="is-small"
          /> Добавить </span>
      </nuxt-link>
    </h1>
    <section v-if="!isLoading">
      <template v-if="posts.length > 0">
        <NewsList :posts="posts" />
        <button-primary v-if="isNeedToLoad" :loading="isUpLoading">
          Загрузить еще
        </button-primary>
      </template>
      <div v-else>
        Нет новостей
      </div>
    </section>
    <LoadingIndicator v-else />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, } from '@nuxtjs/composition-api'

import { Post, } from '@/modules/types'

import { useAxios, } from '@/composition/axios'

import NewsList from '@/components/News/NewsList.vue'
import LoadingIndicator from '~/components/Generic/LoadingIndicator.vue'

export default defineComponent({
  name: 'Index',
  components: {
    LoadingIndicator,
  },
  transition: 'fade',

  setup () {
    const { $axios, } = useAxios()

    const isLoading = ref(true)
    const isNeedToLoad = ref(false)
    const isUpLoading = ref(false)

    const page = ref(1)
    const posts = ref<Post[]>([])
    const fetchNews = async () => {
      try {
        if (page.value > 1) { isUpLoading.value = true }
        const response = await $axios.get('post/list?page=' + page.value)
        if (response.status === 200) {
          posts.value = (page.value === 1) ? response.data.data : [...posts.value, ...response.data.data]
          page.value = page.value === response.last_page ? page.value : page.value + 1
          isNeedToLoad.value = page.value === response.last_page
        }
        if (page.value > 1) { isUpLoading.value = false }
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
      posts,
      isLoading,
      isNeedToLoad,
      isUpLoading,
    }
  },
})
</script>
