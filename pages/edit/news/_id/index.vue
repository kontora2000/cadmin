<template lang="pug">
<NewsEditor post="post"/>
</template>
<script lang="ts">
import { defineComponent, ref, useFetch, } from '@nuxtjs/composition-api'

import NewsEditor from '@/components/News/NewsEditor'

im

export default defineComponent({
  name: 'Index',

  setup () {
    cont post = ref<Post>()
  },
})
</script>
