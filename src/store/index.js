import { configureStore } from '@reduxjs/toolkit';
import app from './modules/app';

export default configureStore({
  reducer: {
    app,
  },
});

