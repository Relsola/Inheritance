import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/features/counter/counterSlice';
import ThemeReducer from '@/features/theme';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: ThemeReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
