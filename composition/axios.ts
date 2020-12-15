import { useContext, } from '@nuxtjs/composition-api'
import { NuxtAxiosInstance, } from '@nuxtjs/axios'

export function useAxios (): any {
  const { $axios, } = useContext()

  if (!$axios) {
    // throw error, no store provided
    throw new Error('nuxt axios is not defined!')
  }

  const baseURL = process.env.VUE_APP_API_URL

  return {
    $axios,
    baseURL,
  }
}
