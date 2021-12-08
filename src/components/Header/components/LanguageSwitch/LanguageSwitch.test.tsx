import { screen, fireEvent } from '@testing-library/react';
import { mockI18nChangeLanguage } from 'src/tests/mocks/node-modules/react-i18next';
import render from 'src/tests/utils/render';
import LanguageSwitch from 'src/components/Header/components/LanguageSwitch/LanguageSwitch';

describe('<LanguageSwitch />', () => {
  test('should render LanguageSwitch component (snapshot)', () => {
    const { asFragment } = render(<LanguageSwitch />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should call i18n changeLanguage function', () => {
    render(<LanguageSwitch />);
    const enBtn = screen.getByText('en');
    const ruBtn = screen.getByText('ru');
    fireEvent.click(ruBtn);
    expect(mockI18nChangeLanguage).toBeCalledWith('ru');
    fireEvent.click(enBtn);
    expect(mockI18nChangeLanguage).toBeCalledWith('en');
  });
});
