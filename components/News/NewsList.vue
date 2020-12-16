<template>
  <div class="col">
    <NewsItem
      v-for="post in news"
      :key="post.id"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, useFetch, } from '@nuxtjs/composition-api'

import NewsItem from '@/components/News/NewsItem.vue'
import { Post, } from '@/modules/types'
import { useAxios, } from '@/composition/axios'

export default defineComponent({
  name: 'NewsList',
  components: {
    NewsItem,
  },
  setup () {
    const news = ref<Post[]>([])
    const page = ref<number>(1)

    const { $axios, } = useAxios()

    const { fetch, fetchState, } = useFetch(async () => {
      news.value = await $axios.get('/news/list/' + page.value)
    })

    fetch()
    return {
      news,
    }
  },
})
</script>
