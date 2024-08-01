import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from '../api/movieApi.ts';
import themeReducer from './slices/themeSlice';

const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
