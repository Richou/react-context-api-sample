const SESSION_TOKEN_KEY = 'session-token'
const SESSION_USER_ID = 'user-id'

export const token = () => {
  return localStorage.getItem(SESSION_TOKEN_KEY)
}

export const setToken = (token) => {
  localStorage.setItem(SESSION_TOKEN_KEY, token)
}

export const setUserId = (userId) => {
  localStorage.setItem(SESSION_USER_ID, userId)
}

export const userId = () => {
  return localStorage.getItem(SESSION_USER_ID)
}

export const clearSession = () => {
  localStorage.clear()
}
