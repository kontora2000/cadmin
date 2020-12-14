<template>
  <div class="content">
    <div v-for="news as Iem" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'NewsList',
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
