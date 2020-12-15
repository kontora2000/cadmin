<template lang="pug">
 <form>
  <input type="text" v-model="local.title" />
  <input type="text" v-model="local.subtitle" />
  <input type="text" class="is-disabled" v-model="local.slug" />
  <input type="text" v-model="local.subcontent" />
  <client-only>
    <editor v-model="post.content" />
  </client-only>
  <TagsEditor />
 </form>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, } from '@nuxtjs/composition-api'
import Editor from '@tinymce/tinymce-vue'

import { useTiny, } from '@/composition/tinymce.ts'
import { useModal, } from '@/composition/modal'
import { Post, } from '~/modules/types'

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

    const { local, updatePost, deletePost } = ref<Post>(props.post)

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
