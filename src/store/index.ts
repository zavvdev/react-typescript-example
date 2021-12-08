import {
  configureStore as createStore,
  CombinedState,
  PreloadedState,
  Reducer,
} from '@reduxjs/toolkit';
import { rootReducer } from 'src/store/rootReducer';

type RootReducer = typeof rootReducer extends Reducer<
CombinedState<infer T>
> ? T : never;
type StoreInitialState = PreloadedState<CombinedState<RootReducer>>;

const configureStore = (
  args: {
    initialState?: StoreInitialState;
  } = {},
) => {
  const { initialState = {} } = args;
  return createStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
};

const store = configureStore();

export default store;
export { configureStore };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
