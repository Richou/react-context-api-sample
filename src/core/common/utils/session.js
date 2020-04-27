const SESSION_IS_LOGGED_USER = 'session:logged-user'
const SESSION_USER_ID = 'session:user-id'

export const setUserId = (userId) => {
  localStorage.setItem(SESSION_USER_ID, userId)
}

export const getUserId = () => {
  return localStorage.getItem(SESSION_USER_ID)
}

export const setLoggedUser = () => {
  localStorage.setItem(SESSION_IS_LOGGED_USER, 'IsLogged')
}

export const isLoggedUser = () => {
  return localStorage.getItem(SESSION_IS_LOGGED_USER) === 'IsLogged'
}

export const clearSession = () => {
  localStorage.clear()
}
