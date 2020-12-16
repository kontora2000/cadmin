<template>
  <section v-if="!isLoading">
    <h1 class="is-size-2"> {{ post.title }} </h1>
    <NewsEditor :post="post" @submit.prevent="updatePost" />
  </section>
  <section v-else>
    <LoadingIndicator />
  </section>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, useContext, useFetch, onMounted, } from '@nuxtjs/composition-api'

import NewsEditor from '@/components/News/NewsEditor.vue'
import LoadingIndicator from '@/components/Generic/LoadingIndicator.vue'

import { Post, } from '@/modules/types'
import { usePost, } from '@/composition/post'

export default defineComponent({
  components: {
    LoadingIndicator,
  },
  transition: 'fade',
  setup () {
    const { params, } = useContext()
    const { local: post, fetchPost, updatePost, } = usePost({} as Post, params.value.slug)

    onMounted(async () => {
      await fetchPost()
    })

    return {
      post,
      fetchPost,
      updatePost,
    }
  },
})
</script>
