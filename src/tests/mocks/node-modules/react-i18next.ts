export const mockI18nChangeLanguage = jest.fn((lang: string) => lang);

jest.mock('react-i18next', () => {
  const originalModule = jest.requireActual('react-i18next');
  return {
    ...originalModule,
    withTranslation: () => (Component: {
      defaultProps: Record<string, unknown>
    }) => {
      const NextComponent = { ...Component };

      NextComponent.defaultProps = {
        ...Component.defaultProps,
        t: (key: string) => key,
        i18n: {
          language: 'en',
          changeLanguage: mockI18nChangeLanguage,
        },
      };

      return NextComponent;
    },
    useTranslation: () => ({
      t: (key: string) => key,
      i18n: {
        language: 'en',
        changeLanguage: mockI18nChangeLanguage,
      },
    }),
  };
});

const defExp: never[] = [];
export default defExp;
