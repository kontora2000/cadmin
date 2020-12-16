<template>
  <form @submit.prevent="$emit('submit', $event)" class="mt-6">
    <b-field label="Заголовок">
      <b-input v-model="local.title" :value="local.title" />
    </b-field>
    <b-field label="Подзаголовок">
      <b-input v-model="local.subtitle" :value="local.subtitle" maxlength="200" type="textarea" />
    </b-field>
    <b-field label="Предконтент">
      <b-input v-model="local.subcontent" :value="local.subcontent" maxlength="200" type="textarea" />
    </b-field>
    <client-only>
      <b-field label="Содержание">
        <editor v-model="local.content" :init="initTiny" />
      </b-field>
    </client-only>
    <b-button
      v-if="isCreate"
      :loading="isSaving"
      type="is-primary"
      icon-left="check"
    >
      Создать новость
    </b-button>
    <div v-else>
      <b-button
        :loading="isSaving"
        type="is-primary"
        icon-left="check"
      >
        Сохранить новость
      </b-button>
      <b-button
        type="is-danger"
        icon-left="delete"
      >
        Удалить новость
      </b-button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, } from '@nuxtjs/composition-api'
import Editor from '@tinymce/tinymce-vue'

import { useTiny, } from '@/composition/tinymce.ts'
import { useModal, } from '@/composition/modal'
import { usePost, } from '@/composition/post'

import { Post, } from '@/modules/types'

export default defineComponent({
  name: 'NewsEdit',
  components: { Editor, },
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
    isCreate: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup (props) {
    const { initTiny, } = useTiny()

    const { showModal, buttons, hideModal, } = useModal()

    const { local, updatePost, deletePost, isSaving, } = usePost(props.post, process.env.VUE_APP_API_URL || '')

    buttons.value = [
      {
        text: 'Да',
        action: deletePost,
        type: 'is-primary',
      },
      {
        text: 'Нет',
        action: hideModal,
        type: '',
      }
    ]

    return {
      buttons,
      showModal,
      initTiny,
      local,
      isSaving,
    }
  },
})
</script>
