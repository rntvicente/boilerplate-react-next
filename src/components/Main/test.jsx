import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('Sholder render the heading', () => {
    const { container } = render(<Main />);
    expect(
      screen.getByRole('heading', { name: /boilerplate/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should render the color background correctly', () => {
    const { container } = render(<Main />);
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
