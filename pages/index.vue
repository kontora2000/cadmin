<template>
  <main>
    <LoginForm />
  </main>
</template>
<script lang="ts">
import { defineComponent, } from '@nuxtjs/composition-api'

import LoginForm from '@/components/Forms/LoginForm.vue'

export default defineComponent({
  name: 'Index',
  components: {
    LoginForm,
  },
  layout: 'login',
  setup () {

  },
})
</script>
