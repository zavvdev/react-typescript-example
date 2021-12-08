import { Routes as RoutesSwitch, Route } from 'react-router-dom';
import { GENERAL_ROUTES } from 'src/constants/routes';
import Home from 'src/pages/Home/Home';
import NotFound from 'src/pages/NotFound/NotFound';

const Routes = () => {
  return (
    <RoutesSwitch>
      <Route path={GENERAL_ROUTES.home} element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </RoutesSwitch>
  );
};

export default Routes;
