<template>
  <form>
    <input v-model="local.title" type="text">
    <input v-model="local.subtitle" type="text">
    <input v-model="local.slug" type="text" class="is-disabled">
    <input v-model="local.subcontent" type="text">
    <client-only>
      <editor v-model="local.content" />
    </client-only>
  </form>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, } from '@nuxtjs/composition-api'
import Editor from '@tinymce/tinymce-vue'

import { useTiny, } from '@/composition/tinymce.ts'
import { useModal, } from '@/composition/modal'
import { usePost, } from '@/composition/post'

import { Post, } from '@/modules/types'

export default defineComponent({
  name: 'NewsEdit',
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
  setup (props) {
    const { initTiny, } = useTiny()

    const { showModal, buttons, hideModal, } = useModal()

    const { local, updatePost, deletePost, } = usePost(props.post, process.env.VUE_APP_API_URL || '')

    buttons.value = [
      {
        text: 'ok',
        action: hideModal,
        type: 'is-primary',
      }
    ]

    return {
      buttons,
      showModal,
      initTiny,
      local,
    }
  },
})
</script>
