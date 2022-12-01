import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import Login from '../Components/login/Login'
import { useDispatch } from 'react-redux'
import { login } from '../store/slices/user.slice'
// import { redirect } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm()
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const submit = (data) => {
    const URL = 'https://nc8-68backend-production.up.railway.app/user/login'
    const email = data.user
    setError(false)
    axios.post(URL, data)
      .then(res => {
        if (res.data.token){
          dispatch(login({
            email,
            token: res.data.token
          }))
          navigate('/');
        }
      }
        // console.log(res.data)
        )
      .catch(err => setError(err?.response?.data?.message || 'There was an error when trying to login'))
  }

  return (
    <div>
      <Login handleSubmit={handleSubmit} submit={submit} register={register} error={error}/>
    </div>
  )
}

export default LoginPage