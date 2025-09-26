import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { TextArea } from './TextArea';

describe('<TextArea />', () => {
  test('type', async () => {
    const user = userEvent.setup();

    render(<TextArea id="text" />);

    await user.type(screen.getByRole('textbox'), 'Hello,{enter}World!');
    expect(screen.getByRole('textbox')).toHaveValue('Hello,\nWorld!');
  });

  test('forward ref', () => {
    const ref = React.createRef<HTMLTextAreaElement>();

    render(<TextArea id="text" ref={ref} />);

    expect(screen.getByRole('textbox')).toEqual(ref.current);
  });
});
