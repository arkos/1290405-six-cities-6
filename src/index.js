import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './store/root-reducer';
import {configureStore} from '@reduxjs/toolkit';
import App from "./components/app/app";

const OFFERS_COUNT = 2;

const store = configureStore({
  reducer: rootReducer
});

ReactDOM.render(
    <App offersCount={OFFERS_COUNT} />,
    document.querySelector(`#root`)
);
