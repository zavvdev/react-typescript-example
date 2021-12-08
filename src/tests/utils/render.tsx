import { ReactElement } from 'react';
import {
  render as rtlRender,
  RenderOptions,
} from '@testing-library/react';
import App from 'src/components/App/App';
import { configureStore } from 'src/store';

interface Options {
  renderOptions?: RenderOptions;
  store?: ReturnType<typeof configureStore>;
}

const createRenderWrapper = (
  options: Options = {},
) => {
  const defaultStore = configureStore();

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <App.Providers store={options.store || defaultStore}>
      {children}
    </App.Providers>
  );

  return wrapper;
};

const render = (
  ui: ReactElement,
  options: Options = {},
) => {
  return {
    ...rtlRender(ui, {
      wrapper: createRenderWrapper(options),
      ...options.renderOptions || {},
    }),
  };
};

export default render;
export { createRenderWrapper };
