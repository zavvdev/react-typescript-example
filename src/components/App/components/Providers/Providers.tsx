import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ProvidersProps } from 'src/components/App/components/Providers/Providers.types';

const Providers = (props: ProvidersProps) => {
  const {
    children,
    store,
  } = props;

  return (
    <Provider store={store}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>
  );
};

export default Providers;
