import { IoLogOutOutline } from 'react-icons/io5'
import { FiUserCheck } from "react-icons/fi";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../../store/slices/user.slice'
import { useEffect, useState } from 'react';

export const UserConected = () => {
  const { email } = useSelector((state) => state.user.user)
  const dispatch = useDispatch()

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 840px)").matches
  )
  useEffect(() => {
    window
    .matchMedia("(min-width: 840px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return ( 
    <li>
      <ul>
        <li>
          <Link onClick={() => dispatch(logout())} to='/'>
            <IoLogOutOutline size="30px" /> Log out
          </Link>
        </li>
        <li>
          <Link style={
            (matches)
            ? {
              width: '240px',
              border: '2px solid black',
              borderRadius: '15px',
              padding: '10px'
              }
              : null
            } to={'/'}>
            <FiUserCheck size="30px" /><p style={
              (matches)
              ? {
              maxWidth: '175px',
              overflow: 'hidden',
              whiteSpace: 'hidden',
              textOverflow: 'ellipsis'
              }
              : null
            } >{email}</p>
          </Link>
        </li>
      </ul>
    </li>
  );
}