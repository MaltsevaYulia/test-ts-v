// import { useAuth } from "hooks/useAuth";
// import { useDispatch } from "react-redux";
// import { logOut } from 'redux/auth/operations';
import  css  from './UserMenu.module.css';

export const UserMenu = () => {
  // const dispatch = useDispatch()
  // const {user}=useAuth()
  const user = {
    email:"test@gmail.com",
  }
    return (
      <>
        <button
          className={css.btn}
          type="button"
          // onClick={() => dispatch(logOut())}
        >
          Logout
        </button>
        <p className={css.user}>{user.email}</p>
      </>
    );
}