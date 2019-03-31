/* globals describe, it */
import React from 'react';
import ReactDOM from 'react-dom';
import Craeft from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Craeft />, div);
  ReactDOM.unmountComponentAtNode(div);
});
