import { screen } from '@testing-library/react';
import render from 'src/tests/utils/render';
import MainLayout from 'src/components/layouts/MainLayout/MainLayout';

const textMock = 'textMock';

describe('<MainLayout />', () => {
  test('should render MainLayout component (snapshot)', () => {
    const { asFragment } = render(
      <MainLayout>
        <>{textMock}</>
      </MainLayout>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should have child component in layout', () => {
    render(
      <MainLayout>
        <>{textMock}</>
      </MainLayout>,
    );
    expect(screen.getByText(textMock)).toBeInTheDocument();
  });
});
