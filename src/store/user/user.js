import {createSlice} from "@reduxjs/toolkit";
import {AuthorizationStatus, StoreStatus} from "../../util/const";
import {checkAuth} from '../api-actions';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authLoadingState: {
    status: StoreStatus.IDLE,
    error: null
  }
};

const user = createSlice({
  name: `user`,
  initialState,
  reducers: {},
  extraReducers: {
    [checkAuth.pending]: (state) => {
      state.authLoadingState.status = StoreStatus.LOADING;
    },
    [checkAuth.fulfilled]: (state, action) => {
      state.authorizationStatus = action.payload;
      state.authLoadingState.status = StoreStatus.SUCCEEDED;
    },
    [checkAuth.rejected]: (state, action) => {
      state.authLoadingState.status = StoreStatus.FAILED;
      state.authorizationStatus.error = action.error.message;
    }
  }
});

const {reducer} = user;

export {reducer as user};
