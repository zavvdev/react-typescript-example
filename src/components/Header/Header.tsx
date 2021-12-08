import Namespace from 'src/i18n/namespace';
import { useTranslation } from 'react-i18next';
import logo from 'src/assets/images/Logo.svg';
import LanguageSwitch from 'src/components/Header/components/LanguageSwitch/LanguageSwitch';
import classes from 'src/components/Header/Header.module.scss';

const Header = () => {
  const { t } = useTranslation(Namespace.Common);

  return (
    <header className={classes.root}>
      <img src={logo} className={classes.logo} alt={t('appName')} />
      <LanguageSwitch />
    </header>
  );
};

export default Header;
