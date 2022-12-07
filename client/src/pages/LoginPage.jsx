import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import Login from '../Components/login/Login'
import { useDispatch } from 'react-redux'
import { login } from '../store/slices/user.slice'
import { setCartGlobal } from '../store/slices/cart.slice'

const getCart = (token) => {
  return axios.post('https://grupo-c8-68-ft-mern-production.up.railway.app/cart/get', {
    token
  });
}

const LoginPage = () => {
  const navigate = useNavigate()
  const { handleSubmit, register } = useForm()
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const submit = (data) => {
    const URL =
      'https://grupo-c8-68-ft-mern-production.up.railway.app/user/login'
    const email = data.user
    setError(false)
    axios
      .post(URL, data)
      .then((res) => {
        if (res.data.token) {
          dispatch(
            login({
              email,
              token: res.data.token,
            })
          )
          getCart(res.data.token).then(({data}) => {
            dispatch(setCartGlobal(data[0].cart))
            navigate('/')
          })
        }
      })
      .catch((err) =>
        setError(
          err?.response?.data?.message ||
            'There was an error when trying to login'
        )
      )
  }

  return (
    <div>
      <Login
        handleSubmit={handleSubmit}
        submit={submit}
        register={register}
        error={error}
      />
    </div>
  )
}

export default LoginPage
