import React from 'react';
import ReactDOM from 'react-dom';
import Demo01 from '../components/Demo01';

it('renders ok', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Demo01 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
