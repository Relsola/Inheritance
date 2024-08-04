import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ConfigState {
  device: 'mobile' | 'desktop';
}

const initialState: ConfigState = {
  device: 'desktop'
};

export const ConfigSlice = createSlice({
  name: 'config',

  initialState,

  reducers: {
    changeDevice: (state, action: PayloadAction<ConfigState['device']>) => {
      state.device = action.payload;
    }
  }
});

export const { changeDevice } = ConfigSlice.actions;
export default ConfigSlice.reducer;
