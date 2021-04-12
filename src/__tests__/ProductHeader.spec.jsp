import React from 'react';
import ReactDOM from 'react-dom';
import ProductHeader from '../domain/main/ProductHeader';
import { act } from 'react-dom/test-utils';

describe('ProductHeader Component', () => {
let container;
 
beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
      });

afterEach(() => {
        document.body.removeChild(container);
        container = null;
      });

it('renders without crashing', () => {
  act(() => {
  ReactDOM.render(<ProductHeader />, container);
});
  const h2 = container.querySelector('h2');

  expect(h2.textContent).toBe('Product Listing Page');
});


});