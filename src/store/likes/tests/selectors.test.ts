import { RootState } from 'src/store';
import { selectLikesAmount } from 'src/store/likes/selectors';

describe('likes selectors', () => {
  describe('selectLikesAmount', () => {
    test('should return likes amount', () => {
      const state = {
        likes: {
          amount: 42,
        },
      } as RootState;
      const result = selectLikesAmount(state);
      expect(result).toEqual(state.likes.amount);
    });
  });
});
