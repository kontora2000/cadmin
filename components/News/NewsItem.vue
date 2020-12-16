<template>
  <div>
    <NuxtLink :to="'/edit/news/' + localPost.slug">
      <span>{{ localPost.date }} </span>
      <span>{{ localPost.title }}</span>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, } from '@nuxtjs/composition-api'
import { usePost, } from '~/composition/post'
import { Post, } from '~/modules/types'

export default defineComponent({
  name: 'NewsItem',
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
  setup (props) {
    const { local: localPost, } = usePost(props.post, props.post.slug)

    return {
      localPost,
    }
  },
})
</script>
