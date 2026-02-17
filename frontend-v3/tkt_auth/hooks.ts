import {
  I_AuthData,
  I_AuthorizeRequestData,
  I_AuthorizeResponseData,
  I_AuthResources,
  T_AllowedAccessGroups,
} from '@/tkt_auth/types'

import { API_BASE } from '@/config'
import { axiosPost } from '@/shared/data/axios'
import { T_TokenRefresher } from '@/shared/data/types'
import { postService } from '@/shared/service'
import { successToast } from '@/shared/toasts'
import { useRouter } from 'next/navigation'

const useIsAuthorized = () => true


const useAuthData = (): I_AuthData => {
  return {
    accessToken: "",
    refreshToken: '',
  }
}

const useAuthResources = (): I_AuthResources => {
  const { accessToken, refreshToken } = useAuthData()
  const storeRefreshedToken = (accessToken: string) => { }

  const refresh: T_TokenRefresher = (postMethod) => async (data) => {
    return postMethod(`${API_BASE}/api/token/refresh/`, data).then((res) => {
      storeRefreshedToken(res.access)
      return res
    })
  }

  return { accessToken, refreshToken, refresh }
}

const useLogout = () => {
  const router = useRouter()

  return () => {
    successToast('Sesión cerrada correctamente. Hasta Pronto!')
    router.push('/login')
  }
}
const useStoreAuthData = () => {
  return (authData: I_AuthData) => {
    localStorage.setItem('authData', JSON.stringify(authData))
  }
}

const useAuthorize = () => {
  const path = `${API_BASE}/api/token/`
  return postService<I_AuthorizeRequestData, I_AuthorizeResponseData>(path, axiosPost)()
}

const useNavigateToLogin = () => {
  const router = useRouter()
  const navigateToLogin = () => {
    router.push('/login')
  }
  return { navigateToLogin }
}

export {
  useAuthData,
  useAuthorize,
  useAuthResources,
  useIsAuthorized,
  useLogout,
  useNavigateToLogin,
  useStoreAuthData,
}
