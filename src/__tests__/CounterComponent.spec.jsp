import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Counter from '../domain/main/Counter';
import { Provider } from "react-redux";
import configureStore from '../store/store';

describe('Counter Component', () => {
  const store = configureStore();
  //cuando demora en ejecutar la prueba
  jest.setTimeout(10000);
    let container;
 
    beforeEach(() => {
            container = document.createElement('div');
            document.body.appendChild(container);
          });
    
    afterEach(() => {
            document.body.removeChild(container);
            container = null;
          });

it('can render and update a counter',async () => {
  // Prueba la primer renderización y componentDidMount
  act(() => {
    //ReactDOM.render(<Counter />, container);
    ReactDOM.render(<Provider store={store}><Counter /></Provider>, container)
  });
  const button = container.querySelector('button');
  const label = container.querySelector('p');
  expect(label.textContent).toBe('You clicked0times');

  // Prueba la segunda renderización y componentDidUpdate
  act(() => {
    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
  //hacer un delay para mostrar la respuesta
  await new Promise((r) => setTimeout(r, 8000));
  expect(label.textContent).toBe('You clicked1times');

  
});
});