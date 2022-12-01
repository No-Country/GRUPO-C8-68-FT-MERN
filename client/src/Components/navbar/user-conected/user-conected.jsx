import { UserConectedContainer } from "./styles";
import { IoLogOutOutline } from 'react-icons/io5'
import { FiUserCheck } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../../store/slices/user.slice'

export const UserConected = () => {
  const { email } = useSelector((state) => state.user.user)
  const dispatch = useDispatch()

  const navigate = useNavigate();

    const handleLogout = () => {
      dispatch(logout());
      navigate('/');
    }

    return ( 
    <UserConectedContainer>
        <li>
                <span onClick={handleLogout}>
                  <IoLogOutOutline size="30px" />Log out
                </span>
        </li>
        <li>
                <Link to={'/'}>
                <FiUserCheck size="30px" />{email}
                </Link>
        </li>
    </UserConectedContainer>
    );
}