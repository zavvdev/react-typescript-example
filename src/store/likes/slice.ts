import { createSlice } from '@reduxjs/toolkit';
import { LikesState } from 'src/store/likes/types';

const initialLikesState: LikesState = {
  amount: 1,
};

const likesSlice = createSlice({
  name: 'likes',
  initialState: initialLikesState,
  reducers: {
    increment(state) {
      state.amount += 1;
    },
  },
});

export const likesActions = likesSlice.actions;
export default likesSlice.reducer;
