import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import Login from '../Components/login/Login'

const LoginPage = () => {

  const { handleSubmit, register, reset } = useForm()

  const submit = (data) => {
    const URL = 'https://nc8-68backend-production.up.railway.app/user/login'

    axios.post(URL, data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Login handleSubmit={handleSubmit} submit={submit} register={register} />
    </div>
  )
}

export default LoginPage