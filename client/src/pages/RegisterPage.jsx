import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Title,
  LinkedText,
  TitlesContainer,
  Subtitle,
} from '../AppGlobalStyles.js'
import RegisterForm from '../Components/register/RegisterForm.jsx'

const RegisterPage = () => {
  const [loginSuccess, setLoginSuccess] = useState(false)
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const register = (e) => {
    const URL =
      'https://grupo-c8-68-ft-mern-production.up.railway.app/user/register'

    const data = {
      user: e.target.email.value,
      pass: e.target.password.value,
    }
    axios.post(URL, data)
      .then(() => {
        setLoginSuccess(true)
        navigate('/login')
      })
      .catch((err) =>
        setError(
          err?.response?.data?.message ||
            'There was an error when trying to register'
        )
      )

  }

  return (
    <section>
      <TitlesContainer>
        <Title className="color-gray">¡Welcome!</Title>
        <div>
          <Subtitle className="color-gray">Create an account</Subtitle>
          <LinkedText className="color-gray">
            Already have an account? <Link to={'/login'}>Log in</Link>
          </LinkedText>
        </div>
      </TitlesContainer>
      <RegisterForm
        register={register}
        loginSuccess={loginSuccess}
        error={error}
      />
    </section>
  )
}

export default RegisterPage
