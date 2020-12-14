<template>
  <div>
    <TheSidebar />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import TheSidebar from '@/components/TheSidebar.vue'
import TheFooter from '@/components/TheFooter.vue'

export default defineComponent({
  name: 'default',
  components: {
    TheSidebar,
    TheFooter
  }
})
</script>
