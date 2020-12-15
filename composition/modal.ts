import { computed, ref, } from '@nuxtjs/composition-api'

const isModalVisible = ref(false)
const buttons = ref<object[]>([])

export const useModal = () => {
  const showModal = (btns: object[]) => {
    buttons.value = btns
    isModalVisible.value = true
  }

  const hidModal = () => {
    isModalVisible.value = false
  }
  return {
    showModal,
    isModalVisible: computed(() => isModalVisible),
  }
}
