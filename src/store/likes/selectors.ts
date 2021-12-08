import { RootState } from 'src/store';

export const selectLikesAmount = (state: RootState) => state.likes.amount;
