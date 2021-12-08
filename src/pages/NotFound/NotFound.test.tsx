import { screen, fireEvent } from '@testing-library/react';
import render from 'src/tests/utils/render';
import { mockNavigate } from 'src/tests/mocks/node-modules/react-router-dom';
import { GENERAL_ROUTES } from 'src/constants/routes';
import NotFound from 'src/pages/NotFound/NotFound';

describe('<NotFound />', () => {
  test('should render NotFound page (snapshot)', () => {
    const { asFragment } = render(<NotFound />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should have http code', () => {
    render(<NotFound />);
    expect(screen.getByText('code')).toBeInTheDocument();
  });

  test('should have a text', () => {
    render(<NotFound />);
    expect(screen.getByText('text')).toBeInTheDocument();
  });

  test('should have a Home button', () => {
    render(<NotFound />);
    const btn = screen.getByText('buttons.home');
    expect(btn.getAttribute('type')).toBe('button');
  });

  test('should call navigate method', () => {
    render(<NotFound />);
    const btn = screen.getByText('buttons.home');
    fireEvent.click(btn);
    expect(mockNavigate).toBeCalledWith(
      GENERAL_ROUTES.home,
      { replace: true },
    );
  });
});
