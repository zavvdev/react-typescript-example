import store from 'src/store';
import Providers from 'src/components/App/components/Providers/Providers';
import Routes from 'src/components/App/components/Routes/Routes';
import 'src/styles/globals.scss';
import 'src/i18n';

const App = () => {
  return (
    <App.Providers store={store}>
      <App.Routes />
    </App.Providers>
  );
};

App.Providers = Providers;
App.Routes = Routes;

export default App;
