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

    it('should render a button', () => {
      expect(button).toBeTruthy();
    });

    it('should render button\'s properties correctly', () => {
      expect(button.getAttribute('type')).toBe('button');
      expect(button.getAttribute('name')).toBe('test');
      expect(button.getAttribute('class')).toBe('test');
    });

    it('should render button\'s inner text correctly', () => {
      expect(button.textContent).toBe('test');
    });

    it('should not render a disabled and clickable button', () => {
      expect(button).not.toBeDisabled();

      act(() => button.click());

      expect(onClick).toHaveBeenCalled();
    });

    it('should render a disabled and unclickable button', () => {
      expect(button).not.toBeDisabled();
      button.disabled = true;
      expect(button).toBeDisabled();

      act(() => button.click());

      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('<FileInput />', () => {
    let input;

    const onChange = jest.fn();

    beforeEach(async () => {
      act(() => {
        render(
          <FileInput
            type="file"
            className="test"
            labelText="test"
            value="test"
            name="test"
            id="test"
            handleClick={ onChange }
          />,
          container,
        );
      });

      input = container.querySelector('input');
    });

    afterEach(() => input = null);

    it('should render an input', () => {
      expect(input).toBeTruthy();
    });

    it('should render file input\'s properties correctly', () => {
      expect(input.getAttribute('type')).toBe('file');
      expect(input.getAttribute('class')).toBe('test');
      expect(input.getAttribute('label')).toBe('test');
      expect(input.getAttribute('id')).toBe('test');
      expect(input.getAttribute('value')).toBe('test');
      expect(input.getAttribute('htmlFor')).toBe('test');
    });

    it('should render a clickable file input', () => {
      act(() => input.click());

      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
