<template>
  <NewsEditor post="post" />
</template>
<script lang="ts">
import { defineComponent, PropType, ref, useContext, useFetch, } from '@nuxtjs/composition-api'

import NewsEditor from '@/components/News/NewsEditor.vue'

import { Post, } from '@/modules/types'
import { usePost, } from '@/composition/post'

export default defineComponent({
  transition: 'fade',
  setup () {
    const { params, } = useContext()

    const { local: post, fetchPost, } = usePost({} as Post, params.value.id)

    fetchPost()

    return {
      post,
      fetchPost,
    }
  },
})
</script>
