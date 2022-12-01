import { Header, HeaderLinks, HeaderLogo, Nav } from './styles'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { BsCart } from 'react-icons/bs'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoGameControllerOutline, IoLogInOutline } from 'react-icons/io5'
import logo from '../../assets/LogoNCGames.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { UserConected } from './user-conected/user-conected';
import { useSelector } from 'react-redux'

export const DefaultNavbar = () => {
  const [menuStatus, setMenuStatus] = useState('hidden');
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

  const handleMenuStatus = () => {
    if (menuStatus === 'hidden') {
      setMenuStatus('visible')
    } else {
      setMenuStatus('hidden')
    } 
  }

  const navigate = useNavigate()

  
  return (
    <Header>
      <Nav>
        <HeaderLogo>
          <img
            onClick={() => navigate('/')}
            src={logo}
            className="logo"
            alt="logo"
          />
        </HeaderLogo>
        
        <HeaderLinks>
          <li onClick={handleMenuStatus} className="hamburger__btn">
            <HiMenuAlt3 size="60px" />
          </li>
          <li className={`hamburger__menu ${menuStatus}`}>
            <ul className='hamburger__menu-links'>
              <li>
              <Link onClick={handleMenuStatus} to={'/games'}>
                  <IoGameControllerOutline size="30px" />Games
              </Link>
              </li>
              <li>
                <a onClick={handleMenuStatus} href="/">
                  <BsCart size="30px" />Cart
                </a>
              </li>
              {isLoggedIn && <UserConected/>}
              {!isLoggedIn &&
              <>
                <li>
                  <Link onClick={handleMenuStatus} to={'/login'}>
                    <IoLogInOutline size="30px" />Log in
                  </Link>
                </li>
                <li>
                  <Link onClick={handleMenuStatus} to={'/register'}>
                    <AiOutlineUserAdd size="30px" />Register
                  </Link>
                </li>
              </>}
            </ul>
          </li>
        </HeaderLinks>
      </Nav>
    </Header>
  )
}
