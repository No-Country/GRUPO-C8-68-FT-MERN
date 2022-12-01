import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate} from 'react-router-dom'

import Login from '../Components/login/Login'
import useLocalStorage from '../hooks/useLocalStorage'
// import { redirect } from 'react-router-dom'

const LoginPage = () => {
  const [, setUser] = useLocalStorage("user", {});
const navigate = useNavigate();
  const { handleSubmit, register} = useForm()

  const submit = (data) => {
    const URL = 'https://nc8-68backend-production.up.railway.app/user/login'
    const user = data.user
    axios.post(URL, data)
      .then(res => {
        if (res.data.token){
          setUser({
            user,
            token: res.data.token
          });
          navigate('/')
        }
      }
        // console.log(res.data)
        )
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Login handleSubmit={handleSubmit} submit={submit} register={register} />
    </div>
  )
}

export default LoginPage