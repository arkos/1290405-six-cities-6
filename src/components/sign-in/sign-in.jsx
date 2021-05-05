import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import {login} from '../../store/api-actions';
import {selectIsLoggedIn, selectIsLoggingIn} from '../../store/selectors';
import {AppRoute} from '../../util/route';
import SignInIndicator from '../sign-in-indicator/sign-in-indicator';

const SignIn = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const isLoggingIn = useSelector(selectIsLoggingIn);

  const [userForm, setUserForm] = useState({
    email: ``,
    password: ``
  });

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (userForm.email === null || userForm.password === null) {
      return;
    }

    dispatch(login({login: userForm.email, password: userForm.password}));
  };

  const handleInputChange = (evt) => {
    evt.preventDefault();

    setUserForm({...userForm, [evt.target.name]: evt.target.value});
  };

  if (isLoggedIn) {
    return <Redirect to={AppRoute.ROOT}/>;
  }

  const disabledSubmitButton = isLoggingIn ? `disabled` : ``;

  const labelSubmitButton = isLoggingIn ? `Signing in...` : `Sign in`;

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.ROOT}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <SignInIndicator />
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" onChange={handleInputChange}/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" onChange={handleInputChange}/>
              </div>
              <button className="login__submit form__submit button" type="submit" onClick={handleFormSubmit} disabled={disabledSubmitButton}>{labelSubmitButton}</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
