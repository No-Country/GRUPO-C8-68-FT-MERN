import { UserConectedContainer } from "./styles";
import { IoLogOutOutline } from 'react-icons/io5'
import { FiUserCheck } from "react-icons/fi";
import { Link, useNavigate} from 'react-router-dom'
import useLocalStorage from "../../../hooks/useLocalStorage";

export const UserConected = () => {
    const [user, setUser] = useLocalStorage("user", {})
    const navigate = useNavigate();

    const handleLogout = () => {
      setUser({});
      navigate('/');
    }

    return ( 
    <UserConectedContainer>
        <li>
                <div onClick={handleLogout}>
                  <IoLogOutOutline size="30px" />Log out
                </div>
        </li>
        <li>
                <Link to={'/'}>
                  <FiUserCheck size="30px" />{user.user}
                </Link>
        </li>
    </UserConectedContainer>
    );
}