import { screen } from '@testing-library/react';
import render from 'src/tests/utils/render';
import Home from 'src/pages/Home/Home';

describe('<Home />', () => {
  test('should render Home page (snapshot)', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should have a title', () => {
    render(<Home />);
    expect(screen.getByText('title')).toBeInTheDocument();
  });

  test('should have a description', () => {
    render(<Home />);
    expect(screen.getByText('description')).toBeInTheDocument();
  });

  test('should have a button to repository', () => {
    render(<Home />);
    const btn = screen.getByText('buttons.repository');
    expect(btn.getAttribute('href')).toBe('common:links.repository');
  });

  test('should have a likes button', () => {
    render(<Home />);
    expect(screen.getByText('buttons.likes')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
