import { fireEvent, screen } from '@testing-library/react';
import render from 'src/tests/utils/render';
import Button from 'src/components/Button/Button';

const textMock = 'text_mock';
const hrefMock = 'https://mock.com';

describe('<Button />', () => {
  test('should render Button component (snapshot)', () => {
    const { asFragment } = render(<Button>{textMock}</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should have a text', () => {
    render(<Button>{textMock}</Button>);
    expect(screen.getByText(textMock)).toBeInTheDocument();
  });

  test('should trigger onClick event', () => {
    const onClickFnMock = jest.fn();
    render(
      <Button onClick={onClickFnMock}>
        {textMock}
      </Button>,
    );
    const btn = screen.getByText(textMock);
    fireEvent.click(btn);
    expect(onClickFnMock).toBeCalledTimes(1);
  });

  test('should have icon', () => {
    const iconMock = 'icon_mock';
    render(<Button icon={iconMock}>{textMock}</Button>);
    expect(screen.getByText(iconMock)).toBeInTheDocument();
  });

  test('should render link', () => {
    render(<Button href={hrefMock}>{textMock}</Button>);
    const btn = screen.getByText(textMock);
    expect(btn.getAttribute('href')).toBe(hrefMock);
  });

  test('should render link with target=_blank', () => {
    render(
      <Button
        href={hrefMock}
        target="_blank"
      >
        {textMock}
      </Button>,
    );
    const btn = screen.getByText(textMock);
    expect(btn.getAttribute('target')).toBe('_blank');
  });

  test('should have disabled class', () => {
    render(<Button disabled>{textMock}</Button>);
    const btn = screen.getByText(textMock);
    expect(btn.classList.contains('disabled')).toBeTruthy();
  });
});
