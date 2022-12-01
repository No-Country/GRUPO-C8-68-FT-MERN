import { FooterContainer, Text } from '../../AppGlobalStyles'

import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

export const DefaultFooter = () => {
  return (
    <FooterContainer>
      <section>
        <ul>
          <li>
            <a href="#!">
              <FaFacebookF size="30px" />
            </a>
          </li>
          <li>
            <a href="#!">
              <BsTwitter size="30px" />
            </a>
          </li>
          <li>
            <a href="#!">
              <BsInstagram size="30px" />
            </a>
          </li>
        </ul>
        <Text>- NC Games 2022 -</Text>
      </section>
    </FooterContainer>
  )
}
