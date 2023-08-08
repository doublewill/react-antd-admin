import { createSlice } from '@reduxjs/toolkit';

export const app = createSlice({
  name: 'app',
  initialState: {
    clientHeight: document.body.clientHeight - 64,
  },
  reducers: {
    updateClientHeight: (state, action) => {
      state.clientHeight = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateClientHeight } = app.actions;

export default app.reducer;
