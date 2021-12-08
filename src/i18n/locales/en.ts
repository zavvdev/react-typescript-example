import Namespace from 'src/i18n/namespace';
import common from 'src/i18n/locales/common/en.json';
import home from 'src/i18n/locales/home/en.json';
import notFound from 'src/i18n/locales/notFound/en.json';

const en = {
  [Namespace.Common]: common,
  [Namespace.Home]: home,
  [Namespace.NotFound]: notFound,
};

export default en;
