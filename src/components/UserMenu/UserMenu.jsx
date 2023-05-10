import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUsername, selectIsLoggedIn } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <div className={css.wrapper}>
          <p className={css.username}>Welcome, {username}</p>
          <button
            className={css.userNameBtn}
            type="button"
            onClick={() => dispatch(logOut())}
          >
            Logout
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
