import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import rootReducer from './store/root-reducer';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from './services/api';
import App from "./components/app/app";
import {setAuthorization} from './store/user/user';
import {AuthorizationStatus} from './util/const';
import {checkAuth} from './store/api-actions';
import {redirect} from './store/middlewares/redirect';

const OFFERS_COUNT = 2;

const api = createAPI(
    () => store.dispatch(setAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
    .concat(redirect)
});

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App offersCount={OFFERS_COUNT} />,
    </Provider>,
    document.querySelector(`#root`)
);
