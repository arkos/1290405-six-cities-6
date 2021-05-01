import {createSlice} from "@reduxjs/toolkit";
import {AuthorizationStatus, StoreStatus} from "../../util/const";
import {checkAuth, login} from '../api-actions';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authLoadingState: {
    status: StoreStatus.IDLE,
    error: null
  },
  loginLoadingState: {
    status: StoreStatus.IDLE,
    error: null
  },
  user: null
};

const user = createSlice({
  name: `user`,
  initialState,
  reducers: {
    setAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    }
  },
  extraReducers: {
    [checkAuth.pending]: (state) => {
      state.authLoadingState.status = StoreStatus.LOADING;
    },
    [checkAuth.fulfilled]: (state) => {
      state.authorizationStatus = AuthorizationStatus.AUTH;
      state.authLoadingState.status = StoreStatus.SUCCEEDED;
    },
    [checkAuth.rejected]: (state, action) => {
      state.authLoadingState.status = StoreStatus.FAILED;
      state.authLoadingState.error = action.error.message;
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    },
    [login.pending]: (state) => {
      state.loginLoadingState.status = StoreStatus.LOADING;
    },
    [login.fulfilled]: (state, action) => {
      state.loginLoadingState.status = StoreStatus.SUCCEEDED;
      state.authorizationStatus = AuthorizationStatus.AUTH;
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.loginLoadingState.status = StoreStatus.FAILED;
      state.loginLoadingState.error = action.error.message;
    }
  }
});

const {reducer} = user;
const {setAuthorization} = user.actions;

export {reducer as user, setAuthorization};
