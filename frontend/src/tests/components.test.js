import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Button from '../components/Button';

describe('Components', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe('<Button />', () => {
    let button;

    const onClick = jest.fn();

    beforeEach(async () => {
      act(() => {
        render(
          <Button
            type="button"
            className="test"
            handleClick={ onClick }
            name="test"
          />,
          container,
        );
      });

      button = container.querySelector('button');
    });

    afterEach(() => button = null);

    it('should render a button', () => 
      expect(button).toBeTruthy());
  });
});
