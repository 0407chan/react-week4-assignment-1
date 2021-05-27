import {
  screen, render, fireEvent,
} from '@testing-library/react';

import Input from '../../presentational/Input';

describe('<Input />', () => {
  const onChange = jest.fn();

  const onClick = jest.fn();

  function setup(value) {
    render(
      <Input
        value={value}
        onChange={onChange}
        onClick={onClick}
      />,
    );
  }

  it('renders label, input, button', () => {
    setup();

    expect(screen.getByLabelText('할 일')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '추가' })).toBeInTheDocument();
  });

  it('calls onChange when change value', () => {
    setup();

    const input = screen.getByLabelText('할 일');

    fireEvent.change(input, { target: { value: '뭐라도 하기' } });

    expect(onChange).toBeCalled();
  });

  it('calls onClick when click button', () => {
    setup();

    expect(screen.getByRole('button', { name: '추가' })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: '추가' }));

    expect(onClick).toBeCalled();
  });
});
