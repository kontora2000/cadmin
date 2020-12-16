<template>
  <div>
    <div class="main-content columns is-fullheight">
      <TheSidebar />
      <Nuxt class="section column is-6"/>
    </div>
    <Modal />
    <Snackbar />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent, } from '@nuxtjs/composition-api'

import TheSidebar from '@/components/TheSidebar.vue'
import TheFooter from '@/components/TheFooter.vue'
import Snackbar from '@/components/Generic/Snackbar.vue'
import Modal from '~/components/Generic/Modal.vue'

export default defineComponent({
  name: 'Default',
  components: {
    TheSidebar,
    TheFooter,
    Snackbar,
    Modal,
  },
})
</script>
