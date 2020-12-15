<template>
  <div>
    <TheSidebar />
    <Modal />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent, } from '@nuxtjs/composition-api'

import TheSidebar from '@/components/TheSidebar.vue'
import TheFooter from '@/components/TheFooter.vue'
import Modal from '~/components/Generic/Modal.vue'

export default defineComponent({
  name: 'Default',
  components: {
    TheSidebar,
    TheFooter,
    Modal,
  },
})
</script>
