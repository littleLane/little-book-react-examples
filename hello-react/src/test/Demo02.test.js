import React from 'react';
import ReactDOM from 'react-dom';
import Demo02 from '../components/Demo02';

it('renders ok', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Demo02 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
