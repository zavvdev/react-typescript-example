import { combineReducers } from '@reduxjs/toolkit';
import likes from 'src/store/likes/slice';

const rootReducer = combineReducers({
  likes,
});

export { rootReducer };
