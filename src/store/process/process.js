import {createSlice} from '@reduxjs/toolkit';

const process = createSlice({
  name: `process`,
  initialState: {
    filter: null
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const {changeFilter} = process;

export default process.reducer;
