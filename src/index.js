import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import rootReducer from './store/root-reducer';
import {configureStore} from '@reduxjs/toolkit';
import App from "./components/app/app";

const OFFERS_COUNT = 2;

const store = configureStore({
  reducer: rootReducer
});

ReactDOM.render(
    <Provider store={store}>
      <App offersCount={OFFERS_COUNT} />,
    </Provider>,
    document.querySelector(`#root`)
);
