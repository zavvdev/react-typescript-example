import { useTranslation } from 'react-i18next';
import Button from 'src/components/Button/Button';
import GitHubIcon from 'src/components/svg-icons/GitHubIcon/GitHubIcon';
import Namespace from 'src/i18n/namespace';
import MainLayout from 'src/components/layouts/MainLayout/MainLayout';
import classes from 'src/pages/Home/Home.module.scss';
import Likes from 'src/pages/Home//components/Likes/Likes';

const HomeView = () => {
  const { t } = useTranslation([Namespace.Home, Namespace.Common]);

  return (
    <MainLayout>
      <div className={classes.root}>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
        <div className={classes.buttonsWrap}>
          <Button
            target="_blank"
            href={t(`${Namespace.Common}:links.repository`)}
            icon={<GitHubIcon />}
          >
            {t('buttons.repository')}
          </Button>
          <Likes />
        </div>
      </div>
    </MainLayout>
  );
};

export default HomeView;
