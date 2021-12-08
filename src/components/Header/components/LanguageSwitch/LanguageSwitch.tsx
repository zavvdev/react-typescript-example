import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { APP_LANGUAGES } from 'src/constants';
import classes from 'src/components/Header/components/LanguageSwitch/LanguageSwitch.module.scss';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const languages = Object.values(APP_LANGUAGES);

  const handleLanguageChange = (nextLang: string) => {
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className={classes.root}>
      {languages.map((lang, index) => (
        <div className={classes.langWrap} key={lang}>
          <button
            type="button"
            onClick={() => handleLanguageChange(lang)}
            className={cn(classes.lang, {
              [classes.active]: i18n.language === lang,
            })}
          >
            {lang}
          </button>
          {index === 0 ? <span>|</span> : null}
        </div>
      ))}
    </div>
  );
};

export default LanguageSwitch;
