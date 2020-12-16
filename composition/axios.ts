import { useContext, } from '@nuxtjs/composition-api'
import { NuxtAxiosInstance, } from '@nuxtjs/axios'

export function useAxios (): any {
  const { $axios, } = useContext()

  if (!$axios) {
    // throw error, no store provided
    throw new Error('nuxt axios is not defined!')
  }

  const baseURL = 'http://127.0.0.1:8000/api'

  return {
    $axios,
    baseURL,
  }
}
