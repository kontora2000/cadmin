import { computed, ref, } from '@nuxtjs/composition-api'

const isModalVisible = ref(false)
const buttons = ref<object[]>([])

export const useModal = () => {
  const showModal = (btns: object[]) => {
    buttons.value = btns
    isModalVisible.value = true
  }

  const hideModal = () => {
    isModalVisible.value = false
  }
  return {
    showModal,
    hideModal,
    isModalVisible: computed(() => isModalVisible),
    buttons,
  }
}
