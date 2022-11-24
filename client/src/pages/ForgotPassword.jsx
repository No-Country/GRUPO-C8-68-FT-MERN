import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Title, Text, LinkedText, Form, MediumButton, MediumSeparator, TitlesContainer } from '../AppGlobalStyles.js'

const ForgotPassword = () => {
  const sendRecuperationEmail = (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const URL = `https://nc8-68backend-production.up.railway.app/recuperationmail/${email}`

    axios.get(URL)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return (
    <section>
      <TitlesContainer>
        <Title className='color-gray'>Forgot Password?</Title>
      </TitlesContainer>
      <Form>
        <Text>We’ll send you an email with link that allows you to set new password</Text>
        <MediumSeparator></MediumSeparator>
        <form onSubmit={sendRecuperationEmail}>
          <label htmlFor="email">Email</label>
          <input type="email" />
          <LinkedText>Go back to <Link to='/login'>log in</Link></LinkedText>
          <MediumSeparator></MediumSeparator>
          <MediumButton className='color-skyblue font-bold'>CONFIRM</MediumButton>
        </form>
      </Form>
    </section>
  )
}

export default ForgotPassword