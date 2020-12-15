<template>
  <div>
    <div>
      <img :src="local.avatar">
      <ImageLoader />
    </div>
    <EditableField
      v-model="local.name"
      @blur="update"
    >
      {{ name }}
    </EditableField>
    <EditableField
      v-model="local.party"
      @blur="update"
    >
      {{ party }}
    </EditableField>
    <EditableField
      v-model="local.votes"
      @blur="update"
    >
      {{ votes }}
    </EditableField>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, } from '@nuxtjs/composition-api'

import EditableField from '@/components/Generic/EditableField.vue'
import ImageLoader from '@/components/Generic/ImageLoader.vue'

import { Candidate, } from '~/modules/types'

import { useAxios, } from '~/composition/axios'
import { useSnackbar, } from '~/composition/snackbar'

export default defineComponent({
  name: 'Candidate',
  components: {
    EditableField,
    ImageLoader,
  },
  props: {
    candidate: {
      type: Object as PropType<Candidate>,
      required: true,
    },
  },
  setup (props) {
    const local = ref<Candidate>(props.candidate)

    const { $axios, baseURL, } = useAxios()
    const { showNotification, } = useSnackbar()

    const update = async () => {
      try {
        const response = await $axios.put(baseURL + '/candidate/', local.value)
        if (response.ok) {
          showNotification('Данные обновлены', 'success')
        } else {
          showNotification('Ошибка при обновлении данных', 'danger')
        }
      } catch (e) {
        console.error(e)
      }
    }

    return {
      local,
      update,
    }
  },

})
</script>
