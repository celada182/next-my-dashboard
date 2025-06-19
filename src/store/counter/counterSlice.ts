import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
  isReady: boolean
}

const initialState: CounterState = {
  count: 0,
  isReady: false
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    init: (state, action: PayloadAction<number>) => {
      if (state.isReady) return;
      state.count = action.payload;
      state.isReady = true;
    },
    addOne: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1;
    },
    substractOne: (state) => {
      if (state.count === 0) return;
      state.count -= 1;
    },
    resetCount: (state, action: PayloadAction<number>) => {
      if (action.payload < 0) action.payload = 0;
      state.count += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { init, addOne, substractOne, resetCount } = counterSlice.actions;

export default counterSlice.reducer;
