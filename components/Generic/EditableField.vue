<template>
  <span class="contenteditable" @input="$emit('update:modelValue', $event.target.value)">
    {{ modelValue }}
  </span>
</template>
<script lang="ts">
import { defineComponent, PropType, } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'EditableField',
  props: {
    modelValue: String as PropType<string>,
  },
  emits: ['update:modelValue'],
  setup () {

  },
})
</script>
