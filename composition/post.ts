import { ref, useFetch, } from '@nuxtjs/composition-api'
import axios from 'axios'
import { useSnackbar, } from '@/composition/snackbar'
import { Post, } from '~/modules/types'

export const usePost = (post: Post, id: any) => {
  const baseURL = process.env.VUE_APP_API_URL

  const { showNotification, } = useSnackbar()

  const local = ref<Post>(post)

  const { fetch: fetchPost, } = useFetch(async () => {
    const response = await axios.get(baseURL + '/news/' + id)
    local.value = response.data
  })

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
    fetchPost,
  }
}
