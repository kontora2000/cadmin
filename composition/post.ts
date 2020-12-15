import { ref, } from '@nuxtjs/composition-api'
import axios from 'axios'
import { useSnackbar, } from '@/composition/snackbar'
import { Post, } from '~/modules/types'

export const usePost = (post: Post, baseURL: string) => {
  const { showNotification, } = useSnackbar()

  const local = ref<Post>(post)

  const updatePost = async () => {
    try {
      const response = await axios.put(baseURL + '/news/', local.value)
      if (response.status === 200) {
        showNotification('Данные обновлены', 'success')
      } else {
        showNotification('Ошибка при обновлении данных', 'danger')
      }
    } catch (e) {
      console.error(e)
    }
  }

  const deletePost = async () => {
    try {
      const response = await axios.delete(baseURL + '/news/', {
        data: local.value,
      })
      if (response.status === 200) {
        showNotification('Новость успешно удалена', 'success')
      } else {
        showNotification('Ошибка при обновлении данных', 'danger')
      }
    } catch (e) {
      console.error(e)
    }
  }

  return {
    local,
    updatePost,
    deletePost,
  }
}
