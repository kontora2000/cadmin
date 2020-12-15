<template>
  <LoginForm />
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import LoginForm from '@/components/Forms/LoginForm.vue'

export default defineComponent({
  name: 'index',
  layout: 'login',
  components: {
    LoginForm
  },
  setup () {

  }
})
</script>
c
