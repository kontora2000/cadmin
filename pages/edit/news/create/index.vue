<template>
  <NewsEditor
    :post="post"
    is-create
    @submit.prevent="createPost"
  />
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

    const { local: post, createPost, } = usePost({
      id: null,
      content: '',
      subcontent: '',
      title: '',
      excerpt: '',
      subtitle: '',
      slug: '',
      imageID: null,
      galleryID: null,
      locationID: null,
    } as Post, '')

    return {
      post,
      createPost,
    }
  },
})
</script>
