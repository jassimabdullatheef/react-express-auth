import axios from 'axios'
import { AUTH_USER, AUTH_ERROR } from './types'

export const signup = (formProps, callback) => async dispatch => {
  try {
    const url = 'http://localhost:3090/signup/'
    const response = await axios.post(url, formProps)

    dispatch({ type: AUTH_USER, payload: response.data })
    localStorage.setItem('token', response.data.token)

    callback && callback()
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' })
  }
}

export const signin = (formProps, callback) => async dispatch => {
  try {
    const url = 'http://localhost:3090/signin/'
    const response = await axios.post(url, formProps)

    dispatch({ type: AUTH_USER, payload: response.data })
    localStorage.setItem('token', response.data.token)

    callback && callback()
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login' })
  }
}

export const signout = () => {
  localStorage.clear('token')

  return {
    type: AUTH_USER,
    payload: ''
  }
}
