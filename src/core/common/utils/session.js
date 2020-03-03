const SESSION_TOKEN_KEY = 'session-token'

export const token = () => {
  return localStorage.getItem(SESSION_TOKEN_KEY)
}

export const setToken = token => {
  localStorage.setItem(SESSION_TOKEN_KEY, token)
}

export const clearSession = () => {
  localStorage.clear()
}
