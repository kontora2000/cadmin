<template>
  <button class="button" :class="{ type, 'is-loading': loading }">
    <slot />
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ButtonPrimary',
  props: {
    type: {
      type: String as PropType<string>,
      default: 'is-primary'
    },
    loading: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  setup () {

  }
})
</script>
