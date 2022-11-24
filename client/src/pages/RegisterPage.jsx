import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Title, LinkedText, TitlesContainer, Subtitle } from '../AppGlobalStyles.js'
import RegisterForm from '../Components/register/RegisterForm.jsx'

const RegisterPage = () => {

  const register = (e) => {
    const URL = 'https://nc8-68backend-production.up.railway.app/user/register'

    const data = {
      user: e.target.email.value,
      pass: e.target.password.value
    }

    console.log(data)

    axios.post(URL, data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return (
    <section>
      <TitlesContainer>
        <Title className="color-gray">¡Welcome!</Title>
        <div>
          <Subtitle className="color-gray">Create an account</Subtitle>
          <LinkedText className="color-gray">Already have an account? <Link to={'/login'}>Log in</Link></LinkedText>
      </div>
      </TitlesContainer>
      <RegisterForm register={register} />
    </section>
  )
}

export default RegisterPage