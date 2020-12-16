<template>
  <div v-if="posts" class="col">
    <NewsItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, useFetch, } from '@nuxtjs/composition-api'

import NewsItem from '@/components/News/NewsItem.vue'
import { Post, } from '@/modules/types'
import { useAxios, } from '@/composition/axios'
import ButtonPrimary from '@/components/Generic/ButtonPrimary.vue'

export default defineComponent({
  name: 'NewsList',
  components: {
    NewsItem,
  },
  props: {
    posts: {
      type: Array as PropType<Post[]>,
      default: [] as Post[],
    },
  },
})
</script>
