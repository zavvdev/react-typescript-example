import { render } from '@testing-library/react';
import App from 'src/components/App/App';

describe('<App />', () => {
  test('should render App component (snapshot)', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
