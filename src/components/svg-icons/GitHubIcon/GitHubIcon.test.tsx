import render from 'src/tests/utils/render';
import GitHubIcon from 'src/components/svg-icons/GitHubIcon/GitHubIcon';

describe('<GitHubIcon />', () => {
  test('should render GitHubIcon component (snapshot)', () => {
    const { asFragment } = render(<GitHubIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
