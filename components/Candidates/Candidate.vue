<template>
  <div>
    <div>
      <img :src="local.avatar">
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
import { Candidate, } from '~/modules/types'
import { useAxios, } from '~/composition/axios'
import { useSnackbar, } from '~/composition/snackbar'

export default defineComponent({
  name: 'Candidate',
  components: EditableField,
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
          showNotification('Данные обновлены', 'is-success')
        } else {
          showNotification('Ошибка при обновлении данных', 'is-danger')
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
