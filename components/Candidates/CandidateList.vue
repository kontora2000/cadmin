<template>
  <div class="container">
    <Candidate v-for="candidate in candidates" :key="candidate.id" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, useFetch, } from '@nuxtjs/composition-api'
import axios from 'axios'

import { Candidate, } from '@/modules/types'

export default defineComponent({
  name: 'CandidateList',
  setup () {
    const candidates = ref<Candidate[]>([])
    const page = ref<number>(1)
    const { fetch, fetchState, } = useFetch(async () => {
      candidates.value = await axios.get('/candidates/list/' + page.value)
    })

    fetch()

    return {
      candidates,
      fetch,
      fetchState,
    }
  },
})
</script>
