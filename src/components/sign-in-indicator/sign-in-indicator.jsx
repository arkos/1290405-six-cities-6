import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {selectIsLoggedIn, selectIsLoggingIn, selectLoggedInUser} from '../../store/selectors';
import {AppRoute} from '../../util/route';

const SignInIndicator = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const loggedInUser = useSelector(selectLoggedInUser);

  const isLoggingIn = useSelector(selectIsLoggingIn);

  const loggedInClassName = isLoggedIn ? `header__user-name user__name` : `header__login`;
  const title = isLoggedIn ? loggedInUser.email : `Sign in`;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={isLoggedIn ? AppRoute.FAVORITES : AppRoute.LOGIN}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className={loggedInClassName}>{isLoggingIn ? `Signing in...` : title}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SignInIndicator;
