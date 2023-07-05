import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [] as Array<Card>
  },
  reducers: {
    setReduxCard: (state, action) => {
      state.cards = action.payload;
    }
  }
});

export const { setReduxCard } = cardSlice.actions;
export default cardSlice.reducer;
