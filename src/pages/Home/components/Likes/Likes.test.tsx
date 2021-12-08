import { screen, fireEvent } from '@testing-library/react';
import render from 'src/tests/utils/render';
import Likes from 'src/pages/Home/components/Likes/Likes';

describe('<Likes />', () => {
  test('should render Likes component (snapshot)', () => {
    const { asFragment } = render(<Likes />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should increase likes amount', () => {
    render(<Likes />);
    const btn = screen.getByText('buttons.likes');
    expect(screen.getByText('1')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByText('1')).not.toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
