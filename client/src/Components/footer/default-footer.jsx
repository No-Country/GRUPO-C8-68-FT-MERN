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
            <a
              href="https://www.facebook.com/profile.php?id=100088439772359"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF size="30px" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ncgames868"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter size="30px" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ncgames868/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram size="30px" />
            </a>
          </li>
        </ul>
        <Text>- NC Games 2022 -</Text>
      </section>
    </FooterContainer>
  )
}
