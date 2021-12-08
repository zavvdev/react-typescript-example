import { useNavigate } from 'react-router-dom';
import { GENERAL_ROUTES } from 'src/constants/routes';
import NotFoundView from 'src/pages/NotFound/NotFound.view';

const NotFound = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate(GENERAL_ROUTES.home, {
      replace: true,
    });
  };

  return (
    <NotFoundView
      handleHomeClick={handleHomeClick}
    />
  );
};

export default NotFound;
