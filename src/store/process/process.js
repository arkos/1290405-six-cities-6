import {createSlice} from '@reduxjs/toolkit';

const process = createSlice({
  name: `process`,
  initialState: {
    filter: `Amsterdam`
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

const {reducer} = process;
export const {changeFilter} = process.actions;

export {reducer as process};
