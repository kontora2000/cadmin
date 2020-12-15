<template>
  <div class="col">
    <NewsItem
    v-for="(post, index) in news" 
    :key="post.id" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

import NewsItem from '@/components/News/NewsItem.vue'

export default defineComponent({
  name: 'NewsList',
  components: {
    NewsItem
  },
  props: {
    News: Array as PropType<object[]>,
    default: () => { return {} }
  },
  setup () {
    return {

    }
  }
})
</script>
