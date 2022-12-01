import { IoLogOutOutline } from 'react-icons/io5'
import { FiUserCheck } from "react-icons/fi";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../../store/slices/user.slice'

export const UserConected = () => {
  const { email } = useSelector((state) => state.user.user)
  const dispatch = useDispatch()

  return ( 
    <li>
      <ul>
        <li>
          <Link onClick={() => dispatch(logout())} to='/'>
            <IoLogOutOutline size="30px" /> Log out
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            <FiUserCheck size="30px" />{email}
          </Link>
        </li>
      </ul>
    </li>
  );
}