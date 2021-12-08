import { useTranslation } from 'react-i18next';
import Button from 'src/components/Button/Button';
import Namespace from 'src/i18n/namespace';
import classes from 'src/pages/NotFound/NotFound.module.scss';
import { NotFoundViewProps } from 'src/pages/NotFound/NotFound.types';

const NotFoundView = (props: NotFoundViewProps) => {
  const { handleHomeClick } = props;
  const { t } = useTranslation(Namespace.NotFound);

  return (
    <div className={classes.root}>
      <span>{t('code')}</span>
      <h1>{t('text')}</h1>
      <Button className={classes.btn} onClick={handleHomeClick}>
        {t('buttons.home')}
      </Button>
    </div>
  );
};

export default NotFoundView;
