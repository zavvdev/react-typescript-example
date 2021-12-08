import { AnyAction } from '@reduxjs/toolkit';
import likesReducer, { likesActions } from 'src/store/likes/slice';
import { LikesState } from 'src/store/likes/types';

describe('likes slice', () => {
  test('should return the initial state', () => {
    expect(likesReducer(undefined, {} as AnyAction)).toEqual({ amount: 1 });
  });

  test('should handle likes increment', () => {
    const previousState: LikesState = {
      amount: 1,
    };
    expect(likesReducer(previousState, likesActions.increment())).toEqual({
      amount: 2,
    });
  });
});
