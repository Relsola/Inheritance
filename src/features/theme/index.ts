import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  sidebarSize: 'show' | 'close' | 'none';
}

const initialState: ThemeState = {
  sidebarSize: 'show'
};

export const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeSidebarSize: (
      state,
      action: PayloadAction<ThemeState['sidebarSize']>
    ) => {
      state.sidebarSize = action.payload;
    }
  }
});

export const { changeSidebarSize } = ThemeSlice.actions;

export default ThemeSlice.reducer;
